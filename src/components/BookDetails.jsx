import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";


// Details page
function BookDetails(){


const {id}=useParams();



const book =
useSelector(

(state)=>

state.books.list.find(

b=>b.id===Number(id)

)

);




if(!book){

return (

<h1 className="p-5">
Book Not Found
</h1>

)

}




return (

<div className="
p-4
sm:p-8
max-w-3xl
mx-auto
">


<div className="
border
rounded
shadow
p-6
">


<h1 className="
text-3xl
sm:text-5xl
font-bold
mb-5
">

{book.title}

</h1>



<p>
Author: {book.author}
</p>


<p>
Category: {book.category}
</p>


<p>
Rating ⭐ {book.rating}
</p>


<p className="mt-5">

{book.description}

</p>



<Link

to={`/browse/${book.category}`}

className="
text-blue-600
inline-block
mt-5
"

>

← Back To Browse

</Link>



</div>



</div>


)


}


export default BookDetails;