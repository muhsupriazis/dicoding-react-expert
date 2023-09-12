import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import Container from '../components/styled/Container';
import Badge from '../components/styled/Badge';
import { asyncActionReceiveDetailThread } from '../states/thread/action';
import User from '../components/User';
import Flex from '../components/styled/Flex';
import Action from '../components/Action';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { asyncActionAddNewComment } from '../states/comments/action';
import { generateTime } from '../../utils/utils';

export default function DetailThreadPage() {
  const { id } = useParams();
  const { thread = null, userAuth = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncActionReceiveDetailThread(id));
  }, [dispatch]);

  const handlerSubmitComment = (content) => {
    if (!userAuth) {
      alert('Masukan dulu Bang!');
      navigate('/auth/login');
    } else {
      dispatch(asyncActionAddNewComment({ id, content }));
    }
  };

  if (!thread) {
    return (
      <Container>
        <p>Thread on loading</p>
      </Container>
    );
  }

  return (
    <Container>
      <Flex direction="column" align="start" gap="1.2rem">
        <h1>{thread.title}</h1>
        <User user={thread.owner} />
        <div>
          <Badge>
            #
            {thread.category}
          </Badge>
        </div>
        <div className="content">
          <div>
            Dibuat
            {generateTime(thread.createdAt)}
            yang lalu.
          </div>
          <br />
          {parse(thread.body)}
        </div>
        <div>
          <Action
            like={thread.upVotesBy}
            unlike={thread.downVotesBy}
            comment={thread.comments.length}
          />
        </div>
      </Flex>
      <div>
        <h2>Provide answers</h2>
        <CommentForm handlerSubmitComment={handlerSubmitComment} />
      </div>
      <div className="comments">
        <h2>
          Comments(
          {thread.comments.length}
          )
        </h2>
        <div className="comment-list">
          <CommentList comments={thread.comments} />
        </div>
      </div>
    </Container>
  );
}
