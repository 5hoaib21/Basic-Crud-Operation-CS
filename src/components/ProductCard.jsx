import {CircleDollar} from "@gravity-ui/icons";
import {Button, Card, Link} from "@heroui/react";

export function ProductCard({product}) {
  const {_id, title, price, description} = product;
  return (
    <Card className="w-100 ">
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="/"
          rel="noopener noreferrer"
          target="_blank"
        >
         {price}
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
        <Link href={`/products/${_id}`}><Button>View Details</Button></Link>
    </Card>
  );
}