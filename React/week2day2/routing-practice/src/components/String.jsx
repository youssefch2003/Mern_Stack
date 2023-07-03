import React from 'react'
import { useParams } from 'react-router-dom'

function String() {
    const {word} = useParams()
  return (
    <div><h1>{word}</h1></div>
  )
}

export default String