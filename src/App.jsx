import Slider from './components/slider/slider'
import './App.scss'

function App() {

	return (
		<div className='app'>
			<div className="app__container">
				<h1 className='app__title'>Полезные материалы</h1>
				<h2 className='app__subtitle'>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</h2>
				<Slider />
			</div>
		</div>
	)
}

export default App
