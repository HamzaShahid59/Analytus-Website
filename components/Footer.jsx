'use client'

import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 8, bgcolor: 'white' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
          <Box>
            <Typography sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
              Analytus
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
              Data. Insights. Outcomes.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Typography
              component={Link}
              href="/#about"
              sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: theme.palette.primary.main } }}
            >
              About
            </Typography>
            <Typography
              component={Link}
              href="/#services"
              sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: theme.palette.primary.main } }}
            >
              Services
            </Typography>
            <Typography
              component={Link}
              href="/jobs"
              sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: theme.palette.primary.main } }}
            >
              Jobs
            </Typography>
            <Typography
              component={Link}
              href="/#contact"
              sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: theme.palette.primary.main } }}
            >
              Contact
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ opacity: 0.7, mt: 3 }}>
          © {new Date().getFullYear()} Analytus. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
