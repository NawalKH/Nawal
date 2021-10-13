import "./menu.scss"

export default function Menu({menuOpen, setMenuOPen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOPen(false)}>
                    <a href="#intro">Home</a>
                </li>
                
                <li onClick={()=>setMenuOPen(false)}>
                    <a href="#about">About</a>
                </li>

                <li onClick={()=>setMenuOPen(false)}>
                    <a href="#journey">My Journey</a>
                </li>

                <li onClick={()=>setMenuOPen(false)}>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
            
        </div>
    )
}
