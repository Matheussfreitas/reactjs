import laptop from '../assets/man-with-laptop.png'

export function Balao() {
    return (
        <div className="balao">
            <div className="balao-content">
                <h1 className="text-lg text-green-700 font-semibold">Parabéns, Alfa Clube de Benefícios</h1>
                <div className="max-w-[510px]">
                    <p>Agora você tem chance de aumentar em até 89% as vendas do seu negocio, com mensagens publicitárias diretamente no whatsapp dos seus clientes.</p>
                </div>
            </div>
            <div className='w-20'></div>
            <div>
                <img className='w-52 h-40' src={laptop} alt="" />
            </div>
        </div>
    )
}