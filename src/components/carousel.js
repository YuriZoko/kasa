import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPreviousSlide = () => {
		const index = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(index);
	};

	const goToNextSlide = () => {
		const index = (currentIndex + 1) % images.length;
		setCurrentIndex(index);
	};

	return (
		<div className="carousel">
			<button className="carousel-control" onClick={goToPreviousSlide}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
			<div className="carousel-indicator">
				{currentIndex + 1}/{images.length}
			</div>
			<button className="carousel-control" onClick={goToNextSlide}>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
};

export default Carousel;