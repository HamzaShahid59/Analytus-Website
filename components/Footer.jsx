'use client'

import { Box, Container, Divider, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Code, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const theme = useTheme()

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-[#F5F5F580]">
                <Container maxWidth='lg'>
                    <Divider />

                    <Box sx={{ py: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: 'text.secondary' }}>© {currentYear} Analytus ICT. All rights reserved.</Typography>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="text-sm text-[#4F4F4F] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </Box>
                    </Box>

                </Container>
            </footer>
        </>
    )
}

export default Footer
