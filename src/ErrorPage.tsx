import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Card } from "flowbite-react";

import Nav from "./Nav";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Nav />
      <div id="error-page" style={{ height: "calc(100% - 48px)" }}>
        <div className="bgimage fixed bg-fixed"></div>
        <div className="mx-auto lg:h-full lg:align-middle lg:items-center dark:bg-transparent">
          <div className="align-middle md:flex flex-row justify-around">
            <Card className="m-2 sm:m-4 md:m-8 basis-full md:basis-1/2 dark:bg-neutral-900/90 dark:border-transparent">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Oops!</h1>
              { isRouteErrorResponse(error) && error.status === 404 && <div>
                <p className="mb-2">{error.status} - Think we got lost somehow...</p>
                <p>Thankfully, that helpful navbar is still up top.</p>
              </div>}
              { isRouteErrorResponse(error) && error.status !== 404 && <div>
                <p className="mb-2">Seems an error happened...</p>
                <p>{error.status} - {error.statusText || JSON.stringify(error.data)}</p>
              </div>}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}