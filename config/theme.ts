import {
  extendTheme,
  ColorMode,
  ChakraTheme,
  ThemeComponentProps,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ThemeMode, themeConfig } from 'config/theme-config'

export { ThemeMode, themeConfig }

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

const config = themeConfig

const colors = {
  black: '#121212',
  brand: {
    accentLight: 'teal.500',
    accentDark: 'cyan.200',
    mutedLight: '#595959',
    mutedDark: '#A6A6A6',
  },
}

const fontStack =
  'var(--font-poppins), Poppins, system-ui, -apple-system, Segoe UI, sans-serif'

const focusRing = {
  _focusVisible: {
    boxShadow: 'outline',
    outline: '2px solid',
    outlineColor: 'cyan.200',
    outlineOffset: '2px',
  },
}

const styles = {
  global: (props: { colorMode: ColorMode }) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#121212')(props),
    },
    '@media (prefers-reduced-motion: reduce)': {
      'html, body': {
        scrollBehavior: 'auto',
      },
    },
  }),
}

const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('teal.500', 'cyan.200')(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.800', 'gray.400')(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('teal.600', 'cyan.200')(props),
  }),
  accentAlternative: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('#595959', '#A6A6A6')(props),
  }),
}

const theme = extendTheme({
  config,
  fonts: {
    body: fontStack,
    heading: fontStack,
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props: ThemeComponentProps<ChakraTheme>) => ({
        color: mode('teal.500', 'cyan.200')(props),
        ...focusRing,
      }),
      variants: {
        ...textVariants,
        description: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode('gray.800', 'gray.400')(props),
          _hover: {
            color: mode('teal.500', 'cyan.200')(props),
            textDecoration: 'none',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      baseStyle: {
        ...focusRing,
      },
      variants: {
        outline: (props: ThemeComponentProps<ChakraTheme>) => ({
          borderColor: mode('teal.500', 'cyan.200')(props),
        }),
        outlineAlternative: (props: ThemeComponentProps<ChakraTheme>) => ({
          borderWidth: '1px',
          borderRadius: 0,
          borderColor: mode('#595959', 'whiteAlpha.500')(props),
          _hover: {
            backgroundColor: mode(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            )(props),
          },
        }),
      },
    },
    IconButton: {
      baseStyle: {
        ...focusRing,
      },
    },
    Icon: {
      variants: {
        accent: (props: ThemeComponentProps<ChakraTheme>) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
        }),
      },
    },
    Divider: {
      variants: {
        solid: (props: ThemeComponentProps<ChakraTheme>) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
      },
    },
  },
})

export default theme
