import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import SelectComponent from 'react-select'
import rsStyles from 'react-select/dist/react-select.css'
import Icon from '../Icon'


const StyledSelectComponent = styled(SelectComponent)`
${rsStyles}
 .Select-control {
  font-size: 1.125rem;
  height: 4rem;
  background: var(--dark-navy);
  border-color: var(--light-navy);

  display: flex;
}
.Select-input {
  width: 100%;
  display: block;
}
.Select--single > .Select-control .Select-value {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
}
&.is-open > .Select-control {
  background: var(--dark-navy);
  border-color: var(--gray);
}
.Select-input {
  height: auto;
  padding-left: 20px;
}
.Select-input > input {
  color: var(--white);
  box-sizing: content-box;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100% !important;
}
.Select-menu-outer {
  font-size: 1.125rem;
  background: var(--dark-navy);
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: var(--gray);
}
.Select-menu {
  max-height: 192px;
}
.Select-option,
.Select-option.is-selected {
  background: none;
  color: var(--white);
  line-height: 32px;
  padding: 16px 20px;
  border-top: 1px solid var(--light-navy);
}
.Select-option.is-focused {
  background: var(--turquoise);
  color: var(--white);
  border-top: 1px solid var(--turquoise);
}
.Select-clear {
  display: none;
}
.Select-arrow-zone {
  padding-left: 22px;
  padding-right: 22px;
  border-left: 1px solid var(--light-navy);
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
}
.Select-multi-value-wrapper {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
}
.Select-arrow-zone:before {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 24px 24px;
  border-color: transparent transparent var(--turquoise) transparent;
  position: absolute;
  right: 0;
  bottom: 0;
}
.Select-arrow-zone:hover:before {
  content: '';
}
&.is-open .Select-value-label {
  display: none;
}
&.is-open .Select-arrow-zone {
  background: var(--light-navy);
}
&.is-open .Select-arrow-zone:hover {
  background: var(--turquoise);
}
&.is-open .Select-arrow-zone:hover .Select-arrow {
  color: var(--white);
}
&.is-open .Select-arrow-zone:before {
  display: none;
}
.Select-arrow {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: none;
  height: auto;
  width: auto;
  font-size: 26px;
  color: var(--gray);
}
.Select-arrow:before {
  content: "\f107";
}
`

class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    icon: PropTypes.string,
		className: PropTypes.string
  }  

  render() {
    const { options, name, icon, className } = this.props
    return (
      <div style={{width: 380}}>
        <StyledSelectComponent
          name={name}
          value={options[0]['value']}
					options={options}
          icon={icon}
					className={className}
        />
      </div>
    ) 
  }
}

export default Select
