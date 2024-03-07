import { Outlet } from "react-router-dom";
import Nav from "../Nav";

function Root() {
  return (
    <main className="flex flex-col gap-8">
      <Nav />
      <Outlet />
    </main>
  );
}

export default Root;
