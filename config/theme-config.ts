import type { ColorMode } from '@chakra-ui/react'

export const ThemeMode: { Light: ColorMode; Dark: ColorMode } = {
  Light: 'light',
  Dark: 'dark',
}

export const themeConfig = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}
