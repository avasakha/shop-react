import React from 'react';
class Cart extends React.Component {
    render() {
        const cartList = this.props.cartList
        return (
            <div className="cart">
                <h2>سبد خرید</h2>
                {
                    cartList.length === 0 ? "سبد خرید خالی است" :
                        <div>
                            تعداد محصولات خرید شده:{cartList.length}
                        </div>
                }
                {cartList.length > 0 &&
                    <div>
                        <ul> {cartList.map(item =>
                            <li>
                                {item.title}
                                <button className="btn btn-light" onClick={(e)=>this.props.handleRemove(e,item)}>حذف محصول</button>
                            </li>

                        )}</ul>
                      <p>lمجموع : {cartList.reduce((sum,current)=>sum + current.price* current.count,0)}تومان
                      </p>                    
                      </div>
                }
            </div>
        )
        
    }
        
    }



        export default Cart
