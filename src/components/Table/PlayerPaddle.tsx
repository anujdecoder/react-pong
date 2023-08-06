import React from "react"
import clsx from "clsx"

interface Props {
  mousePosition: number
}

const MIN = 0

const PlayerPaddle: React.FC<Props> = ({ mousePosition }) => {
  const position = mousePosition - 160
  const height = position < MIN ? MIN : position
  return (
    <div className="player-area">
      <div style={{ height }} />
      <div className={clsx("paddle", "player")} />
    </div>
  )
}

export default PlayerPaddle
