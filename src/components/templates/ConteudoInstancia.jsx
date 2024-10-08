import { List } from "../List";
import { UserBar } from "../UserBar";
import { Pagina } from "./Pagina";

export function ConteudoInstancia() {
    return (
        <div className="mx-32 my-5">
            <Pagina>
                <div className="flex flex-col gap-7">
                    <UserBar />
                    <List />
                </div>
            </Pagina> 
        </div>
    )
}