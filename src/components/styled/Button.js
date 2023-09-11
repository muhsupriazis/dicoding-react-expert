import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: .7rem .5rem;
  background-color: ${(props) => (props.primary.toString() === 'true' ? '#A6F6F1' : '#E8FFFF')};
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: #41AEA9;
`;

Button.defaultProps = {
  primary: 'false',
};

export default Button;
