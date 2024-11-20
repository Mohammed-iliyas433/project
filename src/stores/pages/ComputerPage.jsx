import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { computerData } from "../data/computer";
import { useState } from "react";
const ComputerPage=()=>{
    const [selectedProduct,setSelectedProduct]=useState([])
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(setSelectedProduct.filter(item=>item!==mango))
        }
        else{
            setSelectedProduct([...selectedProduct,mango])
        }
    }
    const filteredProduct=selectedProduct.length===0?computerData:computerData.filter((orange)=>selectedProduct.includes(orange.company))
    return(
        <>
        <Navbar/>
        <div className="fullpage">
            <div className="pro-selected">
                    {computerData.map((phone)=>{
                        return(
                            <div className="pro-input">
                                <label>
                                    <input type="checkbox" 
                                    checked={selectedProduct.includes(phone.company)}
                                    onChange={()=>companyHandler(phone.company)}
                                    />
                                    {phone.company}
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
                            <Link to={`/Computer/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            
                                <div className="proModel">
                                    {item.company},{item.model}
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
export default ComputerPage;