import {Outlet} from "react-router-dom";

import Nav from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
