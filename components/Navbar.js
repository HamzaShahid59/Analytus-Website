'use client'

import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    List,
    ListItemButton,
    useMediaQuery,
    useTheme,
    Container,
} from '@mui/material';
import { Code, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        // { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.substring(1));
            let currentSection = 'home';
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const restore = (e) => { if (e.persisted) window.scrollTo({ top: 0 }); };
        window.addEventListener('pageshow', restore);
        return () => window.removeEventListener('pageshow', restore);
    }, []);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const handleNavClick = (href) => {
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        setActiveSection(sectionId);
        if (menuOpen) toggleMenu();
    };


    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={scrolled ? 1 : 0}
                sx={{
                    bgcolor: 'white',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: theme.zIndex.drawer + 1
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 1, height: '75px' }}>
                        {/* Logo */}
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                {/* <img src='/logo.png' className='h-[100px] w-auto object-contain' alt='Logo' /> */}
                                {/* <Code className="h-6 w-6" color={theme.palette.primary.main} />
                                <Typography variant="h6" color="primary">Optim Alze</Typography> */}
                                <img src='/analytusLogo.svg' className="h-8 w-8" />
                                <Typography sx={{ fontSize: '24px', fontWeight: '600', color: theme.palette.primary.main, }}>Analytus</Typography>
                            </Box>
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                            <List sx={{ display: 'flex' }}>
                                {navLinks.map(link => (
                                    <ListItemButton
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        sx={{
                                            color: activeSection === link.href.substring(1)
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                            fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                            '&:hover': {
                                                color: theme.palette.primary.main
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>

                        {/* Mobile Toggle */}
                        <IconButton
                            onClick={toggleMenu}
                            color="primary"
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Menu */}
            <Box
                sx={{
                    position: 'fixed',
                    top: '55px',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: menuOpen ? 'calc(100vh - 64px)' : 0,
                    bgcolor: 'white',
                    zIndex: theme.zIndex.drawer,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease-in-out',
                    boxShadow: menuOpen ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: 7, md: 0 } }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {navLinks.map(link => (
                                <ListItemButton
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    sx={{
                                        py: 2,
                                        color: activeSection === link.href.substring(1)
                                            ? theme.palette.primary.main
                                            : theme.palette.text.primary,
                                        fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                        '&:hover': {
                                            color: theme.palette.primary.main
                                        }
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                        {link.name}
                                    </Typography>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Navbar;
