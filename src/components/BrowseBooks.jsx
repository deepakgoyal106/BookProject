import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


// Browse Books Page
function BrowseBooks(){

    // Get category from URL
    const {cat}=useParams();

    // Search state
    const [search,setSearch]=useState("");

    // Get books from Redux
    const books = useSelector(
        (state)=>state.books.list
    );

    // Filter books
    const filtered = books
    .filter((book)=>!cat || book.category === cat)
    .filter(
        (book)=>
        book.title
        .toLowerCase()
        .includes(search.toLowerCase())
        ||
        book.author
        .toLowerCase()
        .includes(search.toLowerCase())
    );



    return (

        <div className="p-4 sm:p-6 md:p-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-5">
                {cat || "All"} Books
            </h1>

        {/* Search */}

        <input type="text" placeholder="Search by title or author" value={search} onChange={(e)=>setSearch(e.target.value)} 
        
        className="
        border
        p-3
        rounded-lg
        w-full
        mb-6
        "
        />




        {/* Books Grid */}

        <div className="grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        ">


        {
            filtered.map((book)=>(


            <div

            key={book.id}

            className="
            border
            rounded-xl
            shadow-md
            p-5
            w-full
            ">



            <h2 className="
            text-xl
            font-bold
            break-words
            ">

                {book.title}

            </h2>



            <p className="mt-2">

                Author: {book.author}

            </p>



            <p>

                Category: {book.category}

            </p>



            <p>

                ⭐ {book.rating}

            </p>



            <Link

            to={`/details/${book.id}`}

            className="
            inline-block
            mt-4
            text-blue-600
            "

            >

            View Details

            </Link>



            </div>


            ))
        }


        </div>


        </div>

    )

}


export default BrowseBooks;