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
/* prosta struktura nawigacji */
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

function App() {
    return <MobileMenu />
}

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);





