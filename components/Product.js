import Link from 'next/link';
// Styled
import { StyledProduct } from '../styles/StyledProduct';

export default function Product({ attributes }) {
  const { title, price, slug, image } = attributes;
  const { url } = image.data.attributes.formats.small;

  return (
    <StyledProduct>
      <div>
        <Link href={`/products/${slug}`}>
          <img src={url} alt={title} />
        </Link>
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </StyledProduct>
  );
}
