import { lazy } from "react";
import { IRoute } from "./interfaces";

const Start = lazy(() => import("./pages/Start/index"));
const Quize = lazy(() => import("./pages/Quize/index"));

export const PublicRoutes: IRoute[] = [
  {
    path: "/",
    component: <Start />,
    key: "start",
  },
  {
    path: "/quize",
    component: <Quize />,
    key: "quize",
  },
];
