import styled, { keyframes } from "styled-components";
// import _default from "../../themes/default";


export const HeroContainer = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 48.4% 47.5%,
    rgba(76, 21, 51, 1) 0%,
    rgba(34, 10, 37, 1) 90%
  );
  height: 100vh;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (min-width: 1025px) and (max-width: 1920px) {
    top: 50%;
    left: 65%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  // @media (max-width: 960px) {
  //   flex-direction: column;
  // }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 1024px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translatex(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 1024px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`;

export const Svg = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  background: linear-gradient(-90deg, #a545ff, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 68px;
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
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 14px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
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
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
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

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
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
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 75%;
    max-width: 150px;
    text-align: center;
    padding: 5px 5px;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
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
  @media (max-width: 1024px) {
    padding: 4px 4px;
    font-size: 15px;
    position: relative;
    bottom: 30px;
} 
    @media (max-width: 640px) {
        padding: 4px 4px;
        font-size: 15px;
    } 

`;
