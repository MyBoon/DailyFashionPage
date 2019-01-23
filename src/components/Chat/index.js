import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Cell, Icon } from 'react-foundation';
import StyleWrapper from './style';

class Chat extends Component {
  state = {
    showWindow: false
  };

  componentWillReceiveProps(nextProps) {
    // if we can and request to show the chat window
    // for example if someone click on "Chat with Us" in the menu

    if (nextProps.open) {
      this.setState({ showWindow: nextProps.open });
    }
  }

  onClose() {
    this.setState({ showWindow: !this.state.showWindow });

    const handler = this.props.onClose;
    if (handler) {
      handler();
    }
  }

  render() {
    return (
      <StyleWrapper>
        {this.state.showWindow ? (
          <Grid className="display animated fadeIn faster">
            {/* This a fake chat just to show html/css */}
            {/* eventually it will be plugged to a real API */}

            <Cell small={12} large={12} className="chat-header">
              <span>Support Chat</span>
              <Icon name="fi-x" onClick={this.onClose.bind(this)} />
            </Cell>
            <Cell small={12} large={12} className="chat-content">
              <p className="customer">
                Hi, I am wondering if this pantsuit also exists in red?
              </p>
              <p className="support">
                Sorry but it only exits in black at this moment. They are 100%
                silk which feels very nice. I think you will like it!
              </p>
            </Cell>
            <Cell small={12} large={12} className="chat-answer">
              <input type="text" placeholder="Type someting..." />
            </Cell>
          </Grid>
        ) : (
          <div />
        )}
        <div
          className="floating-bubble"
          onClick={() => {
            this.setState({ showWindow: !this.state.showWindow });
          }}
        >
          <Icon name="fi-comment" />
        </div>
      </StyleWrapper>
    );
  }
}

Chat.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export { Chat };
