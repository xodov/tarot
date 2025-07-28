import { NavLink } from 'react-router-dom';
import './../Header/header.css'

function Header() {
    return (
        <div className="header">
				<h1>Таро</h1>
				<form action="null" className='searching'>
					<input required autoComplete='off' type="seacrh" name="search" id="search" placeholder='Поиск по сайту'/>
					<input type="submit" name="finder" id="finder" value='Найти'/>
				</form>
				<ul className='nav'>
						<li><NavLink to='/' className='active'>Главная</NavLink></li>
						<li><a href={null}>Блог</a></li>
						<li><a href={null}>Гадания</a></li>
						<li><a href={null}>Магия</a></li>
				</ul>
			</div>
    )
}

export default Header;