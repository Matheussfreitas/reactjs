import { Balao } from "../Balao";
import { UserBar } from "../UserBar";
import { Pagina } from "./Pagina";

export function ConteudoHome() {
    return (
        <div className="mx-32 my-5">
            <Pagina>
                <div className="flex flex-col gap-7">
                    <UserBar />
                    <Balao />
                </div>
            </Pagina> 
        </div>
    )
}