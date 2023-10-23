import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProfilePage} from "./Profile/ProfilePage";
import React from "react";
import TrainingPage from "./Training/TrainingPage";

const router = createBrowserRouter([
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "/",
        element: <TrainingPage/>,
    },
]);

export const Router = () => {
    return (<RouterProvider router={router}/>)
}