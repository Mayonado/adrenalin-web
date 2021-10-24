import { lazy } from "react";

// lazy load all react pages
const Feed = lazy(() => import("../pages/Feed/Feed"));
const FeedDetails = lazy(() => import("../pages/FeedDetails/FeedDetails"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: Feed,
    title: "Mountains",
  },
  {
    path: "/feed-details/:id",
    exact: true,
    component: FeedDetails,
    title: "Mountain details",
  },
];
