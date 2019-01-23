import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  h1 {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .cart-container {
    margin-left: auto;
    margin-right: auto;
  }

  .button.pay {
    width: 100%;
    background-color: #3e3e3e;
    color: #ffffff;
    font-weight: 400;
    font-size: 17px;
    height: 65px;
    margin-bottom: 100px;
  }

  .button.pay:hover {
    background-color: #000000;
  }
`;

export default StyleWrapper;
