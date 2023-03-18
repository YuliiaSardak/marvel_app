import React from 'react'

export default function Link(props) {
  return (
    <>
        <a className="footer__block-social-item" href= {props.link} target="_blank" rel="noreferrer">
            {props.svg}          
        </a>    
    </>
  )
}
