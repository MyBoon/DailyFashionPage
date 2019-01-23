import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  /* .description {
    padding: 30px
  } */

  .description {
    /* padding: 60px 60px 60px 0px; */
    margin-top: 60px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .button.add-to-cart {
    width: 100%;
    background-color: #3e3e3e;
    color: #ffffff;
    font-weight: 400;
    font-size: 17px;
    height: 65px;
    margin-top: 45px;
  }

  .button.add-to-cart:hover {
    background-color: #000000;
  }
`;

export default StyleWrapper;
