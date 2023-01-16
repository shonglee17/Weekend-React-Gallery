import GalleryItem from './GalleryItem';

function GalleryList({ imageList, fetchData }) {
  return (
    <>
      {imageList.map((data) => {
        return (
          <GalleryItem
            key={data.id}
            id={data.id}
            path={data.path}
            description={data.description}
            likes={data.likes}
            fetchData={fetchData}
          />
        );
      })}
    </>
  );
}

export default GalleryList;
