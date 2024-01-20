import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import Slide from '../slide/slide';
import Arrows from "../Arrows/Arrows";

import './Slider.scss';
import '../Slide/Slide.scss';

import data from '../../constants/constants'

function Slider() {

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
					data.map((item) => {
						const stylesWidth = ['styleOne', 'styleTwo', 'styleThree', 'styleFour'].sort(() => Math.random() - 0.5);
						let width = '';
						let length = item.title;
						stylesWidth.map((style) => {
							if (length.length < 35) {
								width = style
							} else {
								width = 'swiper-double'
							}
						})

						return (
							<SwiperSlide key={item.id} className={`swiper-slide ${width}`}>
								<Slide
									width={width}
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
