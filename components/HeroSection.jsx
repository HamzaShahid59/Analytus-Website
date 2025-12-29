'use client'

import React from 'react'
import { Container, Grid, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const theme = useTheme()

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-white"
    >
      <Container maxWidth="lg" sx={{ zIndex: 50 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Title + animated underline */}
              <div className="relative inline-block">
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Analytus
                </Typography>

                {/* SVG underline */}
                <svg
                  width="100%"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-2 pointer-events-none"
                >
                  {/* First line */}
                  <motion.path
                    d="M0,4 C75,0 150,8 300,4"
                    fill="none"
                    stroke="rgba(99,102,241,0.35)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Second line (slightly lower) */}
                  <motion.path
                    d="M0,6.5 C75,2.5 150,10.5 300,6.5"
                    fill="none"
                    stroke="rgba(99,102,241,0.25)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeInOut',
                      delay: 0.2,
                    }}
                  />
                </svg>
              </div>

              <Typography
                variant="subtitle1"
                sx={{
                  mb: 0.5,
                  mt: 0.5,
                  fontSize: { xs: '14px', sm: '16px' },
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: theme.palette.primary.light,
                  letterSpacing: 0.6,
                  textTransform: 'uppercase',
                }}
              >
                Transform insights into actionable strategies
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  textAlign: 'justify',
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                Analytus helps businesses harness data and intelligent
                technologies to automate decisions and optimize performance.
                With expertise in analytics, AI, and cybersecurity, we build
                solutions that are smart, secure, and future-ready.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default HeroSection
