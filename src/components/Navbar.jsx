import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './styled/Navigation';
import Flex from './styled/Flex';
import Button from './styled/Button';
import User from './User';
import { asyncSetIsPreload } from '../states/preload/action';
import { asyncActionUnsetAuth } from '../states/auth/action';

export default function Navbar() {
  const navigate = useNavigate();
  const { userAuth = null } = useSelector((states) => states);
  const dispact = useDispatch();

  useEffect(() => {
    dispact(asyncSetIsPreload());
  }, [dispact]);

  const handlerLogout = () => {
    dispact(asyncActionUnsetAuth());
    navigate('/auth/login');
  };

  return (
    <Navigation>
      <Flex>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <a href="https://forum-api.dicoding.dev/v1/#/">Documentation</a>
      </Flex>
      <Flex>
        { !userAuth ? (
          <>
            <Button type="button" onClick={() => navigate('/auth/login')}>Sign In</Button>
            <Button primary="true" onClick={() => navigate('/auth/register')}>Sign Up</Button>
          </>
        ) : (
          <Flex>
            <User user={userAuth} />
            <Button type="button" onClick={handlerLogout}>Logout</Button>
          </Flex>
        )}
      </Flex>
    </Navigation>
  );
}

// Navbar.propTypes = {
//   userAuth: PropTypes.shape({}),
// };
