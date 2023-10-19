'use client'
import { useState } from 'react'
import React from "react"
import Style from './style.css'

export default function Home() {
  const {currentItem, setCurrentItem} = useState(null);
  const onChangeHandler=(e) => {
    console.log(e)
  }
  return (
    <main className={Style.main}>
        <div className="outside-box1">
          <div className="task-box">
            <div className="input">
              <input value={currentItem} onChange={onChangeHandler} placeholder="Add a task"/>
            </div>
          </div>
        </div>
    </main>
  )
}
