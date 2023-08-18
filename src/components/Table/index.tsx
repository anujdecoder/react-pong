import React from "react"
import "./index.css"
import clsx from "clsx"
import PlayerPaddle from "./PlayerPaddle"

const Table: React.FC = () => {
  const [state, setState] = React.useState(0)
  const handleMovement = (e: React.MouseEvent) => {
    setState(e.clientY)
  }
  return (
    <div className="table" onMouseMove={handleMovement}>
      <PlayerPaddle mousePosition={state} topBorder={88} bottomBorder={window.innerHeight - 68} />
      <div className="net" />
      <div className={clsx("paddle", "computer")} />
    </div>
  )
}

export default Table
