import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import MainContent from './components/Main/MainContent.jsx'
import SecondMain from './components/Main/SecondMain.jsx'
import '.././src/App.css'
import MagicBlock from './components/Magic-block/MagicBlock.jsx'
import Blog from './components/Blog/Blog.jsx'
import ScrollTop from './utils/ScrollTop.jsx'

function App() {

  	return (
    	<div className='app'>
			<Router>	
				<ScrollTop />
				<Header />
				<Routes>
					<Route path="/" element={
						<div>
							<MainContent />
							<SecondMain />
						</div>
					} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/magic-block" element={<MagicBlock />} />
				</Routes>
			</Router>
    	</div>
  	)
}

export default App
