import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;

  border: 1px solid #3e3e3e;
  border-radius: 3px;
  padding: 20px 0px;

  .item-title {
    font-weight: 600;
    font-size: 19px;
    margin-bottom: 10px;
  }

  .item-description {
    margin-bottom: 0px;
  }

  .item-quantity {
    background-color: #3e3e3e;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    border-radius: 100%;
    position: relative;
    top: -14px;
    right: 6px;
    color: #f7f7f9;
    float: right;
  }
`;

export default StyleWrapper;
