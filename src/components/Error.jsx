import { Link, useRouteError } from "react-router-dom";
function Error(){
    const err = useRouteError();
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>
            <strong> {err.data}</strong>
            </p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}

export default Error;