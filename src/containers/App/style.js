import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;

  a {
    color: #3e3e3e;
  }

  a:hover,
  a:active,
  a:focus {
    color: #000000;
  }

  .menu .active > a {
    background-color: transparent;
    color: #3e3e3e;
    font-weight: 700;
  }
`;

export default StyleWrapper;
