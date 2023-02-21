import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const customTheme = extendTheme({
  components: {
    Button
  },
  textStyles: {

  },
  breakpoints : {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    d: '1280px',
    wide: '1600px',
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    primary: '#3DCD58',
    gray: '#F2F2F2',
    link: '#5081FF'
  },
  space: {
    gutter: '20px',
    gridcol: '108px',
    gridmargin: '202px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
  },
  sizes: {
    gutter: '20px',
    gridcol: '108px',
    gridmargin: '202px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    half: '50%',
    container: {
      desktop: '1516px',
    },
  },



  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export default customTheme
