export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: 'none!important',
    _focus: {
      ring: '0px'
    },
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    cta: {
      bg: '#F3831F',
      color: 'white',
      fontSize: {base: '14px', d: '18px'},
      lineHeight: {base: '20px', d:'24px'},
      fontWeight: 'bold',
      height: 'auto',
      pt: '12px',
      pb: '12px',
      pl: '60px',
      pr: '60px',
      borderRadius: '999px',
      border: '2px solid transparent',

      _hover: {
        bg: 'white',
        color: '#F3831F',
        border: '2px solid #F3831F'
      }
    }
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    variant: 'cta'
  },
}