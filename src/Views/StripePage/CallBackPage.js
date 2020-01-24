import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../Components/Spinner';
import {axiosWithBase} from '../../AxiosCustom';
import { Redirect } from 'react-router-dom';
function CallBackRedirect(props) {
    const [spinner, updateSpinner] = useState(true);

     useEffect(() =>{
        const {state} = props;
        const {location} = props
        const parse = queryString.parse(location.search);
    //     // the whole logic goes here
        axiosWithBase()
            .post("/payments/fetchcredentials", {id: state.loggedInUser._id, authCode:parse.code})
            .then(() => {
                toast.success('congratulations you can now upload art');
                props.history.push('/myaccount')
            }).catch(()=> toast.error('operation failed'))
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
};

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(CallBackRedirect)