export default function List(props) {
    const deleteItem = (key) => {
        const newList = props.itemList.filter(itemObj =>{
            return itemObj.key !== key;
        })
        props.updateItemList(newList);
    }
    console.log(props);
    return (
        <div className="item-list">
            {props.itemList.map((itemObj) => {
                return(
                <div className="item-x">
                    <p>{itemObj.item}</p>
                    <button onClick={() => deleteItem(itemObj.key)}>X</button>
                </div>
                )
            })}
        </div>
    )
}