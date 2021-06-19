import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
    body2: {
      fontSize: '1.2rem',
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiCardContent: {
      root: {
        background: 'transparent',
      },
    },
    MuiCard: {
      root: {
        boxShadow: 'none',
        border: ' none',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        margin: '0px 10px 0 0',
        padding: '8px 5px 8px 5px',
        fontSize: '14px',
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        // height: '0px',
      },
    },
    MuiLink: {
      root: {
        fontFamily: 'Segoe UI',
        fontSize: '16px',
        fontWeight: 600,
      },
    },
  },
})
export default theme
