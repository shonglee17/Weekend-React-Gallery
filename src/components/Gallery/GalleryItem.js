import axios from 'axios'

function GalleryItem( {id, path, description, likes, fetchData} ){

   
   function addLike (id) {
    axios({
        method: 'PUT',
        url: `/gallery/${id}`,
    }).then ((response) => {
        fetchData();
    }).catch ((error) => {
        console.log('PUT', error);
      })
   }
   
    return(
        <>
            <span key={id}>
            <div>{likes}<button onClick={()=>addLike(id)}>Like</button></div>
            </span>
        </>
    )
}

export default GalleryItem