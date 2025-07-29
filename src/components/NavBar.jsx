import { Button, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router";

export const NavBar = ({favoritos, setFavoritos}) => {
    const navegate = useNavigate();

    const eliminarFavorito = (uid) => {
        setFavoritos(favoritos.filter((fav) => fav.uid != uid));
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navegate("/")} style={{cursor: "pointer"}}>StarWars</Navbar.Brand>
                    <DropdownButton id="dropdown-basic-button" title={`Favoritos ${favoritos.length}`}>
                        {
                            favoritos.length === 0 ? (
                                <Dropdown.Item href="#/action-1">Vacío</Dropdown.Item>
                            ) : (
                                favoritos.map(e => (
                                    <Dropdown.Item key={e.uid} >
                                        <span>{e.name}</span>
                                        <Button variant="danger" onClick={() => eliminarFavorito(e.uid)}>Eliminar</Button>
                                    </Dropdown.Item>
                                ))
                            )
                        }
                    </DropdownButton>
                </Container>
            </Navbar>
        </>
    )
}