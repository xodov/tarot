import { NavLink } from 'react-router-dom';
import './../Header/header.css';
import './../Header/adaptiveHeader.css';

function Header() {
    return (
        <div className="header">
				<h1>Таро</h1>
				<form action="null" className='searching'>
					<input required autoComplete='off' type="seacrh" name="search" id="search" placeholder='Поиск по сайту'/>
					<input type="submit" name="finder" id="finder" value='Найти'/>
				</form>
				<ul className='nav'>
						<li className='navli'><NavLink to='/'>Главная</NavLink></li>
						<li className='navli'><NavLink to="/blog">Блог</NavLink></li>
						<li className='navli'><a href={null}>Гадания</a></li>
						<li className='navli'><a href={null}>Магия</a></li>
				</ul>
			</div>
    )
}

export default Header;