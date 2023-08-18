import React from "react"
import clsx from "clsx"

interface Props {
  mousePosition: number
  topBorder: number
  bottomBorder: number
}

const PADDLE_HEIGHT = 160
const OFFSET = PADDLE_HEIGHT / 2

const PlayerPaddle: React.FC<Props> = ({ mousePosition, topBorder, bottomBorder }) => {
  const position = (() => {
    if (mousePosition - OFFSET <= topBorder) return topBorder
    if (mousePosition + OFFSET >= bottomBorder) return bottomBorder - PADDLE_HEIGHT
    return mousePosition - OFFSET
  })()

  // eslint-disable-next-line no-console
  console.log(position, topBorder, bottomBorder)

  return (
    <div className="player-area">
      <div className={clsx("paddle", "player")} style={{ top: position }} />
    </div>
  )
}

export default PlayerPaddle
