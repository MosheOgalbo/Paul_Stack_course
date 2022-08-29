import React, { useState } from "react";
import { useClock } from '../customHooks/useClock'
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Header() {

    const navigate = useNavigate()
    const clock = useClock()
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static">
            <Toolbar variant="h1">
                {/*Inside the IconButton, we
		can render various icons*/}
                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0 }}
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}

                >

                    {/*This is a simple Menu
			Icon wrapped in Icon */}
                    <MenuIcon />

                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal:'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>

                    <MenuItem onClick={handleClose} >
                        <Button onClick={() => navigate('Admin')}>
                            Admin
                        </Button>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Button onClick={() => navigate('homePage')}>
                            about
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button onClick={() => navigate('*')}>
                            login
                        </Button>
                    </MenuItem>

                </Menu>


                <Typography align='center' variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" onClick={() => navigate("/")} >
                        My home store
                    </Button>
                </Typography>
                <div>
                    {clock}
                </div>

                <Button color="inherit" onClick={() => navigate("cart")} >
                    <LocalMallRoundedIcon></LocalMallRoundedIcon>
                </Button>

            </Toolbar>
        </AppBar>
    );
}
