import "./Header.css";
import {Link} from 'react-router-dom';
function Header(){
    return(<div className="header">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/browse"><li>Browse Books</li></Link>
            <Link to="/add"><li>Add Books</li></Link>
        </ul>
    </div>)
}

export default Header;