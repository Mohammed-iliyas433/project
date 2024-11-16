import { useRouteError } from "react-router-dom";
function Error(){
    const err=useRouteError();
    console.log(err)
    return(
        <>
            <h1>OOPS</h1>
            <h2>Error</h2>
            <h2>{err.status}</h2>
            <h2>{err.data}</h2>
        </>
    )
}
export default Error;