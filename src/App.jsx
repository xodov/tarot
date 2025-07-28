import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import MainContent from './components/Main/MainContent.jsx'
import SecondMain from './components/Main/SecondMain.jsx'
import '.././src/App.css'
import MagicBlock from './components/Magic-block/MagicBlock.jsx'

function App() {

  	return (
    	<div className='app'>
			<Router>	
				<Header />
				<Routes>
					<Route path="/" element={
						<div>
							<MainContent />
							<SecondMain />
						</div>
					} />
					<Route path="/magic-block" element={<MagicBlock />} />
				</Routes>
			</Router>
    	</div>
  	)
}

export default App
