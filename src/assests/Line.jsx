import * as React from "react"
const Line = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={2}
    fill="none"
    {...props}
  >
    <path stroke="#1D4B5B" strokeWidth={2} d="M0 1h37" />
  </svg>
)
export default Line
