import { createBrowserRouter } from "react-router";

import Layout from "@/Layout";
import LandingPage from "@/pages/LandingPage";
import Catalogo from "@/pages/Catalogo";
import MiPerfil from "@/pages/MiPerfil";
import Cesta from "@/pages/Cesta";


const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,

    children: [
        {
            index:true,
            element: <LandingPage />
        },
        {
            path: "catalogo",
            element: <Catalogo />
        },
        {
            path: "perfil",
            element: <MiPerfil />
        },
        {
            path: "cesta",
            element: <Cesta />
        }
    ]
}]);

export default router;

