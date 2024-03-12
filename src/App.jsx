import { lazy, Suspense } from 'react';
const Slider = lazy(() => import('./components/slider/slider'));
import Loading from './components/Loading/Loading';
import './App.scss'
const renderLoader = () => <Loading />

function App() {

	return (
		<div className='app'>
			<h1 className='app__title'>Полезные материалы</h1>
			<h2 className='app__subtitle'>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</h2>
			<Suspense fallback={renderLoader()}>
				<Slider />
			</Suspense>
		</div>
	)
}

export default App
