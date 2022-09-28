import Link from 'next/link';
// Utils
import { formatMoney, toCapitalize } from '../lib/utils';
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
      <h2>{toCapitalize(title)}</h2>
      <h3>{formatMoney(price)}</h3>
    </StyledProduct>
  );
}
