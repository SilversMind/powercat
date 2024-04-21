import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProfilePage} from "./Profile/ProfilePage";
import React from "react";
import TrainingPage from "./Training/TrainingPage";
import ProgramPage from "./Program/ProgramPage";

const router = createBrowserRouter([
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "/",
        element: <TrainingPage/>,
    },
    {
        path: "/programs",
        element: <ProgramPage/>,
    },
]);

export const Router = () => {
    return (<RouterProvider router={router}/>)
}