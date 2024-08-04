import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import BlogList from "@/pages/BlogList";

export const pages = [
    { path: "/", component: Home },
    { path: "/#", component: Home },
    { path: "/about", component: About },
    { path: "/portfolio", component: Portfolio },
    { path: "/blogs", component: BlogList },
    { path: "*", component: NotFound },
];

export default function Routers() {
    return (
        <BrowserRouter>
            <div>
                <main className="box-border flex flex-col flex-wrap w-full min-h-screen justify-between">
                    <Header />
                    <Routes>
                        {pages.map(({ component: Component, path }, index) => {
                            return <Route key={index} element={<Component />} path={path} />;
                        })}
                    </Routes>
                    <Footer />
                </main>
            </div>
        </BrowserRouter>
    );
};
