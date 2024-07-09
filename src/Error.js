import { useRouteError } from "react-router-dom"


const Error = () => {
    let err = useRouteError();
    return <>
        <h1>something went wrong{err.status}</h1>
    </>
}
export default Error