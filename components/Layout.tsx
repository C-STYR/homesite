import Nav from './Nav'
import Head from 'next/head'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children, home}: 
  {
    children: React.ReactNode
    home?: boolean
  }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.layout}>
        <main className="">
            {children}
        </main>
      </div>
    </>
  )
}

export default Layout