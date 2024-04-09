import { Outlet } from "react-router-dom";
import Nav from "../Nav";
// import Footer from "../footer";

function Root() {
  return (
    <>
      <main className="flex flex-col">
        <Nav />
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Root;
