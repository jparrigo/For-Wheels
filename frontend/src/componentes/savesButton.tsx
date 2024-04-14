import { ReactElement } from "react"
import './savesButton.css'

export default function SavesButton (props: { title: string }): ReactElement {
  const { title } = props
  return (
    <button className="saves-button">
      {title}
    </button>
  )
}