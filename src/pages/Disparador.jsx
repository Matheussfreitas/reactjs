import { ConteudoDisparador } from "../components/templates/ConteudoDisparador";
import { Menu } from "../components/Menu";

export function Disparador() {
    return (
        <div className="flex flex-1">
            <Menu />
            <ConteudoDisparador /> 
        </div>
        
    )
}