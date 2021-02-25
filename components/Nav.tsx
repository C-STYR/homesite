import Link from 'next/link'
//import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className="">
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/python'>Python</Link>
        </li>
        <li>
          <Link href='/javascript'>JavaScript</Link>
        </li>
      </ul>
    </nav>
  )
}

  export default Nav