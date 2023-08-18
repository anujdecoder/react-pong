import React from "react"

interface Props {
  top: number
  left: number
}

const Ball: React.FC<Props> = ({ top, left }) => (
  <div className="ping-pong-ball" style={{ top, left }}>
    <div className="inner" />
  </div>
)

export default Ball
