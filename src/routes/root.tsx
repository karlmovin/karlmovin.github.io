import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import SideSection from "../components/SideSection";
// import Footer from "../footer";

function Root() {
  return (
    <>
      <main className="flex flex-col">
        <Nav />
        <div className="flex flex-row">
          <Outlet />
          <SideSection />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Root;
