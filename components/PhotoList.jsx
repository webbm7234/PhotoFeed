const PhotoList = ({ photos }) => {
  return (
    <div>
      {photos.map((photo) => (
        <PhotoCart />
      ))}
    </div>
  );
};
export default PhotoList;
