import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
    return(
        <div className='header__socials'>
            <a href="https://linkedin.com/in/sofiat-ambali"><BsLinkedin/></a>
            <a href="https://github.com/sofiattt"><FaGithubAlt/></a>
            <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
        </div>
    )
}

export default HeaderSocials