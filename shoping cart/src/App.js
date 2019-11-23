import React from 'react';
import './App.css';
import Products from './components/Products.js';
import './components/Products.css';
import Cart from './components/Cart.js';
import './components/Cart.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Products:[],
            cartList:[]
        }
        this.handAddtocart=this.handAddtocart.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
    }
    componentWillMount(){
        fetch('http://localhost:8000/products/').then(res=>res.json())
        .then(data=>this.setState({
            Products:data
        }));
        // if (localStorage.getItem('cartList')) {
        //     this.setState({
        //       cartList: JSON.parse(localStorage.getItem('cartList'))
        //     })
        //   }

        
       
    }
    
    handAddtocart(e,products){
        this.setState(state => {
            const cartList = state.cartList
            // let productExists = false
            // cartList.forEach(item => {
            //   if (item.id === products.id) {
            //     productExists = true
            //     item.count++
            //   }
            // })
            // if (!productExists) {
              cartList.push({ ...products, count: 1 })
            // }
            localStorage.setItem('cartList', JSON.stringify(cartList))
            // console.log({cartList})
            return cartList
          })

        

        
    }
    handleRemove(e,item){
        this.setState((state)=>{
            const cartList=state.cartList
            const idx=state.cartList.findIndex(element=>element.id === item.id);
             state.cartList.splice(idx,1)
            localStorage.setItem('cartList',cartList)
            return cartList
        }
        )
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
<div className="col-md-8"><Products Products={this.state.Products} handleAddtocart={this.handAddtocart}/></div>
<div className="col-md-4"><Cart cartList={this.state.cartList} handleRemove={this.handleRemove} /></div>
                </div>

            </div>
        )
    }
}
export default App

