import  {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFetch = (url, options, arg) => {
    const { auth } = useSelector((state) => state);
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    });

    function fetchNow(url, options) {
        setStatus({ loading: true });
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setStatus({ loading: false, data: res.data });
            })
            .catch((error) => {
                setStatus({ loading: false, error });
            });
    }

    useEffect(() => {
        if (url) {
            fetchNow(url, options);
        }
    }, [arg]);

    return { ...status, fetchNow };
}



