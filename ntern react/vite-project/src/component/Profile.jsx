import Item from "./read";
function Rolex(){
    return(
        <>
            <h1>List of items</h1>
            <Item name="CSK" isPacked={true}/>
            <Item name="MI" isPacked={false}/>
            <Item name="KKR" isPacked={false}/>
            <Item name="SRH" isPacked={false}></Item>
        </>
    )
}
export default Rolex