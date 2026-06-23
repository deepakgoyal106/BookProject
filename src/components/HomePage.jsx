import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage(){

    const categories=[
        "Fiction",
        "Non-Fiction",
        "Sci-Fi"
    ];

    const books = useSelector(
        (state)=>state.books.list
    );


    return (

    <div className="
        p-4
        sm:p-6
        md:p-10
    ">


        {/* Welcome */}
        <div className="text-center">

            <h1 className="
            text-2xl
            sm:text-3xl
            md:text-5xl
            font-bold
            ">
                Welcome to Online Library 📚
            </h1>


            <p className="mt-3 text-gray-600">
                Explore thousands of books
            </p>

        </div>



        {/* Categories */}

        <h2 className="
        text-xl
        sm:text-2xl
        font-bold
        mt-8
        ">
            Categories
        </h2>


        <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-5
        gap-3
        mt-5
        ">


        {
            categories.map(cat=>(

            <Link
            key={cat}
            to={`/browse/${cat}`}

            className="
            bg-blue-200
            p-4
            rounded-lg
            text-center
            hover:bg-blue-300
            "

            >

            {cat}

            </Link>

            ))
        }


        </div>




        {/* Books */}

        <h2 className="
        text-xl
        sm:text-2xl
        font-bold
        mt-10
        ">
            Popular Books
        </h2>



        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        mt-5
        ">


        {
        books.map(book=>(

        <div
        key={book.id}
        className="
        border
        rounded-lg
        p-5
        shadow
        "
        >

        <h3 className="text-xl font-bold">
            {book.title}
        </h3>

        <p>{book.author}</p>


        <Link
        to={`/details/${book.id}`}
        className="text-blue-600"
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

export default HomePage;