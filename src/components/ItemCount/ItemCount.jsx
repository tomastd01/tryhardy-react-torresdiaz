import React, {useState} from 'react';
import "./ItemCount.css"

function ItemCount ( {stock, initial, onAdd} ) {
    const [count, setCount] = useState(initial)

    function minusBtn() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function plusBtn() {
        if (count < stock) {
            setCount(count + 1)
        }
    }


    return (
        <div className='itemCounterContainer'>
            <div className='itemCounter'>
                <button className='itemCounter__btn' onClick={ () => minusBtn() }>-</button>
                <input readOnly id="quantity" value={count} />
                <button className='itemCounter__btn' onClick={ () => plusBtn() }>+</button>
            </div>
            <button className='addToCart__btn' onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}

export default ItemCount;