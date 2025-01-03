import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return <>
    <header>
      <h1>App Layout</h1>
    </header>
    <Outlet />
  </>
}