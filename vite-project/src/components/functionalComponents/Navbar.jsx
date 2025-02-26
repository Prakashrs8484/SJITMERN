import '../css/Navbar.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    const [dropDown,setDropDown]=useState(false);
    var [dropdown1, showDropdown1] = useState(false);
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/form'>Form</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/skills'>Skill</Link></li>
                <li><Link to='/hoc'>HoC</Link></li>
                <li 
                    className="dropDown" 
                    onMouseEnter={() => setDropDown(true)} 
                    onMouseLeave={() => setDropDown(false)}
                >
                    <span className="dropdown-toggle">Hooks</span>
                    {dropDown && (
                        <ul 
                            className="dropdown-menu" 
                            onMouseEnter={() => setDropDown(true)} 
                            onMouseLeave={() => setDropDown(false)}
                        >
                            <li><Link to='/useState'>useState</Link></li>
                            <li><Link to='/useEffect'>useEffect</Link></li>
                            <li><Link to='/use-effect-api'>useEffectAPI</Link></li>
                            <li><Link to='/useRef'>useRef</Link></li>
                            <li><Link to='/useMemo'>useMemo</Link></li>
                            <li><Link to='useCallback'>useCallback</Link></li>
                            <li><Link to=""></Link></li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/hoc" className="link">
                        HoC
                    </Link>
                </li>

                <li 
                  className="dropdown"
                  onMouseEnter={() => showDropdown1(!dropdown1)}
                  onMouseLeave={() => showDropdown1(!dropdown1)}
                  >
                     <span className="dropdown-toggle">Memoization</span>
          
                        {dropdown1 && (
                    <ol className="dropdown-menu" >
                        <li>
                        <Link to="/memo" className="dropdown-link">
                            Memo
                        </Link>
                        </li>
                        <li>
                            <Link to="/lazy" className="dropdown-link">
                                Lazy Component
                            </Link>
                        </li>
                    </ol>
                )}
                </li>

                <li><Link to='/login'>Login</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;