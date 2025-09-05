import React from "react";
import img1 from "../assets/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg";
import Carousel from "react-bootstrap/Carousel";
import styles from "../css/Slider.module.css";

function Slider() {
  return (
    <Carousel
      data-bs-theme="dark"
      className={`${styles.carousel} mt-5`}
      fade
      interval={3000} 
    >
      <Carousel.Item>
        <img className={`d-block w-100 ${styles.slideImg}`} src={img1} alt="First slide" />
        <Carousel.Caption className={styles.caption}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className={`d-block w-100 ${styles.slideImg}`} src={img1} alt="Second slide" />
        <Carousel.Caption className={styles.caption}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className={`d-block w-100 ${styles.slideImg}`} src={img1} alt="Third slide" />
        <Carousel.Caption className={styles.caption}>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
