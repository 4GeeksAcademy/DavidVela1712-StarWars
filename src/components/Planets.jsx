import { Button, Card } from "react-bootstrap"
import { getListaPlanets, getPlanet } from "./planets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Planets = () => {
    const [lista, setLista] = useState([]);
    const [detalles, setDetalles] = useState({});
    const navegate = useNavigate();

    useEffect(() => {
        getListaPlanets().then(listaApi => {
            setLista(listaApi)
            listaApi.forEach((planet, index) => {
                setTimeout(() => {
                    getPlanet(planet.url).then(datos => {
                        setDetalles(listaAnterior => ({
                            ...listaAnterior,
                            [planet.uid]: datos
                        }))
                    })
                 }, index * 300)
            })
        })

    }, []);

    return (
        <>
        <div className="d-flex overflow-auto p-3">
            <h1>Planets</h1>
            {
                lista.map(e => (
                    <Card key={e.uid} style={{ minWidth: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                <span>population: {detalles[e.uid]?.population || ""}</span><br/>
                                <span>terrain: {detalles[e.uid]?.terrain || ""}</span>
                            </Card.Text>
                            <Button onClick={() => navegate(`/infoPlanet/${e.uid}`)} variant="primary">Mas info</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
        </>
    )
}