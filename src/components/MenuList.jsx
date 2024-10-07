import config from '../assets/configuracoes.png'
import whats from '../assets/whatsapp.png'
import casa from '../assets/casa.png'
import lista from '../assets/lista.png'
import mais from '../assets/mais.png'
import sair from '../assets/sair.png'


export function MenuList() {
    return (
        <ul className="list">
            <li>
                <a href="">
                    <span>
                        <img src={casa} alt="" />
                        Dashboard
                    </span>
                </a>
            </li>

            <li>
                <a href="">
                    <span>
                        <img src={mais} alt="" />
                        Criar Instâncias
                    </span>
                </a>
            </li>

            <li>
                <a href="">
                    <span>
                        <img src={lista} alt="" />
                        Listar Instâncias
                    </span>
                </a>
            </li>

            <li>
                <a href="">
                    <span>
                        <img src={whats} alt="" />
                        Disparador
                    </span>
                </a>
            </li>
            
            <li>
                <a href="">
                    <span>
                        <img src={config} alt="" />
                        Configurações
                    </span>
                </a>
                <ul className='sublist'>
                    <li>
                        <a href="">API Alternativa</a>
                    </li>
                    <li>
                        <a href="">Perfil</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="">
                    <span>
                        <img src={sair} alt="" />
                        Desconectar
                    </span>
                </a>
            </li>
        </ul>
    )
}