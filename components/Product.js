import { StyledProduct } from '../styles/StyledProduct';

export default function Product({ attributes }) {
  const { title, price, image } = attributes;
  const { url } = image.data.attributes.formats.small;

  return (
    <StyledProduct>
      <div>
        <img src={url} alt="product" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </StyledProduct>
  );
}
