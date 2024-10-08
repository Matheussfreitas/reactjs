import { ConteudoHome } from "../components/templates/ConteudoHome";
import { Menu } from "../components/Menu";

export function Home() {
    return (
        <div className="flex flex-1">
            <Menu />
            <ConteudoHome /> 
        </div>
        
    )
}