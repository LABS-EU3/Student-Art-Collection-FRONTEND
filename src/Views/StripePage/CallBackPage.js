import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../Components/Spinner';
import {axiosWithBase} from '../../AxiosCustom';
export default function CallBackRedirect() {
    const [spinner, updateSpinner] = useState(true);

    useEffect(() =>{
        // the whole logic goes here
        axiosWithBase().post(url)
    }, [])
    return (
        <div>
            {spinner && <Spinner />}
            <ToastContainer
                position="bottom-center"
                bodyClassName="toast"
                autoClose={3000}
                closeButton={false}
			/>
        </div>
    )
}