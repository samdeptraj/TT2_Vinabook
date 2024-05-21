import { useLocation } from "react-router-dom";


export const LocationGetHeader = (paramName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(paramName);
}