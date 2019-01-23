import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyleWrapper from './style';

class OptionSelector extends Component {
  state = {
    selectedOption: null
  };

  componentDidMount() {
    // default select first option
    if (this.props.options.length > 0) {
      this.setState({ selectedOption: 0 });

      // notify parent component of a change in the option
      const handler = this.props.onChange;
      if (handler) {
        handler(this.props.options[0]);
      }
    }
  }

  handleOptionChange(e) {
    this.setState({
      selectedOption: this.props.options.findIndex(option => {
        return option === e.currentTarget.value;
      })
    });

    // notify parent component of a change in the option
    const handler = this.props.onChange;
    if (handler) {
      handler(e.currentTarget.value);
    }
  }

  render() {
    return (
      <StyleWrapper>
        <p className="option-label">{this.props.optionLabel}:</p>
        <p className="info">{this.props.info}</p>

        {this.props.options.map((option, key) => {
          return (
            <span key={key}>
              <input
                type="radio"
                name="size"
                value={option}
                id={option}
                checked={key === this.state.selectedOption}
                onChange={this.handleOptionChange.bind(this)}
              />
              <label
                className={key === this.state.selectedOption ? 'selected' : ''}
                htmlFor={option}
              >
                {option}
              </label>
            </span>
          );
        })}
      </StyleWrapper>
    );
  }
}

OptionSelector.propTypes = {
  optionLabel: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export { OptionSelector };
