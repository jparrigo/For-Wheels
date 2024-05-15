import { ReactElement } from "react"
import './savesButton.css'
import deleteOneCar from "../../assets/functions/deleteOneCar"

interface savesButtonProps {
  title: string,
  listPosition: number,
  callback: (value: Array<object>) => void
}

export default function SavesButton (props: savesButtonProps): ReactElement {
  return (
    <button className="saves-button">
      {props.title}
      <div onClick={() => {props.callback(deleteOneCar(props.listPosition))}}>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
          <path d="m17,4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.644l1.703,15.331c.169,1.521,1.451,2.669,2.982,2.669h9.304c1.531,0,2.813-1.147,2.981-2.669l1.703-15.331h1.682v-2h-6Zm-8-2h6v2h-6v-2Zm6.957,14.543l-1.414,1.414-2.543-2.543-2.543,2.543-1.414-1.414,2.543-2.543-2.543-2.543,1.414-1.414,2.543,2.543,2.543-2.543,1.414,1.414-2.543,2.543,2.543,2.543Z"/>
        </svg>
      </div>
    </button>
  )
}