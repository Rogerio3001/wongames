import { Meta, Story } from '@storybook/react'

import { Settings } from 'react-slick'
import Slider from '.'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as Meta
const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

const HorizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
export const Horizontal: Story = () => (
  <Slider settings={HorizontalSettings}>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
  </Slider>
)

const VerticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}
export const Vertical: Story = () => (
  <Slider settings={VerticalSettings}>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
    <Slide>1</Slide>
  </Slider>
)
