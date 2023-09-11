import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '../components/styled/Container';
import Input from '../components/styled/Input';
import Flex from '../components/styled/Flex';
import Button from '../components/styled/Button';
import useInput from '../hooks/useInput';
import { asyncRegisterAuth } from '../states/auth/action';

export default function RegisterPage() {
  const [name, handlerNameChange] = useInput('');
  const [email, handlerEmailChange] = useInput('');
  const [password, handlerPasswordChange] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncRegisterAuth({ name, email, password }));
    navigate('/auth/login');
  };

  return (
    <Container>
      <form onSubmit={handlerSubmit} className="form">
        <Flex direction="column" gap=".3rem" justify="center" align="space-beetwen">
          <Input placeholder="name" type="text" onChange={handlerNameChange} />
          <Input placeholder="email" type="text" onChange={handlerEmailChange} />
          <Input placeholder="password" type="password" onChange={handlerPasswordChange} />
          <Button type="submit">Daftar</Button>
          <p className="content">
            Sudah punya?
            <Link to="/auth/login">Masuk</Link>
          </p>
        </Flex>
      </form>
    </Container>
  );
}
