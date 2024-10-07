import { Balao } from "./Balao";
import { Barra } from "./Barra";
import { Pagina } from "./templates/Pagina";

export function Conteudo() {
    return (
        <div className="mx-32 my-5">
            <Pagina>
                <div className="flex flex-col gap-7">
                    <Barra />
                    <Balao />
                </div>
            </Pagina> 
        </div>
    )
}