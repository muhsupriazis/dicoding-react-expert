import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import User from './User';
import Action from './Action';

export default function CommentList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <User user={comment.owner} />
          <div className="content">
            {parse(comment.content)}
          </div>
          <div>
            <Action like={comment.upVotesBy} unlike={comment.downVotesBy} comment={0} />
          </div>
        </div>
      ))}
    </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
