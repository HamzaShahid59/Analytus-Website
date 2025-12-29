'use client'

import React from 'react'
import { Box, Container, Paper, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid' // IMPORTANT: use the classic Grid
import { motion } from 'framer-motion'
import { Car, FileSearch, Network, GraduationCap } from 'lucide-react'

const products = [
  {
    title: 'Analytus Analyzer',
    tagline: 'Engineering Intelligence for P&ID Diagrams',
    description:
      'Convert static P&IDs into structured, searchable plant intelligence. Analytus Analyzer reads PDFs, images, and CAD exports to extract equipment, instruments, tags, line numbers, and connectivity—so engineering teams execute faster with fewer errors.',
    features: [
      'Automated P&ID parsing (PDF, image, CAD exports)',
      'Equipment & instrument recognition (pumps, valves, sensors, controllers)',
      'Tag, line number, and flow path extraction for rapid traceability',
      'Relationship mapping to understand system connectivity and hierarchy',
      'Structured outputs (JSON / database) for CMMS, ERP, and digital twin integration',
      'AI assisted validation to reduce rework and documentation errors',
    ],
    icon: <FileSearch size={36} color="#3621A8" />,
  },
  {
    title: 'Analytus AutoInsight',
    tagline: 'EU Aware Used Vehicle Pricing Intelligence',
    description:
      'Make pricing decisions with confidence backed by data, not guesswork. AutoInsight predicts fair, market aligned resale values for European markets by factoring in mileage, model dynamics, depreciation, and EU emissions/compliance signals.',
    features: [
      'Market aligned price predictions for European regions (Belgium focused)',
      'Mileage, brand/model dynamics, and model year depreciation handling',
      'EU emission class & CO₂ signals for regulation aware valuation',
      'Optional warranty consideration for certified vehicles',
      'Explainable estimates via LLM based reasoning or stable statistical modeling',
      'Designed for integration into dealer platforms and marketplaces',
    ],
    icon: <Car size={36} color="#3621A8" />,
  },
  {
    title: 'Analytus Buddy',
    tagline: 'A 24/7 AI Digital Clerk for Public Services',
    description:
      'Simplify citizen government interactions with a single conversational interface. Buddy combines policy grounded answers, task execution, and real time document validation to reduce friction, improve submission quality, and ease administrative workload.',
    features: [
      'RAG based retrieval for accurate, policy verified answers',
      'Action capable workflows (appointments, form submissions, guided applications)',
      'Real time document pre screening to prevent rejection and delays',
      'Intent aware handling of “information” vs “action” requests',
      'Computer vision validation for file quality and correctness',
      'Built for public sector compliance and service reliability',
    ],
    icon: <Network size={36} color="#3621A8" />,
  },
  {
    title: 'Analytus Grader',
    tagline: 'Rubric Driven Grading, Trained by Your Standards',
    description:
      'Standardize evaluation and reduce grading time without sacrificing quality. Analytus Grader learns from your rubric and feedback to score consistently, provide structured comments, and help educators focus more on teaching.',
    features: [
      'Rubric based scoring with consistent grading criteria',
      'Learns from human feedback to match your evaluation style',
      'Structured, actionable feedback for students',
      'Batch grading support to reduce turnaround time',
      'Improves fairness and reduces grading variance',
      'Easy integration into existing academic workflows',
    ],
    icon: <GraduationCap size={36} color="#3621A8" />,
  },
]

const MotionPaper = motion(Paper)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const ProjectSection = () => {
  const theme = useTheme()

  return (
    <section id="products" className="py-10 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
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
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }} // always animate in (reliable)
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
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
              component="h1"
              sx={{
                fontWeight: 'bold',
                m: 0,
                color: theme.palette.primary.main,
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                lineHeight: 1.2,
              }}
            >
              Our Products
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
            sx={{
              color: 'text.secondary',
              maxWidth: '850px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.05rem' },
              textAlign: 'justify',
              mb: 1,
            }}
          >
            From industrial digitization and EU-aware pricing intelligence to citizen services and education
            workflows, Analytus products are designed to deliver reliable outcomes at scale. Purpose-built
            solutions that convert complex data into clear decisions, faster operations, stronger compliance,
            and measurable business impact.
          </Typography>
        </Box>

        {/* Products */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible" // FIX: always show (no whileInView dependency)
        >
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid
                item
                key={product.title}
                size={{ xs: 12, sm: 6, }}
              >
                <MotionPaper
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: theme.shadows[10],
                    transition: { duration: 0.25 },
                  }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: theme.palette.primary.light,
                    },
                  }}
                  role="article"
                  aria-label={`Product: ${product.title}`}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(99,102,241,0.10)',
                        flexShrink: 0,
                      }}
                    >
                      {product.icon}
                    </Box>

                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.text.primary }}>
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}
                      >
                        {product.tagline}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 2.5,
                      lineHeight: 1.7,
                      textAlign: 'justify',
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mt: 'auto', mb: 0, color: theme.palette.text.secondary }}>
                    {product.features.map((feat) => (
                      <li key={feat} style={{ marginBottom: 8 }}>
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {feat}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default ProjectSection
