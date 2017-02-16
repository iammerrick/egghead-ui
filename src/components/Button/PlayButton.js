import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components'

const commonPlayBtnClasses = 'fa fa-play w3 h3 f3 absolute z-1 gray items-center justify-center br-pill pointer grow-large'
const hoverPlayBtnClasses = `${commonPlayBtnClasses} bg-white-70 hover-bg-white`
const playBtnClasses = `${commonPlayBtnClasses} bg-white`

const StyledPlayButton = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
  left: 50%;
  margin-left: -34px;
  display: flex;
  transition: 150ms;
  &:before {
    position: relative;
    left: 3px;
  }
  ${props => props.hover ? 'opacity: 0;' : ''},
`

const PlayButton = ({ hover=false, className }) => {
  return <StyledPlayButton hover={hover} className={`${hover ? `${hoverPlayBtnClasses} card-play-btn` : playBtnClasses} ${className}`}/>
}

PlayButton.propTypes = {
  hover: PropTypes.bool
}

export default PlayButton
