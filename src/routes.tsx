import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./Pages/Timeline";
import { TweetView } from "./Pages/TweetView";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default/>,
    children: [
      {
        path: "/",
        element: <Timeline/>
      },
      {
        path: "/tweet",
        element: <TweetView/>
      }
    ]
  }
])