import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/Layout/DashboardLayout/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";

export default function AppRoutes(){

    return(

        <Routes>

            <Route element={<DashboardLayout/>}>

                <Route
                    path="/"
                    element={<Dashboard/>}
                />

            </Route>

        </Routes>

    )

}