import React from 'react';
import { Reply, ThumbsDown, ThumbsUp } from 'lucide-react';
import PropTypes from 'prop-types';
import Flex from './styled/Flex';
import Icon from './styled/Icon';

export default function Action({ like, unlike, comment }) {
  return (
    <Flex justify="start">
      <Icon>
        <ThumbsUp size="18" />
        {like.length}
      </Icon>
      <Icon>
        <ThumbsDown size="18" />
        {unlike.length}
      </Icon>
      <Icon>
        <Reply size="18" />
        {comment}
      </Icon>
    </Flex>
  );
}

Action.propTypes = {
  like: PropTypes.arrayOf(PropTypes.string).isRequired,
  unlike: PropTypes.arrayOf(PropTypes.string).isRequired,
  comment: PropTypes.number.isRequired,
};
