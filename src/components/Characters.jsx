import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap"
import { getCharacter, getListaCharacters } from "./characters";
import { useNavigate } from "react-router";

export const Characters = ({ favoritos, setFavoritos }) => {
    const [lista, setLista] = useState([]);
    const [detalles, setDetalles] = useState({});
    const navegate = useNavigate();

    const añadirFavoritos = (personaje) => {
        const existe = favoritos.find(fav => fav.uid == personaje.uid);
        if (!existe) {
            setFavoritos([...favoritos, personaje]);
        }
    }

    useEffect(() => {
        getListaCharacters().then(listaApi => {
            setLista(listaApi)
            listaApi.forEach((character, index) => {
                setTimeout(() => {
                    getCharacter(character.url).then(datos => {
                        setDetalles(listaAnterior => ({
                            ...listaAnterior,
                            [character.uid]: datos
                        }))
                    })
                }, index * 300)
            })
        })

    }, []);

    return (
        <>
            <h1>Characters</h1>
            <div className="d-flex overflow-auto p-3">
                {
                    lista.map(e => (
                        <Card key={e.uid} style={{ minWidth: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Text>
                                    <span>Género: {detalles[e.uid]?.gender || ""}</span><br />
                                    <span>Color ojos: {detalles[e.uid]?.eye_color || ""}</span><br />
                                    <span>Color pelo: {detalles[e.uid]?.hair_color || ""}</span>
                                </Card.Text>
                                <Button onClick={() => navegate(`/infoCharacter/${e.uid}`)} variant="primary">Mas info</Button>
                                <Button onClick={() => añadirFavoritos(e)}>Favoritos</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}