import * as React from "react";
import { useClock } from '../customHooks/useClock'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we
		can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0 }}
                >
                    {/*This is a simple Menu
			Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies
		default font weights and sizes */}

                <Typography align='center' variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    My home store
                </Typography>
                
                <Button  color="inherit" onClick={() => navigate("cart")} >
                    <LocalMallRoundedIcon></LocalMallRoundedIcon>
                    </Button>
                
            </Toolbar>
        </AppBar>
    );
}
