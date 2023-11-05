export const HamburgerMenu = () => {
    return (
        <div>
            <input type="checkbox" name="" id="" />
            <div className="flexColCenter">
                <span className="h-[1px] w-full bg-zinc-50"></span>
                <span className="h-[1px] w-full bg-zinc-50"></span>
                <span className="h-[1px] w-full bg-zinc-50"></span>
            </div>
        </div>
    )
}

export default function NavbarResp(){
    return(
        <div>
            <HamburgerMenu />
        </div>
    )
}