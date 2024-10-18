import { useIntegration } from "@telegram-apps/react-router-integration";
import { initNavigator } from "@telegram-apps/sdk-react";
import { useEffect, useMemo } from "react";
import {
    Route,
    Router as ReactRouter,
    Routes,
} from "react-router-dom";
import {
    StatsPage,
} from "@/pages";
import Nav from "@/components/Nav.tsx";
import Layout from "@/layouts/Layout.tsx";

function Router() {
    const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
    const [location, reactNavigator] = useIntegration(navigator);

    useEffect(() => {
        void navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    const nav = useMemo(
        () => <Nav location={location.pathname} />,
        [location.pathname],
    );

    return (
    <ReactRouter location={location} navigator={reactNavigator}>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout nav={nav}>
                        <StatsPage />
                    </Layout>
                }
            />
        </Routes>
    </ReactRouter>
    );
}

export default Router;
