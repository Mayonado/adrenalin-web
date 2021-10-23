import { lazy } from "react";

// lazy load all components
const Feed = lazy(() => import("../pages/Feed/Feed"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: Feed,
  },
];
