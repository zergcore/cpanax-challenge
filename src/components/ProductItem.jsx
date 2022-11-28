import React, {useState} from 'react';
import '../styles/ProductItem.scss'
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const ProductItem = ({ product }) => {

	const [isOpen, setIsOpen] = useState(false);
  	const [photoIndex, setPhotoIndex] = useState(0);
	const {images}=product

	return (
	
		<div className="ProductItem">
			<button 
					type="button" 
					className="btn btn-transparent"
					onClick={() => setIsOpen(true)}>
				<img src={product.images[0]} alt={product.title} />
				<div className="product-info">
					<div>
						<p>${product.price}</p>
						<p>{product.title}</p>
					</div>
				</div>
			</button>

		{/* <ProductModal product={product}/> */}

		{!!isOpen && (
			<Lightbox
			mainSrc={images[photoIndex]}
			nextSrc={images[(photoIndex + 1) % images.length]}
			prevSrc={
				images[
				(photoIndex + images.length - 1) % images.length
				]
			}
			onCloseRequest={() => setIsOpen(false)}
			onMovePrevRequest={() =>
				setPhotoIndex(
				(photoIndex + images.length - 1) % images.length
				)
			}
			onMoveNextRequest={() =>
				setPhotoIndex((photoIndex + 1) % images.length)
			}
			/>
		)}

		</div>
	);
}

export default ProductItem;