import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";


// Add Book Page Component
function AddBooks() {


  // Redux dispatch
  const dispatch = useDispatch();


  // Navigation
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({

    title: "",
    author: "",
    category: "",
    rating: "",
    description: ""

  });



  // Error state
  const [errors, setErrors] = useState({});




  // Handle input changes
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };




  // Form validation
  const validate = () => {

    let newErrors = {};


    if(!formData.title.trim()){
      newErrors.title="Title is required";
    }


    if(!formData.author.trim()){
      newErrors.author="Author is required";
    }


    if(!formData.category){
      newErrors.category="Select category";
    }


    if(!formData.rating){
      newErrors.rating="Rating required";
    }


    if(!formData.description.trim()){
      newErrors.description="Description required";
    }


    return newErrors;

  };





  // Submit form
  const handleSubmit=(e)=>{


    e.preventDefault();



    const validationErrors = validate();



    if(Object.keys(validationErrors).length){

      setErrors(validationErrors);

      return;

    }




    const newBook={

      id: Date.now(),

      ...formData,

      rating:Number(formData.rating)

    };




    // Add book to Redux
    dispatch(
      addBook(newBook)
    );




    // Redirect after adding book
    navigate(
      `/browse/${formData.category}`
    );


  };




  return (

    <div className="
      p-4
      sm:p-8
      max-w-xl
      mx-auto
    ">



      <h1 className="
        text-2xl
        sm:text-4xl
        font-bold
        mb-6
      ">

        Add New Book 📚

      </h1>




      <form

      onSubmit={handleSubmit}

      className="
        flex
        flex-col
        gap-4
      "

      >




      {/* Title */}

      <input

      type="text"

      name="title"

      placeholder="Book Title"

      value={formData.title}

      onChange={handleChange}

      className="
        border
        p-3
        rounded
        w-full
      "

      />


      {errors.title &&
      <p className="text-red-500">
        {errors.title}
      </p>
      }





      {/* Author */}

      <input

      type="text"

      name="author"

      placeholder="Author Name"

      value={formData.author}

      onChange={handleChange}

      className="
        border
        p-3
        rounded
      "

      />


      {errors.author &&
      <p className="text-red-500">
        {errors.author}
      </p>
      }






      {/* Category */}

      <select

      name="category"

      value={formData.category}

      onChange={handleChange}

      className="
        border
        p-3
        rounded
      "

      >


      <option value="">
        Select Category
      </option>


      <option value="Fiction">
        Fiction
      </option>


      <option value="Non-Fiction">
        Non-Fiction
      </option>


      <option value="Sci-Fi">
        Sci-Fi
      </option>


      <option value="Romance">
        Romance
      </option>


      <option value="Mystery">
        Mystery
      </option>


      </select>



      {errors.category &&
      <p className="text-red-500">
        {errors.category}
      </p>
      }







      {/* Rating */}

      <input

      type="number"

      step="0.1"

      min="1"

      max="5"

      name="rating"

      placeholder="Rating 1-5"

      value={formData.rating}

      onChange={handleChange}

      className="
        border
        p-3
        rounded
      "

      />


      {errors.rating &&
      <p className="text-red-500">
        {errors.rating}
      </p>
      }







      {/* Description */}

      <textarea

      name="description"

      placeholder="Description"

      value={formData.description}

      onChange={handleChange}

      rows="4"

      className="
        border
        p-3
        rounded
      "

      />



      {errors.description &&
      <p className="text-red-500">
        {errors.description}
      </p>
      }






      <button

      type="submit"

      className="
        bg-green-500
        text-white
        p-3
        rounded
        hover:bg-green-600
        w-full
      "

      >

      Add Book

      </button>



      </form>


    </div>

  );


}


export default AddBooks;