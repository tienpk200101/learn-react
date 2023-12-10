import React, { useEffect, useState } from "react";
import axios from "axios";

// https://picsum.photos/v2/list?page=2&limit=100
// https://picsum.photos/v2/list

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = async () => {
    const images = await getRandomPhotos(nextPage);
    console.log(images);
    const newPhotos = [...photos, ...images];
    setPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <div className="" key={photo.id}>
              <img
                src={photo.download_url}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="mt-[20px] text-center">
        <button
          className="px-[15px] py-[5px] bg-purple-600 text-white rounded-lg"
          onClick={handleLoadMorePhotos}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
