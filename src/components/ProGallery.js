// ProGallery.js
import React from 'react';
import styles from './Project.module.css';
import image1 from '../assets/Image/FitResolution.png';
import image2 from '../assets/Image/Home:page.png';
import image3 from '../assets/Image/IciHomes.png';
import image4 from '../assets/Image/Map.png';
import image5 from '../assets/Image/WorkingOutWonders.png';
import image6 from '../assets/Image/Tattoo.png';

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

function ProGallery() {
  return (
    <div className={styles.projectGallery}>
      {galleryImages.map((image, index) => (
        <img
          key={`gallery-image-${index}`}
          src={image}
          alt={`Gallery item ${index + 1}`}
          className={styles.projectImage}
        />
      ))}
    </div>
  );
}

export default ProGallery;
