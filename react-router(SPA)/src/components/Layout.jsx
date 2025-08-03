import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout() {
  return (
    <>
     <Header/>
      <hr />
      <Outlet /> {/* Where child components render */}
      <Footer/>
    </>
  );
}

export default Layout;
