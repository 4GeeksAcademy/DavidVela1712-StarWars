import { Col, Container, Row } from "react-bootstrap"
import { Characters } from "./Characters"
import { Planets } from "./Planets"

export const DashBoard = ({favoritos, setFavoritos}) => {
    return (
        <>
            <Container className="p-3" fluid>
                <Row>
                    <Col>
                        <Characters favoritos={favoritos} setFavoritos={setFavoritos}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Planets />
                    </Col>
                </Row>
            </Container>
        </>
    )
}