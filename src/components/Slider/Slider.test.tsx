/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"

import Slider from "./Slider"

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

  it("calls onChange handler when increment or decrement button is clicked", () => {
    const props = {
      zoom: 50,
      min: 0,
      max: 100,
      onChange: jest.fn(),
    }

    render(<Slider {...props} />)
    screen.getByText("+").click()
    screen.getByText("-").click()

    expect(props.onChange).toBeCalledTimes(2)
  })

  it("cannot be incremented past provided max value", () => {
    const props = {
      zoom: 100,
      min: 0,
      max: 100,
      onChange: jest.fn(),
    }

    render(<Slider {...props} />)
    screen.getByText("+").click()

    const slider = screen.getByRole<HTMLInputElement>("slider")
    expect(parseInt(slider.value, 10)).toBe(100)
  })

  it("cannot be decremented past provided min value", () => {
    const props = {
      zoom: 0,
      min: 0,
      max: 100,
      onChange: jest.fn(),
    }

    render(<Slider {...props} />)
    screen.getByText("-").click()

    const slider = screen.getByRole<HTMLInputElement>("slider")
    expect(parseInt(slider.value, 10)).toBe(0)
  })
})
