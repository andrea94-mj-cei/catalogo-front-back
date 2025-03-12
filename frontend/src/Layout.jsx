import { Outlet } from 'react-router'
import Header from '@/components/Header'
import '@/css/Layout.css'

function Layout() {
 

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
