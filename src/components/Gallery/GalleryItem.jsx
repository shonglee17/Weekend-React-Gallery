import axios from 'axios';
import { useState } from 'react';

function GalleryItem({ id, path, description, likes, fetchData }) {
  const [isHiding, setIsHiding] = useState(false);

  function addLike(id) {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
      .then((response) => {
        fetchData();
      })
      .catch((error) => {
        console.log('PUT', error);
      });
  }
  const toggleHiding = () => {
    setIsHiding(!isHiding);
  };

  return (
    <>
      <span>
        <div>
          {!isHiding ? (
            <>
              <img src={path} onClick={() => toggleHiding(id)}></img>
              {likes}
              <button onClick={() => addLike(id)}>Like</button>
            </>
          ) : (
            <>
              <div onClick={() => toggleHiding(id)}>{description}</div>
              <div>
                {likes}
                <button onClick={() => addLike(id)}>Like</button>
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
}
//   if (isHiding === false) {
//     return (
//       <>
//         <span key={id}>
//           <div onClick={() => toggleHiding(id)}><img src='{path}'></img></div>
//           <div>
//             {likes}
//             <button onClick={() => addLike(id)}>Like</button>
//           </div>
//         </span>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <span key={id}>
//           <div onClick={() => toggleHiding(id)}>{description}</div>
//           <div>
//             {likes}
//             <button onClick={() => addLike(id)}>Like</button>
//           </div>
//         </span>
//       </>
//     );
//   }
// }

export default GalleryItem;
