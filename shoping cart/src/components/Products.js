import React from 'react';
class Products extends React.Component{
    
    render(){
        const productlist=this.props.Products.map(products=>
            <div className="col-md-4 text-center product" key={products.id}>
                <div>
                  <img src={`/products/0${products.id}.jpg`} alt={`${products.title}`}></img>
                </div>
                <div>
                    <p>
                 {products.title}
                    </p>
                    <p className="price">
                    {products.price}
                    </p>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddtocart(e,products)}>
                     افزودن ب سبد خرید
                    </button>
                </div>
    
            </div>)
        return(
            <div className="row">
                {productlist}
            </div>
        )
    }
}
export default Products
