import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, getCart, updateCart } from "../Store/ActionCreators/CartActionCreators"

import { Link } from 'react-router-dom'
export default function Cart() {
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    var carts = useSelector((state) => state.CartStateData)

    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getCart())
        var data = carts.filter((item) => item.userid === localStorage.getItem("userid"))
        if (data){
            setcart(data)
            var total = 0
            var shipping = 0
            var final = 0
            for(let item of data){
                total = total+item.total
            }
            if(total>0 && total<=1000)
            shipping = 150
            final = total+shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }
    }
    function update(id, op) {
        var item = carts.find((item) => item.id === id)
        if (op === "dec" && item.qty == 1)
            return
        else if (op === "dec") {
            item.qty = item.qty - 1
            item.total = item.total - item.price
        }
        else {
            item.qty = item.qty + 1
            item.total = item.total + item.price
        }
        dispatch(updateCart(item))
        getAPIData()
    }
    function deleteItem(id){
        dispatch(deleteCart({id:id}))
        getAPIData()
    }
    useEffect(() => {
        getAPIData()
    }, [carts.length])
    return (
        <>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="table-responsive">
                                <table className="mytable">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>Product</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => {
                                                return <tr key={index} className="text-center">
                                                    <td className="image-prod"><img src={`assets/productimages/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                                    <td className="product-name">{item.color}</td>
                                                    <td className="product-name">{item.size}</td>

                                                    <td className="price">&#8377;{item.price}</td>

                                                    <td className="price" style={{ width: "120px" }}><button onClick={() => update(item.id, "dec")} className='' style={{ background: "none", width: "30px" }}> <i className="icon ion-ios-remove"></i></button>&nbsp;&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;<button onClick={() => update(item.id, "inc")} className='' style={{ background: "none", width: "30px" }}><i className="icon ion-ios-add"></i></button></td>

                                                    <td className="total">&#8377;{item.total}</td>
                                                    <td><button onClick={() => deleteItem(item.id)} className='' style={{ background: "none", width: "30px" }}> <i className="icon ion-ios-trash"></i></button></td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 mt-3 cart-wrap ftco-animate">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>&#8377;{total}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Shipping</span>
                                    <span>&#8377;{shipping}</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Final Amount</span>
                                    <span>&#8377;{final}</span>
                                </p>
                            </div>
                            <p className="text-center"><Link to="/checkout" className="btn btn-secondary w-100">Proceed to Checkout</Link></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
