import React from 'react'
import SocialLinks from './SocialLinks.js/SocialLinks'
import '../style.css';

export default function Footer() {
  return (
    <>
    <div className="wrapper">
            <div className="footer__block">
                <div className="footer__block-text">
                    <h2 className="footer__block-title">About us</h2>
                    <a className="footer__block-logo" href="https://developer.marvel.com/" target="_blank" rel="noreferrer">
                        <img src='./Images/Marvel_Logo.svg.png' alt='logo'/>
                    </a>
                </div>
                <div className="footer__block-social">
                    <SocialLinks/>
                </div>
            </div>
            <p className="footer__finish">© MARVEL</p>
        </div>
    </>
  )
}