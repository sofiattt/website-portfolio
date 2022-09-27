import React from 'react'
import './footer.css'
import {FaFacebookF} from'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
    return(
        <footer>
            <a href='#' className='footer__logo'>SOFIAT AMBALI</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>#about</a></li>
                <li><a href='#'>#experience</a></li>
                <li><a href='#'>#services</a></li>
                <li><a href='#'>#portfolio</a></li>
                <li><a href='#'>#contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://facebook.com'><FaFacebookF/></a>
                <a href='https://instagram.com'><FiInstagram/></a>
                <a href='https://twitter.com'><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Sofiat Ambali. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer