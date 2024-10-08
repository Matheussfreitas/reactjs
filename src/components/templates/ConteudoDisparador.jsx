import { Forms } from "../Forms";
import { Pagina } from "./Pagina";

export function ConteudoDisparador() {
    return (
        <div className="mx-32 my-5">
            <Pagina>
                <div className="flex flex-col gap-7 w-full max-w-screen-xl">
                    <Forms />
                </div>
            </Pagina> 
        </div>
    )
}