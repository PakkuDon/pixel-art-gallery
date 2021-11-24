/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"

import Slider from "../Slider"

describe("Slider", () => {
  it("renders slider with provided props", () => {
    const props = {
      zoom: 50,
      min: 0,
      max: 100,
      onChange: jest.fn(),
    }

    render(<Slider {...props} />)
    const slider = screen.getByRole("slider")

    expect(parseInt(slider.getAttribute("value") as string, 10)).toBe(
      props.zoom
    )
    expect(parseInt(slider.getAttribute("min") as string, 10)).toBe(props.min)
    expect(parseInt(slider.getAttribute("max") as string, 10)).toBe(props.max)
  })

  it("calls onChange handler when slider is moved", () => {
    const props = {
      zoom: 50,
      min: 0,
      max: 100,
      onChange: jest.fn(),
    }

    render(<Slider {...props} />)
    const slider = screen.getByRole("slider")
    fireEvent.change(slider, { target: { value: 10 } })

    expect(props.onChange).toHaveBeenCalledWith(10)
  })
})
