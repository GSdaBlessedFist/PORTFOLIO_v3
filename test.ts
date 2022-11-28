type Image = {
  src: string;
};

type ProductImageProps = {
  image: Image;
};

function ProductImage({ image }: ProductImageProps) {
  return <img src={image.src} />;
}

type ProductProps = {
  name: string;
  price: number;
  images: Image[];
};

export function Product({ name, price, images }: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((image) => (
        <ProductImage image={image} />
      ))}
    </div>
  );
}