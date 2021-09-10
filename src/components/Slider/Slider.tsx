import React, { useCallback } from "react"

interface SliderProps {
  zoom: number
  min: number
  max: number
  increment?: number
  onChange: (zoom: number) => void
}
const Slider = ({ zoom, min, max, increment = 25, onChange }: SliderProps) => {
  const incrementZoom = useCallback(() => {
    if (zoom + increment <= max) {
      onChange(zoom + increment)
    } else {
      onChange(max)
    }
  }, [zoom, onChange])

  const decrementZoom = useCallback(() => {
    if (zoom - increment >= min) {
      onChange(zoom - increment)
    } else {
      onChange(min)
    }
  }, [zoom, onChange])

  const handleZoomChange = useCallback(
    (event) => {
      onChange(parseInt(event.target.value, 10))
    },
    [onChange]
  )

  return (
    <div>
      <label>
        Zoom
        <input
          type="range"
          value={zoom}
          min={min}
          max={max}
          step="5"
          onChange={handleZoomChange}
        />
      </label>
      <button type="button" aria-label="Zoom out" onClick={decrementZoom}>
        -
      </button>
      <output>{zoom}%</output>
      <button type="button" aria-label="Zoom in" onClick={incrementZoom}>
        +
      </button>
    </div>
  )
}

export default Slider
