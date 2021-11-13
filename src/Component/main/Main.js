import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './main.scss'
import ItemCard from '../itemCard/ItemCard'
import { Link } from 'react-router-dom'

const Main = ({ item }) => {
    let initialTotalCount = localStorage.getItem('totalItemInCart')
    const [ totalItemInCart, setTotalItemInCart ] = useState( initialTotalCount !== null ? parseInt(initialTotalCount) : 0)
    return (
        <>
            <header className="container">
                <div className="container">
                    <img src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' 
                        alt="logo of companey"
                    />&nbsp;&nbsp;
                    <h2 id="companey-name">Happay</h2>
                </div>
                <div>
                    <h1>
                        <Link to="/cart-item"><i className="fas fa-shopping-cart"></i>{totalItemInCart}</Link>
                    </h1>
                </div>
            </header>
            <div>
                <div className="heading" id="center">
                    <h1>Most Popular</h1>
                    <h2 className="divider line one-line">&#9734;</h2>    
                </div>
                <div className="item-grid" >
                    {
                        item.items.map((item,index)=>{
                            return(
                                <ItemCard key={item.id} 
                                    id={item.id}
                                    description={item.description}
                                    final_price={item.final_price} 
                                    img_url={item.img_url}
                                    setTotalItemInCart={setTotalItemInCart} 
                                    totalItemInCart = {totalItemInCart}   
                                    name={item.name}   
                                    original_price={item.original_price}                        
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        </>
    )
}
Main.propTypes={
    item: PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
    item: state.item
})
export default connect(mapStateToProps)(Main)
