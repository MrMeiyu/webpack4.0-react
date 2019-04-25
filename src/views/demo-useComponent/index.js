import React, { useEffect } from 'react'

import { ColorBanner } from '../components/change-color'

export const DemoUseComponent = () => {
  const colors = ['red', 'white', 'black']
  const [color, changeColor] = ColorBanner(colors, 'red')

  return (
    <div
      style={{
        backgroundColor: color
      }}
    >
      <button
        onClick={changeColor}
      >
        点击我，改变颜色
      </button>
    </div>
  )
}

export const RandomColor = () => {
  const colors = ['blue', 'green']
  const [color, changeColor] = ColorBanner(colors, 'red')

  useEffect(() => {
    setInterval(() => {
      console.log('changeColor')
      changeColor()
    }, 3000)
  })
  return (
    <div
      style={{
        backgroundColor: color
      }}
    >
      1111
    </div>
  )
}
