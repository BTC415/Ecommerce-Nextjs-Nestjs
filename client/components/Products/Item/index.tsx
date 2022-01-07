//importing utils
import { ProductInterface } from '../../../interfaces';
//importing components
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Rating from '../../Rating';

const Item: React.FC<ProductInterface> = ({
  _id,
  image,
  name,
  rating,
  numReviews,
  price,
}) => {
  return (
    <Card className="my-3 p-3 rounded cursor-pointer" role="button">
      <Link href={`/product/${_id}`} passHref>
        <Card.Img src={image} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link href={`/product/${_id}`} passHref>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={rating} text={`${numReviews} reviews`} />
          </div>
        </Card.Text>

        <Card.Text as="h3" className="py-1">
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
