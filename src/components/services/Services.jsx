import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
    return(
        <section  id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Responsive websites built for an optimal user experience.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Creating sites for individuals and small businesses.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
            </div>
        </section>
    )
}

export default Services