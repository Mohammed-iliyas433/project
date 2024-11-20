import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar=()=>{
    const {cartItems}=useCart()
    return(
        <>
            <div className="navSection">
                <div className="title">
                    <h2>Shoppy Globe</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user">
                    <div className="user-detail">SignIN/SignUP</div>
                    <Link to="/cart">
                    <div className="cart">Cart
                    <span>
                        {cartItems.length}
                    </span>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/Mobile'><li>Mobiles</li></Link>
                    <Link to='/Computer'><li>Computers</li></Link>
                    <Link to='/Watch'><li>Watches</li></Link>
                    <Link to='/Men'><li>Men Fashion</li></Link>
                    <Link to='/Woman'><li>Woman Fashion</li></Link>
                    <Link to='/Furniture'><li>Furniture</li></Link>
                    <Link to='/Ac'><li>AC</li></Link>
                    <Link to='/Kitchen'><li>Kitchen</li></Link>
                    
                    <Link to='/Fridge'><li>Fridge</li></Link>
                    
                </ul>
            </div>
        </>
        
    )
}
export default Navbar;