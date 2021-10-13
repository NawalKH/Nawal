import "./topbar.scss";

export default function topbar({menuOpen, setMenuOPen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="ham" onClick={()=>setMenuOPen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            </div>
        </div>
    )
}
