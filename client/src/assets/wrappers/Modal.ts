import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #000;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }
`;

export default Wrapper;
