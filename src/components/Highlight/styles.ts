import styled, { css } from 'styled-components'

import { HighLightProps } from '.'
import media from 'styled-media-query'

type WrapperProps = Pick<HighLightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    text-align: right;
    ${Content} {
      text-align: right;
    }
    grid-template-columns: 1.3fr 2fr;
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }

    grid-template-columns: 2fr 1.3fr;
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${media.greaterThan('medium')`
      height: 33rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};

    padding: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      align-self: end;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large}
    `}
  `}
`
export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`
