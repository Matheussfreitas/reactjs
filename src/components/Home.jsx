import { Conteudo } from "./Conteudo";
import { Menu } from "./Menu";

export function Home() {
    return (
        <div className="flex flex-1">
            <Menu />
            <Conteudo /> 
        </div>
        
    )
}