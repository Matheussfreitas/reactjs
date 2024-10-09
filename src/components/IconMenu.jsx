import { Link } from 'react-router-dom';
import icon from '../assets/icon.png'
import '../styles/index.css';


export function IconMenu() {
    return <div>
        <a className="icon" href="http://localhost:8080/">
            <span>
                <img src={icon} alt="" />
                <span className='text-2xl font-bold'>Bchat - API</span>
            </span>
        </a>
    </div>
}