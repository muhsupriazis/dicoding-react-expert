import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SiteRoute from './routes/SiteRouter';
import Navbar from './components/Navbar';
import Container from './components/styled/Container';
import { asyncSetIsPreload } from './states/preload/action';
import Loading from './components/Loading';

export default function App() {
  const location = useLocation();
  const { userAuth = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetIsPreload());
  }, [dispatch]);

  return (
    <>
      <Loading />
      { !(location.pathname.includes('auth')) && (
        <header>
          <Container>
            <Navbar auth={userAuth && userAuth} />
          </Container>
        </header>
      )}
      <main>
        <SiteRoute />
      </main>
    </>
  );
}
