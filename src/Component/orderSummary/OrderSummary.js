import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as math from 'mathjs'
import './ordersummary.scss'

const OrderSummary = ({item}) => {  
    useEffect(()=>{
        localStorage.getItem('titalItemInCart')
    },[])
    let no = 0 
    let sum = 0
    let totalItem = localStorage.getItem('totalItemInCart')
    const incrementCount = (id) =>{
        let cur_val = parseInt(localStorage.getItem(`item${id}`))
        let cur_total_val = parseInt(localStorage.getItem('totalItemInCart'))
        let upd_val = cur_val + 1
        let upd_total_val = cur_total_val + 1
        localStorage.setItem(`item${id}`,upd_val)
        localStorage.setItem('totalItemInCart',upd_total_val)
                
    }
    const decrementCount = (id) =>{
        let cur_val = parseInt(localStorage.getItem(`item${id}`))
        let cur_total_val = parseInt(localStorage.getItem('totalItemInCart'))
        let upd_val = cur_val - 1
        let upd_total_val = cur_total_val - 1
        localStorage.setItem(`item${id}`,upd_val)
        localStorage.setItem('totalItemInCart',upd_total_val)
    }
    return (
        <div>
            <header className="container">
                <div className="container">
                    <img src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' 
                        alt="logo of companey"
                    />&nbsp;&nbsp;
                    <h2 id="companey-name">Happay</h2>
                </div>
                <div></div>
            </header>
            <div className="go-back"><Link to='/'><i className="fas fa-arrow-left"></i> Back to Home</Link></div>
            <h2>Order Summary( {totalItem} item)</h2>
            <div className="order-summary">
                <div id="div1">
                    <table>
                        <thead>
                            <tr>
                                <th> S.NO</th>
                                <th> ITEMS </th>
                                <th> QTY </th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.items.map((item,index)=>{
                                var abc = localStorage.getItem(`item${item.id}`)
                                return(
                                    (parseInt(localStorage.getItem(`item${item.id}`)) !== 0) &&
                                    (<tr key={item.id}>
                                        <td>{no = no + 1}</td>
                                        <td>{item.name}</td>
                                        <td className="btn">
                                            <button onClick={()=>incrementCount(item.id)}>+</button>
                                            <p>{abc}</p>
                                            <button onClick={()=>decrementCount(item.id)}>-</button>
                                        </td>
                                    </tr>)
                                )
                            })}
                        </tbody>
                    </table>
                    <hr />
                    <br/>
                    <Link className='add-more' to="/">+ Add More Item</Link>
                </div>
                <div id="div2">
                    <h3>Price Details</h3>
                    <table>
                        <tbody>
                        {item.items.map((item,index)=>{
                                return(
                                    (parseInt(localStorage.getItem(`item${item.id}`)) !== 0) &&
                                    (<tr key={item.id}>
                                        <td>{math.round(parseInt(localStorage.getItem(`item${item.id}`)), 2)} * {`$ ${item.final_price}`}</td>
                                        <td>{'$'}{parseInt(localStorage.getItem(`item${item.id}`))*item.final_price}</td>
                                        <td style={{display:'none'}}>{sum += parseInt(localStorage.getItem(`item${item.id}`))*item.final_price}</td>
                                    </tr>)
                                )
                            })}
                            <hr />
                            {console.log(sum)}
                            <tr>
                                <td>Total Savings:</td>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <td>Delivary Fees</td>
                                <td>{'$ 5.00'}</td>
                            </tr>
                            <tr>
                                <td>Taxies and Charges:</td>
                                <td>{'$ 2.00'}</td>
                            </tr>
                            <hr />
                            <tr>
                                <td>to Pay</td>
                                <td><b>{'$'}{ sum = sum + 2 + 5}</b></td>
                            </tr>
                            <tr id="place-order" style={{textAlign: 'center'}}>
                                <td colSpan='2'>
                                    <button className="order-btn">PLACE ORDER</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    item: state.item
})
export default connect(mapStateToProps)(OrderSummary)
