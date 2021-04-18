import React from "react"

export default function Button({ children,label, variant = "primary", ...rest }) {
  return (
    <button className="button" {...rest}>
      {label}
    </button>
  )
}
