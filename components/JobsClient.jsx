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

function sanitizeHtml(input) {
  if (typeof input !== "string") return "";
  try {
    const doc = new DOMParser().parseFromString(input, "text/html");
    doc.querySelectorAll("script, style, iframe, object, embed").forEach((n) => n.remove());
    doc.querySelectorAll("*").forEach((el) => {
      [...el.attributes].forEach((attr) => {
        const name = attr.name.toLowerCase();
        if (name.startsWith("on")) el.removeAttribute(attr.name);
      });
    });
    return doc.body.innerHTML || "";
  } catch {
    return "";
  }
}

export default function JobsClient({ jobs = [] }) {
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
      py: 1.2,
      width: "100%", // ✅ always full width
      fontSize: { xs: 16, sm: 16, md: 17 },
      "&:hover": { bgcolor: theme.palette.primary.dark },
    }),
    [theme]
  );

  const copyEmail = async (email) => {
    if (!email) return;
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
      <Container maxWidth="xl" sx={{ pt: { xs: 11, md: 12 }, pb: 6 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: 28, sm: 30, md: 34 },
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          Jobs
        </Typography>

        {jobs.length === 0 ? (
          <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3, p: 3 }}>
            <Typography sx={{ fontSize: { xs: 16, sm: 17, md: 18 } }}>
              No jobs posted yet.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3} alignItems="stretch">
            {jobs.map((job) => {
              const salaryText = formatEuroPerYear(job.salary);
              const jobType = typeof job.jobType === "string" && job.jobType.trim() ? job.jobType.trim() : null;
              const workingHours =
                typeof job.workingHours === "string" && job.workingHours.trim() ? job.workingHours.trim() : null;

              return (
                <Grid
                  key={job._id}
                  item
                  xs={12}  // ✅ 1 per row
                  sm={12}  // ✅ 1 per row
                  md={6}   // ✅ 2 per row
                  lg={4}   // ✅ 3 per row
                  xl={4}   // ✅ 3 per row
                  sx={{ display: "flex" }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "100%",           // ✅ fill grid column
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 3,
                      transition: "transform 120ms ease, border-color 120ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        width: "100%",
                        p: { xs: 2.5, sm: 3, md: 3.25 },
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,            // ✅ stretch to equal height
                      }}
                    >
                      {/* Top content */}
                      <Box sx={{ width: "100%" }}>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            color: theme.palette.primary.main,
                            fontSize: { xs: 20, sm: 22, md: 22 },
                            lineHeight: 1.2,
                            wordBreak: "break-word", // ✅ avoids weird overflow
                          }}
                        >
                          {job.jobTitle}
                        </Typography>

                        <Typography
                          sx={{
                            opacity: 0.85,
                            mt: 0.75,
                            fontSize: { xs: 16, sm: 17, md: 17 },
                            wordBreak: "break-word",
                          }}
                        >
                          {job.location}
                        </Typography>

                        {/* Chips row: render only if value exists (no empty grey chip) */}
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
                          {salaryText ? (
                            <Chip
                              label={salaryText}
                              sx={{
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "transparent",
                                fontSize: { xs: 14.5, sm: 15, md: 15 },
                                height: 34,
                              }}
                            />
                          ) : null}

                          {jobType ? (
                            <Chip
                              label={jobType}
                              sx={{
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "transparent",
                                fontSize: { xs: 14.5, sm: 15, md: 15 },
                                height: 34,
                              }}
                            />
                          ) : null}

                          {workingHours ? (
                            <Chip
                              label={workingHours}
                              sx={{
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "transparent",
                                fontSize: { xs: 14.5, sm: 15, md: 15 },
                                height: 34,
                              }}
                            />
                          ) : null}
                        </Stack>
                      </Box>

                      {/* ✅ This spacer makes the button sit at the bottom, equalizing height across row */}
                      <Box sx={{ flexGrow: 1 }} />

                      <Box sx={{ width: "100%", mt: 3 }}>
                        <Button fullWidth onClick={() => openJob(job)} sx={primaryBtnSx}>
                          View Job
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* Modal */}
        <Dialog
          open={open}
          onClose={closeJob}
          fullWidth
          maxWidth="md"
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
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 2,
                  pr: 1,
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 950,
                      fontSize: { xs: 20, sm: 22, md: 24 },
                      color: theme.palette.primary.main,
                      lineHeight: 1.2,
                    }}
                  >
                    {selected.jobTitle}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.85,
                      mt: 0.5,
                      fontSize: { xs: 16, sm: 17, md: 18 },
                    }}
                  >
                    {selected.location}
                  </Typography>
                </Box>

                <IconButton onClick={closeJob} sx={{ mt: -0.5 }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ pb: 3 }}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {formatEuroPerYear(selected.salary) ? (
                      <Chip
                        label={formatEuroPerYear(selected.salary)}
                        sx={{ borderRadius: 2, fontSize: { xs: 14.5, sm: 15, md: 15.5 }, height: 34 }}
                      />
                    ) : null}
                    {selected.jobType ? (
                      <Chip
                        label={selected.jobType}
                        sx={{ borderRadius: 2, fontSize: { xs: 14.5, sm: 15, md: 15.5 }, height: 34 }}
                      />
                    ) : null}
                    {selected.workingHours ? (
                      <Chip
                        label={selected.workingHours}
                        sx={{ borderRadius: 2, fontSize: { xs: 14.5, sm: 15, md: 15.5 }, height: 34 }}
                      />
                    ) : null}
                  </Stack>

                  <Divider />

                  <Box
                    sx={{
                      "& h1, & h2, & h3": {
                        margin: "18px 0 10px",
                        fontWeight: 900,
                        textDecoration: "underline",
                        fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.45rem" },
                      },
                      "& p": {
                        margin: "12px 0",
                        lineHeight: 1.8,
                        fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" }, // ✅ bigger on small/medium
                      },
                      "& li": {
                        margin: "8px 0",
                        lineHeight: 1.8,
                        fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
                      },
                      "& ul": { paddingLeft: "22px" },
                      "& strong, & b": { fontWeight: 900 },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(selected.description || ""),
                    }}
                  />

                  <Divider />

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: 17, sm: 18, md: 19 },
                      cursor: selected.applyAt ? "pointer" : "default",
                      color: selected.applyAt ? theme.palette.primary.main : "text.primary",
                      "&:hover": selected.applyAt ? { textDecoration: "underline" } : undefined,
                      userSelect: "none",
                    }}
                    onClick={() => copyEmail(selected.applyAt)}
                    title="Click to copy"
                  >
                    Apply at: {selected.applyAt || "N/A"}
                  </Typography>
                </Stack>
              </DialogContent>
            </>
          )}
        </Dialog>

        <Snackbar
          open={copied}
          autoHideDuration={1400}
          onClose={() => setCopied(false)}
          message="Email copied"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </Box>
  );
}
