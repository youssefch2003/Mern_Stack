import React from 'react'
import { useParams } from 'react-router-dom'

function Deco(props) {
    const {color1} = useParams()
    const {color2} = useParams()
    const {word} = useParams()
    const divStyle ={
        background: color2,

    }
    const h1Style ={
        color: color1,

    }

  return (
    <div style={divStyle}><h1 style={h1Style}>{word}</h1></div>
  )
}

export default Deco