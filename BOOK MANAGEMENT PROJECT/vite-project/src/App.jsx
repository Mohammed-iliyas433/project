import BookList from "./component/BookList"
import { Books } from "./utils/mockdata"
import "./component/style.css";
import { useState } from "react";
function App() {
  const [searchText,setsearchText]=useState("")
  const [filteredBooks,setFilteredBooks]=useState(Books)
  function handleSearch(){
    console.log("searchText")
    const filterBooks=Books.filter(book=>book.title.toLowerCase().includes(searchText.toLowerCase()))
    console.log(filteredBooks)
    setFilteredBooks(filterBooks)
  }
  return (
  <>
    <div className="search">
      <h2>Search Books</h2>
      <div>
      <input type="text" name="" id="" className="search-input" onChange={(e)=>setsearchText(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      </div>
      
      <BookList booksdata={filteredBooks}/>
    </div>
  </>
  )
}

export default App
