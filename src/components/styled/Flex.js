import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: ${(props) => (props.justify)};
  flex-direction: ${(props) => (props.direction)};
  align-items: ${(props) => (props.align)};
  gap: ${(props) => (props.gap)}
`;

Flex.defaultProps = {
  justify: 'space-between',
  direction: 'row',
  align: 'center',
};

export default Flex;
