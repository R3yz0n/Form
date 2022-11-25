import React from 'react'

const FormInput = (p) => {
    return (

        <input placeholder={p.placeholder}
            type={p.type}
            name={p.name}
            value={p.value}
            onChange={p.onChange} />

    )
}

export default FormInput