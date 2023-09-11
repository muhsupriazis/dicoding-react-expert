import React from 'react';
import PropTypes from 'prop-types';
import Flex from './styled/Flex';
import Image from './styled/Image';

export default function User({ user }) {
  return (
    <Flex justify="start">
      <Image src={user.avatar} alt={user.id} />
      <span className="user-name">{user.name}</span>
    </Flex>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
