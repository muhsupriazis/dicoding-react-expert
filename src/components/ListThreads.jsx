import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Card from './styled/Card';
import Badge from './styled/Badge';
import Action from './Action';
import Flex from './styled/Flex';
import User from './User';
import { generateTime } from '../../utils/utils';

export default function ListThread({ threads }) {
  if (threads.length <= 1) {
    return (
      <p>Threads On Loading</p>
    );
  }
  return (
    <>
      { threads.map((thread) => (
        <Card key={thread.id}>
          <h2><Link to={`/threads/${thread.id}`}>{thread.title}</Link></h2>
          <div className="content">{parse(thread.body)}</div>
          <Badge>
            #
            {thread.category}
          </Badge>
          <Flex>
            <Flex>
              <Action
                like={thread.upVotesBy}
                unlike={thread.downVotesBy}
                comment={thread.totalComments}
              />
              <span className="content">
                Dibuat
                {generateTime(thread.createdAt)}
                lalu
              </span>
            </Flex>
            <User user={thread.user} />
          </Flex>
        </Card>
      ))}
    </>
  );
}

ListThread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
