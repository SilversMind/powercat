import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProfileScreen} from "./ProfileScreen/ProfileScreen";
import {TrainingScreen} from "./TrainingScreen/TrainingScreen";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/profile",
        element: <ProfileScreen/>,
    },
    {
        path: "/",
        element: <TrainingScreen/>,
    },
]);

export const Router = () => {
    return (<RouterProvider router={router}/>)
}