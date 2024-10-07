import icon from '../assets/icon.png'
import '../styles/index.css';


export function IconMenu() {
    return <div>
        <a className="icon" href="">
            <span>
                <img src={icon} alt="" />
                <span className='text-2xl font-bold'>Bchat - API</span>
            </span>
        </a>
    </div>
}