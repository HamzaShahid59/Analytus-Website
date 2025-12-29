import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2A3367",        // Primary brand color
            light: "#47507eff",       // Optional lighter shade
            dark: "#3A2BC6",        // Optional darker shade
            contrastText: "#ffffff", // Text on primary buttons
        },
        secondary: {
            main: "#2A3367",        // Also use brand purple for secondary
            light: "#47507eff",
            dark: "#3A2BC6",
            contrastText: "#ffffff",
        },
        text: {
            primary: "#000000",     // Black text
        },
    },
    typography: {
        fontFamily: "var(--font-dm-sans), sans-serif",
        h1: {
            fontSize: "2rem",
            fontWeight: 700
        },
        h2: {
            fontSize: "1.55rem",
            fontWeight: 700
        },
        h3: {
            fontSize: "1.45rem",
            fontWeight: 700
        },
        h4: {
            fontSize: "1.35rem",
            fontWeight: 600
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: '600 !important'
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.25,
        },
        button: {
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "12px",
            fontWeight: 400,
        },
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: 'black',
                    fontSize: '16px',
                    position: 'relative',
                    '&:hover': {
                        color: '#2A3367',
                        backgroundColor: 'transparent',
                    },
                    '&.Mui-selected': {
                        color: '#2A3367',
                        fontWeight: 'bold',
                        backgroundColor: 'transparent',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%) scaleX(1)',
                            width: '80%',
                            height: '2px',
                        },
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%) scaleX(0)',
                        width: '80%',
                        height: '2px',
                        backgroundColor: '#2A3367',
                        transition: 'transform 0.3s ease',
                    },
                    '&:hover:after': {
                        transform: 'translateX(-50%) scaleX(1)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                outlined: {
                    borderColor: '#2A3367',
                    // color: '#2A3367',     
                },
            },
        },
    },
});

export default theme;
