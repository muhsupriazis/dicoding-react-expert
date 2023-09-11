import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './styled/Button';
import Textarea from './styled/Textare';

export default function CommentForm({ handlerSubmitComment }) {
  const [content, handlerContentChange] = useInput('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerSubmitComment(content);
  };

  return (
    <form className="comment-form">
      <Textarea cols="30" rows="10" placeholder="Input Content" onChange={handlerContentChange} />
      <Button type="submit" onClick={handlerSubmit}>Comment</Button>
    </form>
  );
}

CommentForm.propTypes = {
  handlerSubmitComment: PropTypes.func.isRequired,
};
