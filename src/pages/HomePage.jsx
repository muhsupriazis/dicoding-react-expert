import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/styled/Button';
import Container from '../components/styled/Container';
import ListThread from '../components/ListThreads';
import { asyncActionReceiveAllThreads } from '../states/threads/action';
import Heading from '../components/styled/Heding';

export default function HomePage() {
  const { threads = [], userAuth = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerAddClick = () => {
    if (!userAuth) {
      navigate('/auth/login');
    } else {
      navigate('/threads/add');
    }
  };

  useEffect(() => {
    dispatch(asyncActionReceiveAllThreads());
  }, [dispatch]);

  return (
    <Container>
      <Button type="button" onClick={handlerAddClick}>
        Ask Question
      </Button>
      <div>
        <Heading>All Questions</Heading>
        <ListThread threads={threads} />
      </div>
    </Container>
  );
}
