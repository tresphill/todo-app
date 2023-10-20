export default function List(props) {
    console.log(props);
    return (
        <div className="item-list">
            {props.itemList.map((itemObj) => {
                return(
                <div className="item-x">
                    <p>{itemObj.item}</p>
                    <button>X</button>
                </div>
                )
            })}
        </div>
    )
}