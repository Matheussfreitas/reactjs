import { Menu } from "../components/Menu";
import { ConteudoInstancia } from "../components/templates/ConteudoInstancia";

export function Instancias() {
    return (
        <div className="flex flex-1">
            <Menu />
            <ConteudoInstancia /> 
        </div>
        
    )
}