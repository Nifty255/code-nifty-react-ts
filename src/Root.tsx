import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <div id="detail" style={{height: "calc(100% - 48px)"}}>
        <Outlet />
      </div>
    </>
  );
}