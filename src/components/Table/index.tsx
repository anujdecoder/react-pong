import React from "react"
import "./index.css"
import clsx from "clsx"
import PlayerPaddle from "./PlayerPaddle"
import Ball from "./Ball"

const Table: React.FC = () => {
  const [state, setState] = React.useState(0)
  const [{ top, left }, setBallPosition] = React.useState({
    top: 160,
    left: 160,
  })

  React.useEffect(() => {
    setInterval(() => {
      setBallPosition(o => ({ top: o.top + 10, left: o.left + 10 }))
    }, 100)
  }, [])

  const handleMovement = (e: React.MouseEvent) => setState(e.clientY)

  return (
    <div className="table" onMouseMove={handleMovement}>
      <PlayerPaddle mousePosition={state} topBorder={88} bottomBorder={window.innerHeight - 68} />
      <div className="net" />
      <div className={clsx("paddle", "computer")} />
      <Ball top={top} left={left} />
    </div>
  )
}

export default Table
