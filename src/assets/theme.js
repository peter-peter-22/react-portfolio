import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { GradientPaperOutline } from "../components/decorations/blocks/FixedGradientBlock";

let theme = createTheme({

    //palette

    palette: {
        mode: 'dark',
        primary: {
            main: "#455cff"
        },
        secondary: {
            main: "#555555"
        },
        background: {
            foreground: "#222222"
        }
    },

    //typography

    typography: {
        h1: {
            fontSize: "3.5rem",
            fontWeight: "bold"
        },
        h2: {
            fontSize: "3.0rem",
            fontWeight: "bold"
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: "bold"
        },
        h4: {
            fontSize: "2.0rem",
            fontWeight: "bold"
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: "bold"
        },
        h6: {
            fontSize: "1.5rem",
        },
    },


    //shadows

    shadows: Array(25).fill('none'),

    //shape

    shape: {
        borderRadius: 12
    },

    //breakpoints

    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

})

//responsive font sizes

theme = responsiveFontSizes(theme, { factor: 5 });

//components

theme.components = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                boxShadow: `transparent 0 0 0 0`,
                "&:hover": {
                    boxShadow: `${theme.palette.text.primary} 0 0 0 3px`,
                },
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.standard,
                }),
            },
        },
    },
    MuiFab: {
        styleOverrides: {
            root: {
                boxShadow: `transparent 0 0 0 0`,
                "&:hover": {
                    boxShadow: `${theme.palette.text.primary} 0 0 0 3px`,
                },
                transition: theme.transitions.create("all", {
                    duration: theme.transitions.duration.standard,
                }),
                lineHeight:"normal"
            },
        },
    },
    MuiLink: {
        defaultProps: {
            underline: "hover",
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 40
            },
        },
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: {
                borderWidth: 2,
                backgroundColor: theme.palette.background.foreground
            }
        }
    },
    MuiContainer: {
        defaultProps: {
            maxWidth: "md"
        }
    },
    MuiDialog: {
        defaultProps: {
            disableScrollLock: true,
            PaperComponent: GradientPaperOutline
        },
        styleOverrides: {
            root: {
                '& .MuiBackdrop-root': {
                    backdropFilter: 'blur(5px)',
                    backgroundColor: alpha(theme.palette.common.black, 0.7),
                },
            },
        },
    },
}

//custom colors

theme.palette = {
    ...theme.palette,
    analogous1: theme.palette.augmentColor({ color: { main: "#cb30fd" } }),
    analogous2: theme.palette.augmentColor({ color: { main: "#00adff" } }),
}

export { theme };
