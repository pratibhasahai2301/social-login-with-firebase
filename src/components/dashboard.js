import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {ExitToAppOutlined} from "@material-ui/icons";
import Alert from '@material-ui/lab/Alert';


import {useAuth} from "../contexts/authContext";
import {StyledButton} from "../styles/styles";

const Dashboard = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory();
    const [error, setError] = useState("");

    const handleLogout = async() => {
        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to logout');
        }
    }

    return <>
        <Typography variant={'h5'} className="mb-3">Dashboard</Typography>
        {error && <Alert severity="error">{error}</Alert>}

        <p>You are logged in as <span className="fw-bold">
            {currentUser.displayName}
        </span></p>

        <StyledButton variant={"contained"}
                color={"secondary"}
                onClick={handleLogout}
                startIcon={<ExitToAppOutlined />}>
            Logout
        </StyledButton>
    </>
};

export default Dashboard;
