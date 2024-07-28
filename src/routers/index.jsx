import { BrowserRouter, Route, Routes } from "react-router-dom";

export const pages = [
    { path: "/", component: Home },
    { path: "/#", component: Home },
    { path: "*", component: Page404 },
];

const DBRoutes = () => {
    return (
        <BrowserRouter>
            <Cookie />
            <SiteHeader />
            <Routes>
                <Route element={<Page404 />} />
                {pages.map(({ component: Component, path }, index) => {
                    return <Route key={index} element={<Component />} path={path} />;
                })}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default DBRoutes;