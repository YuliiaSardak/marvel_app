import React from 'react'
import '../style.css'

export default function Slide(props) {

  return (
    <div className='Slide'>
        <img className='img__slider-little' src={props.heroImg} alt={ props.titleHero }/>
            <div className='text__slider-little'>
                <h1>{ props.titleHero }</h1>
                <a className='slider__button btn' href={props.heroHref} target="_blank" rel="noreferrer">More information</a>
            </div>
    </div>
  )
}
