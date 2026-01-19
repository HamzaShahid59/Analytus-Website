'use client'

import React, { useEffect, useMemo, useState } from 'react';
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
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  // Add Jobs (route) + keep other links (sections)
  const navLinks = useMemo(() => ([
    { name: 'Home', href: '#home', type: 'section' },
    { name: 'About', href: '#about', type: 'section' },
    { name: 'Services', href: '#services', type: 'section' },
    { name: 'Products', href: '#products', type: 'section' },
    { name: 'Contact', href: '#contact', type: 'section' },
    { name: 'Jobs', href: '/jobs', type: 'route' }

  ]), []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const scrollToSection = (hashHref) => {
    const sectionId = hashHref.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleNavClick = (link) => {
    // Always close mobile menu when clicking
    if (menuOpen) toggleMenu();

    // Route links: simple navigation
    if (link.type === 'route') {
      router.push(link.href);
      return;
    }

    // Section links:
    // - If we are on home, smooth scroll
    // - If we are on another page, navigate to home with hash (/#about)
    if (isHome) {
      scrollToSection(link.href);
    } else {
      router.push(`/${link.href}`); // "/#about"
    }
  };

  // Scroll spy only on Home page (because other pages don't have those sections)
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter(link => link.type === 'section')
        .map(link => link.href.substring(1));

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, navLinks]);

  // If user lands on /#about (or is navigated there), smooth scroll on mount
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash;
    if (!hash) return;

    // Small delay so the page sections are definitely mounted
    const t = setTimeout(() => scrollToSection(hash), 100);
    return () => clearTimeout(t);
  }, [isHome]);

  // Keep your pageshow restore logic
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const restore = (e) => { if (e.persisted) window.scrollTo({ top: 0 }); };
    window.addEventListener('pageshow', restore);
    return () => window.removeEventListener('pageshow', restore);
  }, []);

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
                <img src='/analytusLogo.svg' className="h-8 w-8" />
                <Typography sx={{ fontSize: '24px', fontWeight: '600', color: theme.palette.primary.main }}>
                  Analytus
                </Typography>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <List sx={{ display: 'flex' }}>
                {navLinks.map((link) => {
                  // active styling only makes sense for section links on home
                  const sectionId = link.type === 'section' ? link.href.substring(1) : '';
                  const isActive = isHome && link.type === 'section' && activeSection === sectionId;

                  return (
                    <ListItemButton
                      key={link.name}
                      // Use Link only for route links (Jobs). For section links we manage click ourselves.
                      component={link.type === 'route' ? Link : 'button'}
                      href={link.type === 'route' ? link.href : undefined}
                      onClick={(e) => {
                        e.preventDefault?.();
                        handleNavClick(link);
                      }}
                      sx={{
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                        fontWeight: isActive ? 600 : 400,
                        '&:hover': { color: theme.palette.primary.main }
                      }}
                    >
                      {link.name}
                    </ListItemButton>
                  );
                })}
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
              {navLinks.map((link) => {
                const sectionId = link.type === 'section' ? link.href.substring(1) : '';
                const isActive = isHome && link.type === 'section' && activeSection === sectionId;

                return (
                  <ListItemButton
                    key={link.name}
                    component={link.type === 'route' ? Link : 'button'}
                    href={link.type === 'route' ? link.href : undefined}
                    onClick={(e) => {
                      e.preventDefault?.();
                      handleNavClick(link);
                    }}
                    sx={{
                      py: 2,
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      fontWeight: isActive ? 600 : 400,
                      '&:hover': { color: theme.palette.primary.main }
                    }}
                  >
                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                      {link.name}
                    </Typography>
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
