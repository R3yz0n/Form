import React from 'react'
import styles from './Card.module.css'

const Card = props => {
    return (
        // applied two styles
        <div className={`${styles.card} ${props.className}`}>

            {props.children}

        </div>
    )
}

export default Card