'use client'

import { Box, Chip, Container, Typography, useTheme } from "@mui/material"
import Marquee from 'react-fast-marquee'

// Atlas Copco

const clients = [
    { name: 'Stad Genk', logo: '/genk.png' },
    { name: 'Atlas Copco', logo: '/atlas.png' },
    { name: 'Euroclear', logo: '/euroclear.jpg' },
    { name: 'Johnson & Johnson', logo: '/J&J.png' },
    { name: 'BNP Paribas', logo: '/bnp.jpeg' },
    { name: 'Municipality of Rumst, Belgium', logo: '/rumst.jpg' },
]

const ClientSection = () => {
    const theme = useTheme()

    return (
        <>
            <section id="about" className="py-24 bg-white">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant='outlined' label="Partners" className="mb-3" />
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
                            Our Partners
                        </Typography>
                    </Box>


                    <Marquee speed={40} gradient={true} pauseOnHover={true} loop={0}>
                        {clients.map((client, index) => (
                            <Box
                                key={index}
                                className="flex items-center justify-center px-8 min-w-[200px]"
                            >
                                <img
                                    src={client.logo}
                                    className="h-24 w-24 mr-2"
                                />
                                {/* <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {client.name}
                                </Typography> */}
                            </Box>
                        ))}
                    </Marquee>

                </Container>
            </section>
        </>
    )
}

export default ClientSection