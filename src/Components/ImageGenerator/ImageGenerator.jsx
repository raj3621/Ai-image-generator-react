import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import defaultImage from '../Assests/mehrab-sium-ZOYwE9YMWKI-unsplash.jpg'

export const ImageGenerator = () => {

  const inputRef = useRef(null);

  const [image_url, setImage_url] = useState("/");

  const generateImage = async () => {

    if (inputRef.current.value === "") return;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      inputRef.current.value
    )}`;

    setImage_url(imageUrl);
  };

  return (
    <div className="ai-image-generator">

      <div className="header">
        Ai Image <span>Generator</span>
      </div>

      <div className="img-loading">
        <img
          src={image_url === "/" ? defaultImage : image_url}
          alt="Generated"
        />
      </div>

      <div className='search-box'>

        <input
          type="text"
          ref={inputRef}
          className='search-input'
          placeholder='Describe What You Want To See'
        />

        <div
          className='generate-btn'
          onClick={generateImage}
        >
          Generate
        </div>

      </div>

    </div>
  )
}