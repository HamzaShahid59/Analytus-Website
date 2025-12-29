'use client'

import { Box, Card, CardHeader, Chip, Container, Grid, Typography, CardTitle, CardDescription, CardContent, TextField, InputLabel, TextareaAutosize, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactSection = () => {

    const theme = useTheme()

    const contactInfo = [
        {
            icon: <MapPin className="h-5 w-5" />,
            title: "Address",
            details: "Heidestraat 79,3590 Diepenbeek , Belgium",
        },
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email Us",
            details: "sajjad_hussain@analytus.be",
        },
        // {
        //     icon: <Phone className="h-5 w-5" />,
        //     title: "Call Us",
        //     details: "+1 (555) 123-4567",
        // },
    ]

    return (
        <>
            <section id="contact" className="py-14 bg-white">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2.2,
                                color: theme.palette.primary.main,
                                fontSize: { xs: '1.875rem', md: '2.25rem' },
                                lineHeight: 1.2
                            }}
                        >
                            Get In Touch
                        </Typography>

                        <Typography variant='body1' component='p'
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            Have a project in mind? Reach out to us and let's create something
                            amazing together.
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant='h3' sx={{ color: '#333', }}>Send Us a Message</Typography>
                                        <Typography variant='body2' sx={{ color: 'text.secondary', mt: 1 }}>
                                            Fill out the form below and we'll get back to you as soon aspossible.
                                        </Typography>

                                        <Box component="form" noValidate sx={{ mt: 2 }}>
                                            <Grid container spacing={3}>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>Name</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="name"
                                                        type='text'
                                                        placeholder="John Doe"
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid item size={{ xs: 12, sm: 6 }}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>Email</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="email"
                                                        // type="email"
                                                        placeholder="john@example.com"
                                                        size='small'
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>Subject</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="subject"
                                                        type='text'
                                                        placeholder="Subject"
                                                        size='small'
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <InputLabel sx={{ fontWeight: 500 }}>Message</InputLabel>
                                                    <TextField
                                                        fullWidth
                                                        name="message"
                                                        placeholder="How can we help you?"
                                                        rows={5}
                                                        className="resize-none"
                                                    />
                                                </Grid>

                                                <Grid item size={12}>
                                                    <Button
                                                        fullWidth
                                                        // type="submit"
                                                        // className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                                                        sx={{
                                                            my: 1, color: '#fff',
                                                            bgcolor: theme.palette.primary.main,
                                                            '&:hover': {
                                                                bgcolor: theme.palette.primary.dark,
                                                            },
                                                        }}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant='h3' sx={{ color: '#333', }}>Contact Information</Typography>
                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                        We'd love to hear from you. Get in touch with us through any of
                                        the following channels.
                                    </Typography>
                                </Box>

                                <Box className="space-y-4">
                                    {
                                        contactInfo?.map((info, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box className="p-2 rounded-md bg-slate-100 text-[#3621A8]">
                                                    {info.icon}
                                                </Box>

                                                <Box>
                                                    <Typography variant='body1' component='h4' fontWeight={500}>
                                                        {info.title}
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                                        {info.details}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))
                                    }

                                </Box>

                                <Box className="aspect-video rounded-lg overflow-hidden shadow-md mt-6">
                                    <iframe
                                        src="https://www.google.com/maps?q=50.92736710806118,5.428337796228803&z=17&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                    ></iframe>

                                </Box>
                            </Box>

                        </Grid>

                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default ContactSection
