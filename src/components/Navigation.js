import { useState } from "react";


function Navigation() {

    // change colour of navbar background when scrolling 
    const [color, setColor] = useState(false);
    
    const changeColor = () => {
        if (window.scrollY >= 50 && window.screen.width > 1024) {
            setColor(true)
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

   
    // display/hide mobile navbar
    const[IsNavDisplayed, setIsNavDisplayed] = useState(false);

    if (IsNavDisplayed) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
    } else {
        document.body.style.overflow = "visible";
        document.body.style.position = "static";
    }

    return (
            <div className={color ? 'nav-container nav-container-white': 'nav-container'}>
                <nav className="navbar">
                    <div className={color ? 'logo logo-green': 'logo'}>Maple Trail Adventures</div>
                        <ul className={color ? 'nav-list nav-list-green' : 'nav-list nav-list-hidden'}>
                            <li>Okanagan Valley</li>
                            <li>Vancouver & Vancouver Island</li>
                            <li>Banff</li>
                        </ul>
                        <button className="mobile-btn" onClick={() => { setIsNavDisplayed(!IsNavDisplayed);}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                </nav>
                <nav className={IsNavDisplayed ? "mobile-nav": "nav-container"} >
                    <ul className={IsNavDisplayed ? "mobile-nav-list": "mobile-nav-list-hidden"}>
                        <li>Okanagan Valley</li>
                        <li>Vancouver & Vancouver Island</li>
                        <li>Banff</li>
                    </ul>
                </nav>
            </div>
    )

    
}

export default Navigation;