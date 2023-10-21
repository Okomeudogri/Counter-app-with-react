import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
//import { ErrorBoundary } from "react-error-boundary";
import "./root.css";

export default function Root() {
    const [hasError, setHasError] = useState(false);
 if (hasError) {
        throw new Error("there is an error in the code");
    } 

    return (
        <>
        
        <h1>Welcome to my website</h1>
        <p>
            Hello check out my <Link to="/counter">counter app</Link>
        </p>
        <div>
            <p>
                You can also check out our 404 page by clicking on this link that directs you to an invalid path <Link to="/count">404 Page</Link>
            </p>
            <h2>You can test Error Boundary here</h2>
        
            <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
        </div>
        
        </>

    );
}