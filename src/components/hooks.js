import React from 'react';
import axios from 'axios';

export const useViewPort = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width };      
}

export const useHTTPContacts = () => {
    const [contactUsers,setContactUsers]=React.useState([]);
    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            setContactUsers(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    });
    return { contactUsers };
}