// import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const Bar = styled.label`
  display: none;
  @media (max-width: 768px) {
    display: block;
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 40px;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  span {
    position: absolute;
    width: 28px;
    height: 3.5px;
    background: #f1faee;
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  }

  span.top {
    top: 9px;
  }

  span.middle {
    top: 19px;
  }

  span.bottom {
    top: 29px;
  }

  ${Checkbox}:checked ~ span.top {
    transform: rotate(45deg);
    transform-origin: top left;
    width: 48px;
    left: 5px;
  }

  ${Checkbox}:checked ~ span.bottom {
    transform: rotate(-45deg);
    transform-origin: top left;
    width: 48px;
    bottom: -1px;
    box-shadow: 0 0 10px #495057;
  }

  ${Checkbox}:checked ~ span.middle {
    transform: translateX(-20px);
    opacity: 0;
  }
`;

const ToggleButton = ({ onClick }) => {
  return (
    <Bar>
      <Checkbox id="check" onClick={onClick} />
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </Bar>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
