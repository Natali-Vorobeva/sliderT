import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import Slide from '../slide/slide'
import Arrows from "../Arrows/Arrows"
import data from '../../constants/constants'
import shuffleArray from '../../utils/shuffleArray'

import './Slider.scss';
import '../Slide/Slide.scss';

function Slider() {

	const typesStyle = ['styleOne', 'styleTwo', 'styleThree', 'styleFour', 'styleFive']

	// Перемешивание массива стилей typesStyle
	shuffleArray(typesStyle)

	const result = data.map((item, i) => (
		item.title.length > 35
			?
			{ ...item, types: 'swiper-double' }
			:
			{ ...item, types: typesStyle[i] }
	));

	return (
		<section className="slider">
			<Swiper
				slidesPerView={3.47}
				grabCursor={true}
				mousewheel={true}
				containerModifierClass={"swiper-double"}
				navigation={{
					nextEl: ".image-swiper-button-next",
					prevEl: ".image-swiper-button-prev",
					disabledclass: "swiper-button-disabled",
				}}
				modules={[Navigation, Mousewheel]}
				className="mySwiper">
				{
					result.map((item) => {
						return (
							<SwiperSlide key={item.id} className={`swiper-slide ${item.types}`}>
								<Slide
									width={item.types}
									image={item.img}
									title={item.title}
									date={item.date}
								/>
							</SwiperSlide >
						)
					})}
				<Arrows />
			</Swiper >
		</section >
	);
}

export default Slider;
