"use client"
import { useState } from 'react'
import React from "react"
import Style from './style.css'

export default function App() {
  const {currentItem, setCurrentItem} = useState(null);
  const {itemList, updateItemList} = useState([]);

  const onChangeHandler = (e) => {
    // jdh
    console.log(e);
    setCurrentItem(e.target.value)
  }

  return (
    <main className={Style.main}>
        <div className="outside-box1">
          <div className="task-box">
            <div className="input">
              <input value={currentItem} onChange={onChangeHandler} placeholder="Add a task"/>
              <button>+</button>
            </div>
          </div>
        </div>
    </main>
  )
}
