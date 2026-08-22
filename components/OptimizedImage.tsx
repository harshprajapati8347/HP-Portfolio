'use client'

import NextImage, { ImageProps } from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'

type OptimizedImageProps = Omit<ImageProps, 'alt'> & {
  alt: string
  wrapperHeight?: BoxProps['height']
}

export const isSvgSrc = (src: ImageProps['src']) =>
  typeof src === 'string' && src.split('?')[0].toLowerCase().endsWith('.svg')

export default function OptimizedImage({
  alt,
  wrapperHeight,
  fill,
  style,
  src,
  ...rest
}: OptimizedImageProps) {
  const unoptimized = isSvgSrc(src) || rest.unoptimized

  if (isSvgSrc(src) && typeof src === 'string') {
    if (fill) {
      return (
        <Box position="relative" width="100%" height={wrapperHeight ?? '100%'}>
          {/* SVG is not optimized by next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              ...style,
            }}
          />
        </Box>
      )
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        style={style}
        width={typeof rest.width === 'number' ? rest.width : undefined}
        height={typeof rest.height === 'number' ? rest.height : undefined}
      />
    )
  }

  if (fill) {
    return (
      <Box position="relative" width="100%" height={wrapperHeight ?? '100%'}>
        <NextImage
          src={src}
          alt={alt}
          fill
          unoptimized={unoptimized}
          style={{ objectFit: 'contain', ...style }}
          {...rest}
        />
      </Box>
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      unoptimized={unoptimized}
      style={style}
      {...rest}
    />
  )
}
