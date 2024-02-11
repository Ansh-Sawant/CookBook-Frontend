import { Button, Card } from 'react-bootstrap';

import logo from './img/cookbook.jpeg';

function Recipe(props) {

  const { dishName } = props

  return (
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{dishName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go to Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;