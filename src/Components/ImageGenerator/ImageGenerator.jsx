import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import defaultImage from '../Assests/mehrab-sium-ZOYwE9YMWKI-unsplash.jpg'

export const ImageGenerator = () => {

  const inputRef = useRef(null);

  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {

    if (inputRef.current.value === "") return;
    setLoading(true);

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
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="loading">
        <div className={loading?"loading-bar-full":"loading-bar"}></div>
        <div className={loading?"loading-text":"display-none"}>Loading...</div>
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