import {Link} from 'react-router-dom';
function Header(){
    return(<div className="bg-blue-600 text-white p-4 flex gap-6 justify-center">
       
            <Link to="/home">Home</Link>
            <Link to="/browse">Browse Books</Link>
            <Link to="/add">Add Books</Link>
       
    </div>)
}

export default Header;