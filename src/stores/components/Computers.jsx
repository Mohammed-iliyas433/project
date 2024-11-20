import { computerData } from "../data/computer";
const Computers=()=>{
    const firstFiveImages=computerData.slice(0,5);
    return(
        <>
        <div className="proTitle">
            <h2>Computers</h2>
        </div>
            <div className="proSection">
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className="imgBox">
                                <img className="proImage" src={item.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Computers;