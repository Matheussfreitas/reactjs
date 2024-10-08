import config from '../assets/configuracoes.png'
import whats from '../assets/whatsapp.png'
import casa from '../assets/casa.png'
import lista from '../assets/lista.png'
import mais from '../assets/mais.png'
import sair from '../assets/sair.png'
import { useState, useRef } from 'react'

export function MenuList() {
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const submenuRef = useRef(null);

    const handleSubMenuToggle = (e) => {
        e.preventDefault(); 
        setOpenSubMenu(!openSubMenu);
    }

    return (
        <ul className="list">

            <li>
                <a href="http://localhost:8080/#/instancias">
                    <span>
                        <img src={lista} alt="" />
                        Listar Instâncias
                    </span>
                </a>
            </li>

            <li>
                <a href="http://localhost:8080/#/disparador">
                    <span>
                        <img src={whats} alt="" />
                        Disparador
                    </span>
                </a>
            </li>
        </ul>
    )
}