"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  useTheme,
  IconButton,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function formatEuroPerYear(value) {
  if (value === null || value === undefined) return null;
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return null;

  const formatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(num);

  return `${formatted} / year`;
}

export default function JobsClient({ jobs }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);

  const primaryBtnSx = useMemo(
    () => ({
      bgcolor: theme.palette.primary.main,
      color: "#fff",
      textTransform: "none",
      borderRadius: 2,
      px: 2,
      "&:hover": { bgcolor: theme.palette.primary.dark },
    }),
    [theme]
  );

  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
  };

  const openJob = (job) => {
    setSelected(job);
    setOpen(true);
  };

  const closeJob = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Container maxWidth="xl" sx={{ pt: 12, pb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 700 , color : theme.palette.primary.main }}>
          Jobs
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2.5}>
            {jobs.map((job) => {
              const salaryText = formatEuroPerYear(job.salary);

              return (
                <Grid key={job._id} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    elevation={0}
                    sx={{
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 3,
                      height: "100%",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <CardContent>
                      <Stack spacing={1.25}>
                        <Typography sx={{ fontWeight: 700 }}>
                          {job.jobTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {job.location}
                        </Typography>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          {salaryText && (
                            <Chip size="small" label={salaryText} />
                          )}
                          <Chip size="small" label={job.jobType} />
                          <Chip size="small" label={job.workingHours} />
                        </Stack>

                        <Button
                          fullWidth
                          sx={primaryBtnSx}
                          onClick={() => openJob(job)}
                        >
                          View Job
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Modal */}
        <Dialog
          open={open}
          onClose={closeJob}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: 3,
              border: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          {selected && (
            <>
              <DialogTitle
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pr: 1,
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>
                    {selected.jobTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {selected.location}
                  </Typography>
                </Box>

                {/* Close X */}
                <IconButton onClick={closeJob}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {formatEuroPerYear(selected.salary) && (
                      <Chip
                        size="small"
                        label={formatEuroPerYear(selected.salary)}
                      />
                    )}
                    <Chip size="small" label={selected.jobType} />
                    <Chip size="small" label={selected.workingHours} />
                  </Stack>

                  <Divider />

                  <Typography sx={{ whiteSpace: "pre-wrap" }}>
                    {selected.description}
                  </Typography>

                  <Divider />

                  {/* Apply at */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      cursor: "pointer",
                      color: theme.palette.primary.main,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => copyEmail(selected.applyAt)}
                  >
                    Apply at: {selected.applyAt}
                  </Typography>
                </Stack>
              </DialogContent>
            </>
          )}
        </Dialog>

        {/* Copy toast */}
        <Snackbar
          open={copied}
          autoHideDuration={1500}
          onClose={() => setCopied(false)}
          message="Email copied"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </Box>
  );
}
