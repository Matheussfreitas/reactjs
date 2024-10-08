export function Forms() {
    return (
        <div className="container-form">
            <div>
                <span className="text-lg">Importar / </span>
                <span className="text-xl font-bold">Enviar em massa</span>
            </div>

            <div className="box-form">
                <div className="flex flex-col">
                    <label htmlFor="options" className="mb-2 font-medium">SELECIONE A INSTÂNCIA</label>
                    <select id="options" className="border rounded-md p-2">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="Alfa-Financeiro">Alfa-Financeiro</option>
                        <option value="Alfa-Clube-de-Beneficios">Alfa-Clube de Benefícios</option>
                        <option value="Alfa-Regional-Fortaleza">Alfa-Regional Fortaleza</option>
                        <option value="Alfa-Regional-Natal">Alfa-Regional Natal</option>
                        <option value="Disparo-Rastreamento">Disparo-Rastreamento</option>
                        <option value="Disparo-Alfa">Disparo-Alfa</option>
                        </select>
                </div>

                <form action="" className="form">
                    <div className="flex gap-1 items-center border rounded-md">
                        <label htmlFor="">Mensagem</label>
                        <textarea type="text" placeholder="Digite a mensagem..." className="border rounded-md p-2 w-full"/>
                    </div>

                    <div className="flex items-center gap-1">
                        <label htmlFor="">Tempo de espera entre as mensagens</label>
                        <input type="number" className="border p-0 rounded-md w-full"/>
                    </div>

                    <div className="flex gap-3">
                        <label htmlFor="">Enviar arquivo</label>
                        <input type="checkbox" name="" id="" className="" />
                    </div>

                    <div className="border rounded-md">
                        <input type="file" name="" id="" className="w-full"/>
                    </div>
                </form>

                <button className="border shadow-sm rounded-md flex left-0 w-16 p-2">Iniciar</button>
            </div>
        </div>
    )
}