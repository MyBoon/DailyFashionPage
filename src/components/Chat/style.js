import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 320px;
  position: fixed;
  bottom: 10px;
  right: 10px;

  .grid-x {
    background-color: #ffffff;
    border: 1px solid #3e3e3e;
    border-radius: 3px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px 1px #00000014;

    .chat-header {
      background-color: #3e3e3e;
      color: #ffffff;
      padding: 5px 10px 8px 10px;

      .fi-x {
        float: right;
        font-size: 14px;
        cursor: pointer;
      }
    }

    .chat-content {
      padding: 10px;

      .customer,
      .support {
        width: 70%;
        padding: 10px;
        border-radius: 3px;
        font-size: 14px;
      }

      .customer {
        float: right;
        background-color: #eeeeee;
      }

      .support {
        float: left;
        background-color: #3e3e3e;
        color: #ffffff;
      }
    }

    input {
      margin-bottom: 0px;
      border: 0;
      border-top: 1px solid #eee;
      box-shadow: none;
      border-radius: 3px;
      border-radius: 0px 0px 3px 3px;
      padding-bottom: 12px;
    }
  }

  .floating-bubble {
    background-color: #3e3e3e;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 100%;
    cursor: pointer;
    float: right;

    .fi-comment {
      font-size: 30px;
      color: #f7f7f9;
      line-height: 63px;
    }
  }

  .floating-bubble:hover {
    background-color: #000000;
  }
`;

export default StyleWrapper;
