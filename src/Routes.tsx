import Main from "./routes/Main/Main.tsx";
import ProjectsPage from "./routes/ProjectsPage/ProjectsPage.tsx";

import PROJECTS from "./data/Projects";

type SiteRoute = {
  path?: string,
  index?: boolean,
  element: JSX.Element,
  label:string
};

const Routes: SiteRoute[] = [
  {
    index: true,
    element: <Main />,
    label: "Home"
  },
  ...Object.keys(PROJECTS).map(page => ({ // Add each of the project pages.
    path: PROJECTS[page].route,
    element: <ProjectsPage key={page} data-project-page={page} />,
    label: PROJECTS[page].label
  })),
];

export default Routes;