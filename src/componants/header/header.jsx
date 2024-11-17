import UserTag from "../userData/usertag";
import "./header.css"

function Header(){
    return(
        <header className="w-full bg-[#CCD6A6] flex h-[100px] relative items-center p-[10px]">
            <img src="/logo.png" className="h-[100px] mr-4 left-0 bg-logo"/>
            <h1 className="text-[30px] text-white">Hotel Management System</h1>
            <UserTag name="Chathura" img="https://randomuser.me/api/portraits/men/75.jpg "/>
        </header>
    )
}

export default Header;