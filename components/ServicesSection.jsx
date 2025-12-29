'use client'

import React, { useMemo, useState } from 'react'
import {
  Box,
  Chip,
  Container,
  Typography,
  useTheme,
} from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart3,
  Database,
  LayoutDashboard,
  Server,
  ShieldCheck,
  BrainCircuit,
  X,
  ArrowUpRight,
} from 'lucide-react'

const ServicesSection = () => {
  const theme = useTheme()
  const [expandedId, setExpandedId] = useState(null)

  const servicesData = useMemo(
    () => [
      {
        id: 1,
        icon: BarChart3,
        title: 'Data Analytics',
        short:
          'Unlock actionable insights and drive informed decision-making with analytics aligned to your business goals.',
        details: [
          'Use-case discovery and KPI definition to ensure analytics drives real outcomes.',
          'Descriptive, diagnostic, and predictive analytics to explain “what happened”, “why”, and “what’s next”.',
          'Experimentation and impact measurement to validate initiatives with evidence.',
          'Advanced segmentation, cohort analysis, and anomaly detection for timely insights.',
          'Enablement: training, playbooks, and analytics governance for sustainable adoption.',
        ],
      },
      {
        id: 2,
        icon: Database,
        title: 'Data Engineering',
        short:
          'Build robust, scalable data pipelines and platforms for seamless integration, quality, and availability.',
        details: [
          'Modern data platform design: ingestion, storage, transformation, and serving layers.',
          'Batch + streaming pipelines with reliability patterns (retries, idempotency, backfills).',
          'Data quality controls (tests, monitoring, SLAs) and lineage to improve trust.',
          'Performance and cost optimization: partitioning, compaction, caching, and governance.',
          'Security and access controls for sensitive data across environments.',
        ],
      },
      {
        id: 3,
        icon: LayoutDashboard,
        title: 'Business Intelligence',
        short:
          'Transform complex data into clear dashboards and reports that accelerate execution and accountability.',
        details: [
          'Executive dashboards that connect strategy to measurable delivery metrics.',
          'Self-serve BI: semantic layer, metric definitions, and curated datasets.',
          'Role-based reporting for Sales, Ops, Finance, Security, and Product teams.',
          'Drill-down workflows and alerting for fast operational decision-making.',
          'Design standards: consistency, accessibility, and adoption-focused UX.',
        ],
      },
      {
        id: 4,
        icon: Server,
        title: 'IT Infrastructure',
        short:
          'Design, deploy, and manage secure, efficient IT systems that support operations and growth.',
        details: [
          'Infrastructure assessments and target-state architecture aligned to business continuity.',
          'Cloud / hybrid setups with scalability patterns (autoscaling, IaC, environment parity).',
          'Observability: logging, monitoring, tracing, and incident readiness.',
          'Resilience: backups, disaster recovery, high-availability, and capacity planning.',
          'Operational hardening: patching, configuration baselines, and access management.',
        ],
      },
      {
        id: 5,
        icon: ShieldCheck,
        title: 'IT Security',
        short:
          'Safeguard digital assets with cybersecurity solutions and proactive threat management.',
        details: [
          'Security posture reviews and risk assessment mapped to your threat model.',
          'Controls and policy: IAM, endpoint security, network segmentation, and secure configs.',
          'Vulnerability management, remediation roadmaps, and continuous monitoring.',
          'Incident response readiness: playbooks, tabletop exercises, and recovery procedures.',
          'Compliance support: evidence collection, security documentation, and audit preparation.',
        ],
      },
      {
        id: 6,
        icon: BrainCircuit,
        title: 'Artificial Intelligence',
        short:
          'Leverage AI to streamline processes, improve decision-making, and deliver innovative solutions.',
        details: [
          'AI discovery workshops to prioritize highest-ROI use cases and adoption constraints.',
          'Model development: forecasting, classification, NLP, and recommender systems.',
          'GenAI enablement: copilots, workflow automation, and retrieval-based assistants.',
          'MLOps: deployment, monitoring, drift detection, and governance for reliability.',
          'Responsible AI: privacy, safety, bias considerations, and secure-by-design patterns.',
        ],
      },
    ],
    []
  )

  const onCardClick = (id) => setExpandedId((cur) => (cur === id ? null : id))

  const cardVariants = {
    collapsed: { scale: 1, y: 0 },
    expanded: { scale: 1.01, y: -2 },
  }

  const panelVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      y: -6,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="py-10 bg-gray-50 relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="mb-16 text-center">

          {/* Title + underline (same style as your About heading) */}
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
              Our Services
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
            At Analytus, we provide a comprehensive suite of IT consultancy
            services designed to drive innovation, security, and growth for your
            business. Our expertise spans multiple domains, ensuring tailored
            solutions for your unique needs:
          </Typography>
        </Box>

        {/* Cards */}
        <div className="flex justify-center items-stretch flex-wrap gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                layout
                initial={false}
                animate={isExpanded ? 'expanded' : 'collapsed'}
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                onClick={() => onCardClick(service.id)}
                className="relative"
                style={{
                  width: isExpanded ? '100%' : '320px',
                  flexGrow: isExpanded ? 1 : 0,
                  cursor: 'pointer',
                }}
              >
                <div
                  className="p-6 rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: isExpanded
                      ? `2px solid ${theme.palette.primary.main}`
                      : '1px solid rgba(99,102,241,0.18)',
                    boxShadow: isExpanded
                      ? '0 14px 40px rgba(0,0,0,0.10)'
                      : '0 8px 22px rgba(0,0,0,0.06)',
                    height: '100%',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex p-3 rounded-lg mb-4 items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(99,102,241,0.10)',
                      color: theme.palette.primary.main,
                      width: '48px',
                      height: '48px',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      textAlign: 'justify',
                      mb: 2,
                    }}
                  >
                    {service.short}
                  </Typography>

                  {/* Expand / Close button (visual affordance) */}
                  <button
                    className="absolute right-4 top-4 p-2 rounded-full transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation()
                      onCardClick(service.id)
                    }}
                    style={{
                      backgroundColor: 'rgba(99,102,241,0.10)',
                      color: theme.palette.primary.main,
                    }}
                    aria-label={isExpanded ? 'Close' : 'Expand'}
                  >
                    {isExpanded ? <X size={18} /> : <ArrowUpRight size={18} />}
                  </button>

                  {/* Expanded content (different animation: springy card + reveal panel) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="panel"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={panelVariants}
                        style={{ overflow: 'hidden' }}
                      >
                        <Box sx={{ pt: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 800,
                              color: theme.palette.primary.main,
                              mb: 1,
                              letterSpacing: 0.2,
                              textTransform: 'uppercase',
                              fontSize: '0.8rem',
                            }}
                          >
                            What you get
                          </Typography>

                          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                            {service.details.map((line, idx) => (
                              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                <Typography
                                  variant="body2"
                                  sx={{ color: 'text.secondary', lineHeight: 1.7, textAlign: 'justify' }}
                                >
                                  {line}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
