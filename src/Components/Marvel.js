import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Marvel() {
    const {id}=useParams();
    const [item,setItem]=useState()
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2d2e14270ecc39575bf621ded749283d&hash=08293696a10ad1eda71ccb60d59b210e`)
        setItem(res.data.data.results[0])
    }
    fetch();
  return (
    <>
    {
        (!item)?"":(
            <div className='hero'>
                <div className='hero__icon'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=''/>
                </div>
                <div className='hero__discription'>
                    <h1>{item.name}</h1>
                    <h4>{item.description}</h4>
                </div>
            </div>
        )
    }
  
    </>
  )
}
