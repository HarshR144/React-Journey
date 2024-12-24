/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import './style.css';

const initalValue = {
    flag: false,
};


function ProductList({dummyProductData}){
    const [flag, setFlag] = useState(initalValue.flag);    
    
    const handleToggleText = ()=>{
        setFlag(!flag);
    }
    
    useEffect(()=>{
        console.log("run only when page loads");
    },[])
    
    
    return(
        <div >
            <div>
                {
                    flag?  <h3 className="title">Product List</h3>:<h3>No Items Available In product List</h3>
                }
                <button onClick={handleToggleText}>Toggle Button</button>
            </div>
            <div>
            {/* <ul> */}
                {
                    dummyProductData.map((item, index)=>(
                        <ProductItem product = {item} key = {index} />
                    ))
                }
            {/* </ul>  */}
           </div>

        </div>
    )
}

export default ProductList;