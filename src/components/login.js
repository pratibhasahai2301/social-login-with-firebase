import React, {useEffect} from 'react'
import {Typography} from "@material-ui/core";
import {facebookProvider, googleProvider} from "../config/authMethod";
import FacebookIcon from "@material-ui/icons/Facebook";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {useAuth} from "../contexts/authContext";
import {StyledButton} from "../styles/styles";

const StyledButtonContainer = styled.div`
    width: 350px;
    height: 500px;
    border: 1px solid #e6e7e8;
`;

const StyledImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;

const Login = () => {
    const { loginWithProvider, currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, [currentUser])

    const handleClick = async (provider) => {
        await loginWithProvider(provider);
    }

    return <>
        <Typography variant={'h5'} className="mb-4">Social Media Login using firebase</Typography>

        <StyledButtonContainer className="d-flex flex-column align-items-center justify-content-center pt-3">
            <StyledButton onClick={() => handleClick(facebookProvider)}
                          variant="contained"
                          color="primary"
                          className="mb-5 text-uppercase"
                          startIcon={<FacebookIcon />}>
                Login using Facebook
            </StyledButton>

            <StyledButton onClick={() => handleClick(googleProvider)}
                          variant="outlined"
                          className="mb-5 text-uppercase"
                          color="primary">
                <StyledImg src="../images/google-icon.png" width={16} height={16}/>
                Login using Google
            </StyledButton>
        </StyledButtonContainer>
    </>
};

export default Login;
