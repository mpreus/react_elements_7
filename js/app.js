/* komponent nawigacji desktopowej - w poziomie */
class DesktopMenu extends React.Component {
    state = {
        isOpen: true
    }

    openMenu = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
    }

    closeMenu = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: true
        })
    }

    render() {
        return (
            <section className="desktop">
                <div className="desktop-menu">
                    <a href="#" onClick={this.openMenu} className="open-menu"></a>
                    <nav className={this.state.isOpen ? "" : "hide"}>
                        <ul>
                            <li><a href="#">O nas</a></li>
                            <li><a href="#">Zespół</a></li>
                            <li><a href="#">Produkty</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}
/* komponent nawigacji mobilnej - w pionie */
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
                            <li><a href="#">O nas</a></li>
                            <li><a href="#">Zespół</a></li>
                            <li><a href="#">Produkty</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                        <a href="#" onClick={this.closeMenu} className="close-menu">Zamknij menu</a>
                    </nav>
                </div>
            </section>
        )
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





