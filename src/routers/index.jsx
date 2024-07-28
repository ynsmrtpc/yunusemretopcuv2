import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Header from "@/components/Header";

export const pages = [
    { path: "/", component: Home },
    { path: "/#", component: Home },
    { path: "*", component: NotFound },
];

export default function Routers() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {pages.map(({ component: Component, path }, index) => {
                    return <Route key={index} element={<Component />} path={path} />;
                })}
            </Routes>
        </BrowserRouter>
    );
};
