import { useSwiper } from 'swiper/react';
import { ReactComponent as ButtonLeft } from '../../assets/images/arrow-left.svg'
import './Arrows.scss'

function Arrows() {

	const swiper = useSwiper()

	return (
		<div className="arrows">
			
			<ButtonLeft onClick={() => swiper.slidePrev()} className="arrows__arrow image-swiper-button-prev  swiper-button-prev " />
			<ButtonLeft  onClick={() => swiper.slideNext()} className="arrows__arrow image-swiper-button-next swiper-button-next" />
		</div>
	);
}

export default Arrows;