import { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup, Spinner } from "react-bootstrap"
import { getCharacter } from "./characters";
import { useNavigate, useParams } from "react-router";

export const InfoCharacter = () => {
    const { uid } = useParams();
    const [character, setCharacter] = useState(null);

    const navegate = useNavigate();

    useEffect(() => {
        getCharacter(`https://www.swapi.tech/api/people/${uid}`).then(datos => {
            setCharacter(datos);
        })
    }, []);

    if (!character) {
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Spinner animation="border" role="status" />
            </Container>
        )
    }

    return (
        <>
            <Container className="mt-5 d-flex justify-content-center">
                <Card style={{ width: "28rem" }} className="shadow p-3">
                    <Card.Img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`}/>
                    <Card.Body>
                        <h1 className="text-center mb-3">{character.name}</h1>
                        <p className="text-center">Lore Ipsum</p>
                        <hr />
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Nombre: </strong>{character.name}</ListGroup.Item>
                            <ListGroup.Item><strong>Cumpleaños: </strong>{character.birth_year}</ListGroup.Item>
                            <ListGroup.Item><strong>Género: </strong>{character.gender}</ListGroup.Item>
                            <ListGroup.Item><strong>Altura: </strong>{character.height}</ListGroup.Item>
                            <ListGroup.Item><strong>Color piel: </strong>{character.skin_color}</ListGroup.Item>
                            <ListGroup.Item><strong>Color ojos: </strong>{character.eye_color}</ListGroup.Item>
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