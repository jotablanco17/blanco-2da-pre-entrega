import Counter from "../../Counter/Itemcount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = ({ product }) => {
    console.log(product);
    const onAdd = (count) => {
        console.log('cantidad de productos', count)
    }
    return (<div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> Stock :{product.stock}</ListGroup.Item>
                <ListGroup.Item> Precio :{product.price}</ListGroup.Item>
                <ListGroup.Item> id :{product.id}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Counter inital={1} stock={4} onAdd={onAdd} />
            </Card.Body>
        </Card>
    </div>




    );
}

export default ItemDetail