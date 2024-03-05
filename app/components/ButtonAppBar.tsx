"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useUserStore } from "../hooks/store/storeUser"
import MyModal from './MyModal';
import { SignOut } from '../auth/firebase';
import { useRouter } from 'next/navigation';
import { AlertSnackBar } from './AlertSnackBar';
import { FormAuth } from './FormAuth';
import { FormSignUp } from './FormSignUp';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const router = useRouter()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { user } = useUserStore();
    const [isOpenSignin, setIsOpenSignin] = React.useState(false);
    const [isOpenSignup, setIsOpenSignup] = React.useState(false);
    const [isLogout, setIsLogout] = React.useState(false);

    const openModalSignin = () => setIsOpenSignin(true);
    const openModalSignup = () => setIsOpenSignup(true);
    // const closeModal = () => setIsOpen(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseUserMenuItem = (setting: string) => {
        switch (setting) {
            case "Logout":
                SignOut();
                router.push("/")
                setIsLogout(true)
                break;
        }
        handleCloseUserMenu();
    }

    const handleOpenSignup = () => {
        setIsOpenSignin(false)
        setIsOpenSignup(true)
    }

    const handleOpenSignin = () => {
        setIsOpenSignup(false)
        setIsOpenSignin(true)
    }

    return (
        <>
            {user.uid ?
                <></> :
                <div>
                    <MyModal
                        isOpen={isOpenSignin}
                        closeModal={() => setIsOpenSignin(false)}
                        title=""
                        message=""
                        bgModal='bg-inherit'
                        buttonText="">
                        <FormAuth toSignUp={handleOpenSignup} />
                    </MyModal>
                    <MyModal
                        isOpen={isOpenSignup}
                        closeModal={() => setIsOpenSignup(false)}
                        title=""
                        message=""
                        bgModal='bg-inherit'
                        buttonText="">
                        <FormSignUp toSignIn={handleOpenSignin} />
                    </MyModal>
                </div>
            }
            <AppBar position="static" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {!user.uid ?
                            <div className='flex flex-grow-0 p-0'>
                                <Button variant="outlined" color='inherit' onClick={openModalSignin} className="m-1">Masuk</Button>
                                <Button variant="outlined" color='inherit' onClick={openModalSignup} className='m-1'>Daftar</Button>
                            </div> : <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={() => handleCloseUserMenuItem(setting)}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        }
                    </Toolbar>
                </Container>
            </AppBar >
            <AlertSnackBar open={isLogout} handleClose={() => setIsLogout(false)} message={'Logout Success'} type={"success"} duration={6000} />
        </>
    );
}
export default ResponsiveAppBar;