import { IconMenu } from "./IconMenu";
import { MenuList } from "./MenuList";

export function Menu() {
    return (
        <div className="menu">
            <aside className="h-screen w-60 bg-white">
                <IconMenu />
                <MenuList />
            </aside>
        </div>
    )
}