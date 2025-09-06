import { useRouteError } from "react-router";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1> You reached error page </h1>
            <h1> Type valid path </h1>
            <h3>
                {err.status}:{err.statusText}
            </h3>
        </div>
    )
}

export default Error;