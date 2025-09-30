import { Outlet, useLocation } from "react-router";
import { BookOpen01, Grid01, Home01 } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";

export const AppLayout = () => {
    const location = useLocation();

    const items = [
        { label: "Home", href: "/", icon: Home01, current: location.pathname === "/" },
        { label: "Getting started", href: "/getting-started", icon: BookOpen01, current: location.pathname.startsWith("/getting-started") },
        { label: "Components", href: "/components", icon: Grid01, current: location.pathname.startsWith("/components") },
    ];

    return (
        <div className="flex min-h-dvh w-full flex-col bg-primary">
            <HeaderNavigationBase activeUrl={location.pathname} items={items} />

            <main className="flex grow items-start py-8 md:py-12">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
