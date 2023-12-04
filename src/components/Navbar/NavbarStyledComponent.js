import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { FaLinkedin, FaRegEnvelope, FaGithub } from "react-icons/fa6";
// import _default from '../../themes/default';

export const Nav = styled.div`
  background: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const Logo = styled.img`
  height: 20px;
  width: 20px;
  }
`;

export const NavLogo = styled(LinkR)`
  width: 100%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
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
  @media (max-width: 640px) {
    padding: 0 0px;
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
  }
`;
export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 15px;
  color: skyblue;
`;
export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  position: relative;
  right: 35px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  // transition: all 0.2s ease-in-out;
  trasition: .3s;
  opacity: 0;
  animation: slideTop .5s ease forwards;
  @keyframes slideTop {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const Linkedin = styled(FaLinkedin)`
  cursor: pointer;
  color: #197cdf;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translatex(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Mail = styled(FaRegEnvelope)`
  cursor: pointer;
  color: #d0d5d9d8;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translatex(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Github = styled(FaGithub)`
  cursor: pointer;
  color: #d0d5d9d8;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translatex(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  gap: 32px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: transparent blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  opacity: 0;
  animation: slideTop .5s ease forwards;
  @keyframes slideTop {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
`;

const Bar = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 40px;

  span {
    position: absolute;
    width: 45px;
    height: 7px;
    background: #f1faee;
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  }

  span.top {
    top: 0;
  }

  span.middle {
    top: 17px;
  }

  span.bottom {
    bottom: 0;
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

export { Bar, Checkbox };
