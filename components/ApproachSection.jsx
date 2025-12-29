'use client'

import React, { useMemo } from 'react'
import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Search, DraftingCompass, Rocket, RefreshCcw } from 'lucide-react'

const OurApproachSection = () => {
  const theme = useTheme()

  const steps = useMemo(
    () => [
      {
        title: 'Discover',
        icon: Search,
        text:
          'We start by deeply understanding your goals, challenges, and current technology landscape. Through thorough consultation, we identify opportunities to drive value for your business.',
      },
      {
        title: 'Design',
        icon: DraftingCompass,
        text:
          'Using our expertise in Data Analytics, IT Security, and Artificial Intelligence, we create tailored strategies and solutions aligned with your objectives. Every design is built to be scalable, secure, and forward-thinking.',
      },
      {
        title: 'Deliver',
        icon: Rocket,
        text:
          'Our team ensures seamless implementation of solutions, prioritizing quality, efficiency, and minimal disruption to your operations. We stay by your side every step of the way, ensuring you achieve optimal results.',
      },
      {
        title: 'Evolve',
        icon: RefreshCcw,
        text:
          'Technology never stands still, and neither do we. We continuously assess and optimize your systems, keeping you ahead of the curve with the latest innovations and trends.',
      },
    ],
    []
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="approach" className="py-18 relative overflow-hidden">
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box className="mb-14 text-center">
          <Box
            sx={{
              display: 'inline-block',
              position: 'relative',
              pb: '14px',
              mb: 3,
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                m: 0,
                color: theme.palette.primary.main,
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                lineHeight: 1.2,
              }}
            >
              Our Approach
            </Typography>

            <svg
              width="100%"
              height="12"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              className="pointer-events-none"
              style={{ position: 'absolute', left: 0, bottom: 0 }}
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
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'justify',
            }}
          >
            At Analytus, we believe that success in technology begins with understanding your unique vision and
            challenges. Our approach is centered on collaboration, innovation, and measurable results.
          </Typography>
        </Box>

        {/* Approach Cards */}
        <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Grid container spacing={3}>
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Grid item key={step.title} xs={12} sm={6} md={3}>
                  <Paper
                    component={motion.div}
                    variants={cardVariants}
                    whileHover={{
                      y: -6,
                      boxShadow: theme.shadows[10],
                      transition: { duration: 0.2 },
                    }}
                    sx={{
                      p: 3.25,
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s ease',
                      '&:hover': { borderColor: theme.palette.primary.light },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(99,102,241,0.10)',
                          color: theme.palette.primary.main,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} />
                      </Box>

                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Step {steps.findIndex((s) => s.title === step.title) + 1} of 4
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.75,
                        textAlign: 'justify',
                      }}
                    >
                      {step.text}
                    </Typography>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default OurApproachSection
