import React from "react"
import Style from './style.css'

export default function Home() {
  return (
    <main className={Style.main}>
      <div className="outside-box">
        <div className="task-box">
          <div className="input">
            <input />
            <button>+</button>
          </div>
        </div>
      </div>
    </main>
  )
}
