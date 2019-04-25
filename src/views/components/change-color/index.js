import React, { useState, userEffect } from 'react'

export const ColorBanner = (colors, initColor) => {
  const len = colors.length
  const [color, setColor] = useState(initColor)

  const changeColor = () => {
    console.log(111)
    const i = Math.floor(Math.random() * len)
    const pickedColor = colors[i]
    setColor(pickedColor)
  }

  return [color, changeColor]
}