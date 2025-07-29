import { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup, Spinner } from "react-bootstrap"
import { getPlanet } from "./planets";
import { useNavigate, useParams } from "react-router";

export const InfoPlanet = () => {
    const {uid} = useParams();
    const [planet, setPlanet] = useState(null);

    const navegate = useNavigate();

    useEffect(() => {
        getPlanet(`https://www.swapi.tech/api/planets/${uid}`).then(datos => {
            setPlanet(datos);
        })
    }, []);

    if (!planet) {
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Spinner animation="border" role="status" />
            </Container>
        )
    }

    return (
        <>
            <Container className="mt-5 d-flex justify-content-center">
                <Card style={{width: "28rem"}} className="shadow p-3">
                    <Card.Body>
                        <h1 className="text-center mb-3">{planet.name}</h1>
                        <p className="text-center">Lore Ipsum</p>
                        <hr/>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Nombre: </strong>{planet.name}</ListGroup.Item>
                            <ListGroup.Item><strong>Clima: </strong>{planet.climate}</ListGroup.Item>
                            <ListGroup.Item><strong>Población: </strong>{planet.population}</ListGroup.Item>
                            <ListGroup.Item><strong>Órbital: </strong>{planet.orbital_period}</ListGroup.Item>
                            <ListGroup.Item><strong>Rotación: </strong>{planet.rotation_period}</ListGroup.Item>
                            <ListGroup.Item><strong>Diámetro: </strong>{planet.diameter}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button onClick={() => navegate("/")}>Volver</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}