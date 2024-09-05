import React, { useState } from 'react';

const BinaryTest = () => {
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // Set the Base64 string
      };
      reader.readAsDataURL(file); // Read image as Base64
    }
  };

  const handleSubmit = () => {
    if (imageBase64) {
      // Process or send imageBase64 to the server
      console.log('Base64 Image Data:', imageBase64);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageBase64 && (
        <div>
          <h3>Preview:</h3>
          <img src={imageBase64} alt="Preview" style={{ maxWidth: '300px' }} />
          {imageBase64}
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BinaryTest;
