import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailesPage = ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailesPage;
