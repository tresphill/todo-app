"use client"
import { useState } from 'react'
import React from "react"
import Style from './style.css'
import List from './components/listitems'

export default function App() {
  const [ currentItem, setCurrentItem ] = useState([]);
  const [ itemList, updateItemList ] = useState([]);

  const onChangeHandler = (e) => {
    // jdh
    // console.log(e);
    setCurrentItem(e.target.value)
  };

  let addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()} ])
    setCurrentItem('');
  };

  return (
    <main className={Style.main}>
      <div className="outside-box1">
        <div className="task-box">
          <div className='list-items'>
            <List itemList={itemList}/>
          </div>
          <div className="input">
            <input value={currentItem} onChange={onChangeHandler} placeholder="Add a task" />
            <button onClick={addItemToList}>+</button>
          </div>
        </div>
      </div>
    </main>
  )
}
