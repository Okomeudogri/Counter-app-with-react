import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/404Page";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const objectRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "/counter",
        element: <Counter />
    }
]);

root.render(
    <StrictMode>
        <ErrorBoundary>
            <RouterProvider router={objectRouter} />
        </ErrorBoundary>
    </StrictMode>
); 

