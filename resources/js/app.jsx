import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import store from "./app/store/store";

const appName = import.meta.env.VITE_APP_NAME || "Blue Waves Resort";

createInertiaApp({
    title: (title) => `${title}${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./app/pages/${name}.jsx`,
            import.meta.glob("./app/pages/**/*.jsx")
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
