import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/styled/Container';
import { asyncActionReceiveLeaderboards } from '../states/leaderboards/action';
import User from '../components/User';
import Badge from '../components/styled/Badge';
import Flex from '../components/styled/Flex';

export default function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionReceiveLeaderboards());
  }, [dispatch]);

  return (
    <Container>
      <Flex direction="column" gap="1rem" align="space-between">
        { leaderboards.map((user) => (
          <Flex key={user.user.id}>
            <User user={user.user} />
            <Badge>{user.score}</Badge>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}
