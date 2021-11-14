import React, { useEffect, useState } from 'react'
import './itemCard.scss'

const ItemCard = ({ id,name, description, final_price, original_price, img_url, totalItemInCart, setTotalItemInCart }) => {
    useEffect(()=>{
        localStorage.setItem(`item${id}`,itemInCart)
        localStorage.setItem('totalItemInCart', totalItemInCart)
    },[totalItemInCart, id])
    let initialCount = localStorage.getItem(`item${id}`)
    const [ itemInCart, setItemInCart] = useState(initialCount !== null ? parseInt(initialCount) : 0)
    const incrementCount = ()=>{
        setItemInCart((state)=>state + 1)
        setTotalItemInCart((state)=>state + 1)
    }
    const decrementCount = () =>{
        setItemInCart((state)=>state - 1)
        setTotalItemInCart((state)=>state - 1)
    }
    // const upperCase = (name) =>{
    //     let p_name = name.split(' ')
    //     let cap_name = ''
    //     p_name.forEach(element => {
    //         let capitalized = element.charAt(0).toUpperCase() + element.slice(1);
    //         cap_name += ` ${capitalized}`
    //     });
    //     return cap_name
    // }
    return (
        <div id="abc">
            <div className="ribbon-container">
                <img id="card-img" src={img_url} alt={`img of ${name}`} />
                {
                    original_price && 
                    (<div className="ribbon ribbon-1">&nbsp;&nbsp;&nbsp;{(100-((final_price*100)/original_price))}% off</div>)
                }
            </div>
            <span id="price-name">
                <h4 className="capitalize">{name}</h4>
                <p><strong><b id="strike">{original_price && (`$${original_price}`)}</b>&nbsp;{`$ ${final_price}`}</strong></p>
            </span>
            <p id="description">{description}</p>
            {(itemInCart === 0) && (<button id="add-cart-btn" onClick={incrementCount}> Add To Cart</button>)}
            { (itemInCart !== 0) && (<span className="add-item-btn">
                <button onClick={incrementCount}>+</button>
                <p className="item-count">{itemInCart}</p>
                <button onClick={decrementCount}>-</button>
            </span>)}
        </div>
    )
}

export default ItemCard