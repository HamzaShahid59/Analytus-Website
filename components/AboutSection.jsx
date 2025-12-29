'use client'

import {
    Badge,
    Box,
    Chip,
    Container,
    Grid,
    Typography,
    useTheme,
} from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Code, Users } from 'lucide-react'

const AboutSection = () => {
    const theme = useTheme()

    return (
        <section id="about" className="py-10 bg-white">
            <Container maxWidth="lg">
                <Box className="mb-16 text-center">

                    {/* Heading + animated underline */}
                    {/* Heading block */}
                    <Box
                        sx={{
                            display: 'inline-block',
                            position: 'relative',
                            pb: '14px',     // reserves space for the underline inside this block
                            mb: 3,          // space between underline+heading and the paragraph text
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                m: 0, // important: don't use mb here, we handle spacing with the wrapper Box
                                color: theme.palette.primary.main,
                                fontSize: { xs: '1.875rem', md: '2.25rem' },
                                lineHeight: 1.2,
                            }}
                        >
                            Who we are
                        </Typography>

                        {/* SVG underline (properly anchored under text) */}
                        <svg
                            width="100%"
                            height="12"
                            viewBox="0 0 300 12"
                            preserveAspectRatio="none"
                            className="pointer-events-none"
                            style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0, // sits at the bottom of the wrapper (inside the reserved pb space)
                            }}
                        >
                            <motion.path
                                d="M0,4 C75,0 150,8 300,4"
                                fill="none"
                                stroke="rgba(99,102,241,0.35)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.4, ease: 'easeInOut' }}
                            />

                            <motion.path
                                d="M0,6.5 C75,2.5 150,10.5 300,6.5"
                                fill="none"
                                stroke="rgba(99,102,241,0.25)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
                            />
                        </svg>
                    </Box>


                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'justify',
                            maxWidth: '700px',
                            mx: 'auto',
                        }}
                    >
                        At Analytus, we are your trusted partners in navigating the ever
                        evolving world of technology. Specializing in Data Analytics, IT
                        Security, and Artificial Intelligence, we empower businesses to
                        harness the full potential of their digital transformation.

                        <br />
                        <br />

                        With a team of seasoned experts and innovative thinkers, we deliver
                        tailored IT consultancy solutions designed to meet your unique
                        challenges. Whether it's unlocking insights from data, fortifying
                        your digital assets against threats, or leveraging AI to drive
                        efficiency and innovation, we are committed to helping you achieve
                        excellence.

                        <br />
                        <br />

                        Our mission is simple: to enable your success through cutting-edge
                        technology, strategic insights, and unwavering support. Let's build
                        a smarter, safer, and more efficient future together.
                    </Typography>
                </Box>
            </Container>
        </section>
    )
}

export default AboutSection
