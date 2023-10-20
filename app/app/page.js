"use client"
import React, { useState } from 'react';
import Style from './style.css';
import List from './components/listitems';

export default function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItemToList();
    }
  };

  const addItemToList = () => {
    if (currentItem.trim() === '') {
      return; 
    }

    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem('');
  };

  return (
    <main className={Style.main}>
      <div className='bg'>
        <div className="outside-box1">
          <div className="task-box">
            <div className='list-items'>
              <List itemList={itemList} />
            </div>
            <div className="input">
              <input
                value={currentItem}
                onChange={onChangeHandler}
                onKeyPress={handleKeyPress}
                placeholder="Add a task"
              />
              <button onClick={addItemToList}>+</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
