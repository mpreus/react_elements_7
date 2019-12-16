/* komponent nawigacji desktopowej - w poziomie, otwarta (renderowana) na stałe */
class DesktopMenu extends React.Component {
    
    render() {
        return (
            <section className="desktop">
                <div className="desktop-menu">
                    <nav>
                        <ul>
                            <li><a href="https://mpreus.github.io/react_elements_5/">Życzenia</a></li>
                            <li><a href="https://mpreus.github.io/react_elements_4/">Waluty</a></li>
                            <li><a href="https://mpreus.github.io/react_basic_elements_15/">Godzina</a></li>
                            <li><a href="http://www.linkedin.com/in/maciejpreus">Kontakt</a></li>
                        </ul>
                    </nav> 
                </div>
            </section> 
        )                /* pozioma nawigacja bez przycisków otwierającego i zamykającego */
    }
}

/* komponent nawigacji mobilnej - w pionie - domyślnie zamknięta; otwierana kliknięciem w hamburger */
class MobileMenu extends React.Component {
    state = {
        isOpen: false
    }

    openMenu = e => {
        e.preventDefault()
        this.setState({
            isOpen: true
        })
    }

    closeMenu = e => {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <section className="mobile">
                <div className="mobile-menu">
                    <a href="#" onClick={this.openMenu} className="open-menu"></a>
                    <nav className={this.state.isOpen ? "" : "hide"}>
                        <ul>
                            <li><a href="https://mpreus.github.io/react_elements_5/">Życzenia</a></li>
                            <li><a href="https://mpreus.github.io/react_elements_4/">Waluty</a></li>
                            <li><a href="https://mpreus.github.io/react_basic_elements_15/">Godzina</a></li>
                            <li><a href="http://www.linkedin.com/in/maciejpreus">Kontakt</a></li>
                        </ul>
                        <a href="#" onClick={this.closeMenu} className="close-menu">Zamknij menu</a>
                    </nav>
                </div>
            </section>
        )            /* pionowa (mobilna) nawigacja z przyciskami: otwierającym menu i zamykającym */
    }
}
/* warunkowe renderowanie nawigacji w zależności od szerokości ekranu */
function App() {
    let screenWidth = screen.width;
    return screenWidth > 800 ? <DesktopMenu /> : <MobileMenu />
}

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);





