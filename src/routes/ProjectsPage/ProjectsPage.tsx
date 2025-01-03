import { useState } from "react";
import { Button, Card, Modal } from "flowbite-react";

import PROJECTS from "../../data/Projects";

import "./ProjectsPage.css";

const modalTheme = {
  "root": {
    "show": {
      "on": "flex bg-neutral-900 bg-opacity-50 dark:bg-opacity-80"
    }
  },
  "content": {
    "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-neutral-700"
  },
  "header": {
    "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-neutral-600",
    "title": "text-xl font-medium text-neutral-900 dark:text-white",
    "close": {
      "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white"
    }
  }
};

const buttonTheme = {
  "color": {
    "orange": "border border-orange-300 bg-white text-orange-900 focus:ring-4 focus:ring-orange-300 enabled:hover:bg-orange-100 dark:border-orange-500 dark:bg-orange-500 dark:text-white dark:focus:ring-orange-600 dark:enabled:hover:border-orange-600 dark:enabled:hover:bg-orange-600",
  },
  "inner": {
    "base": "flex items-stretch justify-around transition-all duration-200 text-black"
  }
};

function ProjectsPage(props: { "data-project-page": string }) {
  const [openModal, setOpenModal] = useState(false);
  const [entryType, setEntryType] = useState("");
  const [entryKey, setEntryKey] = useState("");

  const projectPage = PROJECTS[props["data-project-page"]];
  const entries = projectPage.projects;

  const bgClasses = `bgimage ${projectPage.background} fixed bg-fixed`;

  return (
    <>
      <div className={bgClasses}></div>
      <div className="lg:h-full lg:align-middle lg:items-center dark:bg-transparent">
        {Object.keys(entries).map(eType => {
          const entryCategory = entries[eType];
          return <div key={eType} className="px-2 sm:px-4 lg:px-8">
            <div className="w-full md:w-72 p-2 mt-8 mb-2 dark:bg-neutral-900/90 rounded-lg w-fit">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{entryCategory.title}</h1>
            </div>
            <div className="align-middle md:flex flex-wrap justify-start">
              {Object.keys(entryCategory.entries).map(key => {
                const entry = entryCategory.entries[key];
                return <Card onClick={() => {
                  setEntryType(eType);
                  setEntryKey(key);
                  setOpenModal(true);
                }} key={key} imgAlt={entry.title} imgSrc={entry.image} className="w-full md:w-72 my-2 md:mr-4 lg:mr-8 last:mr-0 cursor-pointer dark:bg-neutral-900/90 dark:border-none">
                  <div className="w-full">
                    <h3 className="font-black">{entry.title}</h3>
                    <span className="text-sm">{entry.company} - {entry.year}</span>
                    {Array.isArray(entry.techs) &&
                    <div className="flex flex-wrap justify-between">
                      {entry.techs.map(tech => <div key={tech} className="text-sm basis-1/2">&bull; {tech}</div>)}
                    </div>
                    }
                  </div>
                </Card>;
              })}
            </div>
          </div>;
        })}
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} theme={modalTheme}>
        <Modal.Header>
          <span>{entries[entryType]?.entries[entryKey]?.title}</span>
          {entries[entryType]?.entries[entryKey]?.link &&
            <><span>&nbsp;</span><a href={entries[entryType]?.entries[entryKey]?.link} target="_blank" rel="noreferrer"><Button color="orange" theme={buttonTheme} className="inline">{entries[entryType]?.entries[entryKey]?.link}</Button></a></>
          }
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: entries[entryType]?.entries[entryKey]?.longDesc }}></Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectsPage;
