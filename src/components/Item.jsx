import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({personaje}) => {
    const{name, image , especie , status} = personaje
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Especie:{especie}
                        <br />
                        Estado:{status}
                    </Card.Text>
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
    )
}

export default Item