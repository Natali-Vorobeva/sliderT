import { useSwiper } from 'swiper/react'
import { ReactComponent as Arrow} from '../../assets/images/arrow.svg'

import './Arrows.scss'

function Arrows() {

	const swiper = useSwiper()

	return (
		<div className="arrows">
			<Arrow onClick={() => swiper.slidePrev()} className="arrows__arrow image-swiper-button-prev  swiper-button-prev " />
			<Arrow onClick={() => swiper.slideNext()} className="arrows__arrow image-swiper-button-next swiper-button-next" />
		</div>
	);
}

export default Arrows
