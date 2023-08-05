import React from "react"
import "./index.css"

interface Props {
  children?: React.ReactNode
}

const Background: React.FC<Props> = ({ children }) => (
  <div className="background">
    <div className="header">PONG</div>
    <div className="body">{children}</div>
    <div className="footer">Made by Anuj with ❤️</div>
  </div>
)

export default Background
