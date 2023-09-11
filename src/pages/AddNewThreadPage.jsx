import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '../components/styled/Container';
import Input from '../components/styled/Input';
import Textarea from '../components/styled/Textare';
import Button from '../components/styled/Button';
import useInput from '../hooks/useInput';
import { asyncActionAddNewThread } from '../states/threads/action';

export default function AddNewThreadPage() {
  const [title, handlerChangeTitle] = useInput('');
  const [category, handlerChangeCategory] = useInput('');
  const [body, handlerChangeBody] = useInput('');
  const { userAuth = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncActionAddNewThread({ title, category, body }));
    navigate('/');
  };

  if (!userAuth) {
    navigate('/auth/login');
  }

  return (
    <Container>
      <form className="form-add">
        <Input placeholder="Title" onChange={handlerChangeTitle} />
        <Input placeholder="category" onChange={handlerChangeCategory} />
        <Textarea placeholder="Body" onChange={handlerChangeBody} />
        <Button type="submit" onClick={handlerSubmit}>Tambahkan</Button>
      </form>
    </Container>
  );
}
