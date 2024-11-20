import { mobileData } from "../data/mobile";
const Mobile=()=>{
    const firstFiveImages=mobileData.slice(0,5);
    return(
        <>
        <div className="proTitle">
            <h2>Mobile</h2>
        </div>
        <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className="imgBox">
                            <img src={item.image} className="proImage" alt="" />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Mobile;