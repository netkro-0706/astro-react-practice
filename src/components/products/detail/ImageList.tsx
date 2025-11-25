interface Props {
  images?: string[];
}

const ImageList = ({ images }: Props) => {
  return (
    <div>
      {images?.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            width={320}
            height={240}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};

export default ImageList;
