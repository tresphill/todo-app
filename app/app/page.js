import React from "react"
import Style from './style.css'

export default function Home() {
  return (
    <main className={Style.main}>
        <div className="outside-box1">
          <div className="task-box">
            <div className="input">
              <input placeholder="Add a task"/>
            </div>
          </div>
        </div>
    </main>
  )
}
