import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to='/survey'>Querstionnaire</Link>
      <Link to='/Freelances'>Freelances</Link>
    </nav>
  )
}

export default Header