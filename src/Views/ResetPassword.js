import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required()
      .min(8)
  });

  const StyledForm = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 0.5px lightgrey;
  border-radius: 10px;
  padding: 80px 20px;
  font-family: ‘Roboto’, sans-serif;
`;

const ResetPassword