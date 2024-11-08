import Book from "./Book";
import "./style.css";
function BookList(props){
    
    return (
        <>
                <div className="bookList">
                {props.booksdata.map((data)=>(
                    <Book key={data.id} bookDetails={data}></Book>
                ))}
                </div>
        </>
    )

}
export default BookList;