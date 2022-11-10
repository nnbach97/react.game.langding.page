import React from 'react'
import './Section.scss'

export const Section = (props) => {
  return (
    <div className={`section ${props.className}`}>
      {props.children}
    </div>
  )
}

export const SectionContent = (props) => {
  const bgImage = props.bgImage ? {
    background: `url(${props.bgImage})`
  } : {}
  return (
    <div
      className={`section__content ${props.className}`}
      style={bgImage}
      >
      {props.children}
    </div>
  )
}
