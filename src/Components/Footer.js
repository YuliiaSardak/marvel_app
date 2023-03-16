import React from 'react'

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
                    <a className="footer__block-social-item" href="https://www.instagram.com/marvel/" target="_blank" rel="noreferrer">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="fill" x="0.5" y="0.5" width="49" height="49" stroke="#EF0107"/>
                            <path d="M25.0029 18.8467C21.5969 18.8467 18.8496 21.594 18.8496 25C18.8496 28.406 21.5969 31.1533 25.0029 31.1533C28.4089 31.1533 31.1562 28.406 31.1562 25C31.1562 21.594 28.4089 18.8467 25.0029 18.8467ZM25.0029 29.0004C22.8019 29.0004 21.0025 27.2064 21.0025 25C21.0025 22.7936 22.7965 20.9996 25.0029 20.9996C27.2093 20.9996 29.0034 22.7936 29.0034 25C29.0034 27.2064 27.204 29.0004 25.0029 29.0004ZM32.8431 18.595C32.8431 19.3929 32.2005 20.0302 31.4079 20.0302C30.61 20.0302 29.9727 19.3876 29.9727 18.595C29.9727 17.8024 30.6153 17.1598 31.4079 17.1598C32.2005 17.1598 32.8431 17.8024 32.8431 18.595ZM36.9186 20.0517C36.8275 18.1291 36.3884 16.4261 34.9799 15.023C33.5768 13.6199 31.8738 13.1807 29.9513 13.0843C27.9698 12.9719 22.0307 12.9719 20.0492 13.0843C18.132 13.1754 16.429 13.6145 15.0205 15.0176C13.6121 16.4207 13.1783 18.1237 13.0819 20.0463C12.9694 22.0278 12.9694 27.9669 13.0819 29.9483C13.1729 31.8709 13.6121 33.5739 15.0205 34.977C16.429 36.3801 18.1266 36.8193 20.0492 36.9157C22.0307 37.0281 27.9698 37.0281 29.9513 36.9157C31.8738 36.8246 33.5768 36.3855 34.9799 34.977C36.383 33.5739 36.8222 31.8709 36.9186 29.9483C37.031 27.9669 37.031 22.0331 36.9186 20.0517ZM34.3587 32.0744C33.941 33.1241 33.1323 33.9327 32.0773 34.3558C30.4975 34.9824 26.7488 34.8378 25.0029 34.8378C23.2571 34.8378 19.503 34.977 17.9285 34.3558C16.8788 33.9381 16.0702 33.1294 15.6471 32.0744C15.0205 30.4946 15.1651 26.7458 15.1651 25C15.1651 23.2542 15.0259 19.5001 15.6471 17.9256C16.0648 16.8759 16.8735 16.0673 17.9285 15.6442C19.5083 15.0176 23.2571 15.1622 25.0029 15.1622C26.7488 15.1622 30.5029 15.023 32.0773 15.6442C33.127 16.0619 33.9356 16.8706 34.3587 17.9256C34.9853 19.5054 34.8407 23.2542 34.8407 25C34.8407 26.7458 34.9853 30.4999 34.3587 32.0744Z" fill="#EF0107"/>
                            </svg>
                    </a>
                    <a className="footer__block-social-item" href="https://www.facebook.com/Marvel/" target="_blank" rel="noreferrer">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="fill" x="0.5" y="0.5" width="49" height="49" stroke="#EF0107"/>
                            <path d="M30.5845 26.5L31.251 22.1566H27.0834V19.338C27.0834 18.1497 27.6656 16.9914 29.5321 16.9914H31.4268V13.2934C31.4268 13.2934 29.7074 13 28.0635 13C24.6313 13 22.3879 15.0803 22.3879 18.8463V22.1566H18.5728V26.5H22.3879V37H27.0834V26.5H30.5845Z" fill="#EF0107"/>
                            </svg>
                    </a>
                    <a className="footer__block-social-item" href="https://twitter.com/marvel" target="_blank" rel="noreferrer">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect className="fill" x="0.5" y="0.5" width="49" height="49" fill="none"/>
                            <path d="M36.7376 18.9812C36.7564 19.2437 36.7564 19.5063 36.7564 19.7687C36.7564 27.775 30.6626 37 19.5251 37C16.0938 37 12.9064 36.0062 10.2251 34.2813C10.7126 34.3375 11.1813 34.3563 11.6876 34.3563C14.5188 34.3563 17.1251 33.4 19.2063 31.7688C16.5438 31.7125 14.3126 29.9688 13.5438 27.5687C13.9189 27.625 14.2938 27.6625 14.6876 27.6625C15.2313 27.6625 15.7751 27.5874 16.2814 27.4563C13.5064 26.8937 11.425 24.4562 11.425 21.5125V21.4375C12.2313 21.8875 13.1688 22.1688 14.1625 22.2062C12.5313 21.1187 11.4626 19.2625 11.4626 17.1625C11.4626 16.0375 11.7625 15.0062 12.2875 14.1062C15.2688 17.7812 19.7501 20.1812 24.775 20.4437C24.6813 19.9937 24.625 19.525 24.625 19.0563C24.625 15.7187 27.325 13 30.6813 13C32.425 13 34 13.7312 35.1063 14.9125C36.475 14.65 37.7875 14.1437 38.95 13.45C38.5 14.8563 37.5438 16.0375 36.2875 16.7875C37.5063 16.6563 38.6876 16.3187 39.775 15.85C38.9502 17.05 37.9189 18.1187 36.7376 18.9812Z" fill="#EF0107"/>
                            <rect x="0.5" y="0.5" width="49" height="49" stroke="#EF0107"/>
                            </svg>
                    </a>
                </div>
            </div>
            <p className="footer__finish">© MARVEL</p>
        </div>
    </>
  )
}
