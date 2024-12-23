/* eslint-disable react/prop-types */
import ProductItem from "./components/ProductItem";
import './style.css';

function ProductList({dummyProductData}){
    
    return(
        <div >
            <h3 className="title">Product List</h3>
            <ul>
                {
                    dummyProductData.map((item, index)=>(
                        <ProductItem product = {item} key = {index} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;