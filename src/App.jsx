import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import "react-country-state-city/dist/react-country-state-city.css";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
