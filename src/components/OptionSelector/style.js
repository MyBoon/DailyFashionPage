import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;

  .option-label {
    margin-bottom: 0px;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  span label {
    width: 40px;
    height: 40px;
    border: 2px solid #ececec;
    border-radius: 100%;
    color: #3e3e3e;
    font-size: 16px;
    text-align: center;
    line-height: 36px;
    margin-left: 0px;
    margin-right: 10px;
  }

  span label.selected {
    border: 2px solid #3e3e3e;
    color: #3e3e3e;
  }

  .info {
    font-weight: 100;
    font-size: 12px;
  }
`;

export default StyleWrapper;
