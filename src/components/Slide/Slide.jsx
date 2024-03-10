import './Slide.scss';

function Slide({ image, title, date, width }) {
	
	return (
		<>
			<img className={`slide__image ${width}`} src={image} alt="Изображение" />
			<a href='#' className="slide__description">{title}</a>
			<p className="slide__date">{date}</p>
		</>
	);
}

export default Slide; 