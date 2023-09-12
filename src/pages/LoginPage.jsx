import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '../components/styled/Container';
import Input from '../components/styled/Input';
import Flex from '../components/styled/Flex';
import Button from '../components/styled/Button';
import useInput from '../hooks/useInput';
import { asyncActionSetAuth } from '../states/auth/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, handlerEmailChange] = useInput('');
  const [password, handlerPasswordChange] = useInput('');
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Lengkapi data!');
    } else {
      dispatch(asyncActionSetAuth({ email, password }));
      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handlerSubmit} className="form">
        <Flex direction="column" gap=".3rem" justify="center" align="space-beetwen">
          <Input placeholder="email" type="text" onChange={handlerEmailChange} />
          <Input placeholder="password" type="password" onChange={handlerPasswordChange} />
          <Button type="submit">Masuk</Button>
          <p className="content">
            Belum Punya?
            <Link to="/auth/register">Daftar</Link>
          </p>
        </Flex>
      </form>
    </Container>
  );
}
