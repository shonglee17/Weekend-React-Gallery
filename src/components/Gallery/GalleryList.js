import GalleryItem from './GalleryItem'

function GalleryList({imageList, getImages}){    
    return(
        <>
        
            {imageList.map((thaco)=>{
                return (
                <GalleryItem key={thaco.id} path={thaco.path} description={thaco.description} likes={thaco.likes} getImages={getImages} />
                )
            })}
        
        </>
    )
}

export default GalleryList