import React from 'react'

const Button = ({text, color, size}) => {
  return (
    <div className={`px-7 ${ size ? size : "text-lg"} rounded-lg mt-6 w-fit py-2 text-white ${color ? color : "bg-colour1"}`}>{text}</div>
  )
}

export default Button