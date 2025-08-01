import { useContext } from "react";
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router";
import { FavoritosContext, useFavorites } from "./FavoritosContext";

export const NavBar = ({ favoritos, setFavoritos }) => {
    const navegate = useNavigate();
    const { favorites, deleteFavorite } = useFavorites();

    const eliminarFavorito = (uid) => {
        setFavoritos(favoritos.filter((fav) => fav.uid != uid));
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navegate("/")} style={{ cursor: "pointer" }}>StarWars</Navbar.Brand>
                    <DropdownButton id="dropdown-basic-button" title={`Favoritos ${favorites.length}`}>
                        {
                            favorites.length === 0 ? (
                                <Dropdown.Item href="#">Vacío</Dropdown.Item>
                            ) : (
                                favorites.map(e => (
                                    <Dropdown.Item key={`${e.uid}-${e.type}`} >
                                        {
                                            e.type === "character" ? (
                                                <span onClick={() => navegate(`/infoCharacter/${e.uid}`)}>{e.name}</span>
                                            ) : (
                                                <span onClick={() => navegate(`/infoPlanet/${e.uid}`)}>{e.name}</span>
                                            )
                                        }
                                        <Button variant="danger" onClick={() => deleteFavorite(e.uid, e.type)}>Eliminar</Button>
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