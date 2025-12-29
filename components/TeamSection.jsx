'use client'

import { Twitter } from '@mui/icons-material'
import { Box, Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Linkedin, Mail, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TeamSection = () => {

    const theme = useTheme()

    const teamData = [
        {
            name: 'Sajjad Hussain',
            role: "Co-founder",
            image: '/sajjad.jpg',
            // bio: "With over 15 years of experience in tech leadership, John drives our company's vision and strategy.",
            linkedin: "https://www.linkedin.com/in/sajjad-hussain-6651931a/",
            // email: "sajjad.hussain@optimaize.be"
        },
        {
            name: 'Mouzzam Hussain',
            role: "Co-founder",
            image: '/moazam.jpg',
            // bio: "With over 15 years of experience in tech leadership, John drives our company's vision and strategy.",
            linkedin: "https://www.linkedin.com/in/mouzzamhussain/",
            // email: "mouzzam.hussain@optimaize.be"
        },
        {
            name: 'Hammad Shahid',
            role: "Co-founder",
            image: '/hammad.jpg',
            // bio: "With over 15 years of experience in tech leadership, John drives our company's vision and strategy.",
            linkedin: "https://www.linkedin.com/in/hammad-shahid-295b6878/",
            // email: "hammad.shahid@optimaize.be"
        },
        {
            name: 'Hamza Shahid',
            role: "Generative AI Engineer",
            image: '/hamza.png',
            // bio: "With over 15 years of experience in tech leadership, John drives our company's vision and strategy.",
            linkedin: "https://www.linkedin.com/in/hamza-shahid-ai/",
            // email: "hamza.shahid@optimaize.be"
        }
    ]

    const iconVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
    }

    return (
        <>
            <section id="team" className="py-24 bg-[#F5F5F580]">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant='outlined' label="Team" className="mb-3" />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 3,
                                color: theme.palette.primary.main,
                                fontSize: { xs: '1.875rem', md: '2.25rem' },
                                lineHeight: 1.2
                            }}
                        >
                            Our Team
                        </Typography>
                        <Typography variant='body1' component='p'
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            The visionaries behind our success, bringing together decades of
                            experience in technology and innovation.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {
                            teamData.map((team, index) => (
                                <Grid key={index} item size={{ xs: 12, sm: 6, md: 4 }}>
                                    <Paper
                                        component={motion.div}
                                        // key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        sx={{ p: 2 }}
                                    >
                                        <Box className="flex flex-col gap-5 mb-6">
                                            <Box sx={{ aspectRatio: 1 / 1, overflow: 'hidden', borderRadius: '12px' }}>
                                                <img
                                                    src={team.image}
                                                    alt={team.name}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                <Typography variant='h5'>{team.name}</Typography>
                                                <Typography variant='body1' color='primary'>{team.role}</Typography>
                                                {/* <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                                    {team.bio}
                                                </Typography> */}
                                            </Box>

                                            <Box sx={{ display: 'flex', gap: 2 }}>
                                                <Link href={team.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <motion.div variants={iconVariants} initial="rest" whileHover="hover">
                                                        <Linkedin className="h-5 w-5" style={{ color: theme.palette.primary.main }} />
                                                    </motion.div>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            ))
                        }

                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default TeamSection
