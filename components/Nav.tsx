import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/javascript'>JavaScript</Link>
        </li>
        <li>
          <Link href='/python'>Python</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

  export default Nav