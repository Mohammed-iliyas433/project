import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { kitchenData } from "../data/kitchen";
import { useState } from "react";
const KitchenPage=()=>{
    const [selectedProduct,setSelectedProduct]=useState([])
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(setSelectedProduct.filter(item=>item!==mango))
        }
        else{
            setSelectedProduct([...selectedProduct,mango])
        }
    }
    const filteredProduct=selectedProduct.length===0?kitchenData:kitchenData.filter((orange)=>selectedProduct.includes(orange.brand))

    return(
        <>
        <Navbar/>
        <div className="fullpage">
            <div className="pro-selected">
                    {kitchenData.map((phone)=>{
                        return(
                            <div className="pro-input">
                                <label>
                                    <input type="checkbox" 
                                    checked={selectedProduct.includes(phone.brand)}
                                    onChange={()=>companyHandler(phone.brand)}
                                    />
                                    {phone.brand}
                                </label>
                            </div>
                        )
                    })}
            </div>
            <div className="pageSection">
                {
                    filteredProduct.map((item)=>{
                        return(
                            <div>
                            <Link to={`/Kitchen/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            
                                <div className="proModel">
                                    {item.brand},{item.model}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default KitchenPage;