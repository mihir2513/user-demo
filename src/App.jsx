import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import "react-country-state-city/dist/react-country-state-city.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const originalConsoleLog = console.log;
        const originalConsoleWarn = console.warn;
        const originalConsoleError = console.error;

        console.log = console.warn = console.error = () => {};

        return () => {
            console.log = originalConsoleLog;
            console.warn = originalConsoleWarn;
            console.error = originalConsoleError;
        };
    }, []);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
