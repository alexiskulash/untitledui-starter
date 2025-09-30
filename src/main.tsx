import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppLayout } from "@/layouts/app-layout";
import { LoadingScreen } from "@/components/application/loading-indicator/loading-screen";
import "@/styles/globals.css";

const HomeScreen = lazy(() => import("@/pages/home-screen").then((m) => ({ default: m.HomeScreen })));
const GettingStartedPage = lazy(() => import("@/pages/examples/getting-started").then((m) => ({ default: m.GettingStartedPage })));
const ComponentsExamplePage = lazy(() => import("@/pages/examples/components").then((m) => ({ default: m.ComponentsExamplePage })));
const NotFound = lazy(() => import("@/pages/not-found").then((m) => ({ default: m.NotFound })));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route index element={<HomeScreen />} />
                                <Route path="getting-started" element={<GettingStartedPage />} />
                                <Route path="components" element={<ComponentsExamplePage />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
