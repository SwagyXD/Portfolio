import { motion } from "framer-motion";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Svg,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const SlidingTextContainer = styled(motion.div)`
  position: absolute;
  font-size: 20vh;
  top: 0vh;
  white-space: nowrap;
  color: #ffffff09;
  width: 50%;
  font-weight: bold;
  z-index: -99;
  @media (max-width: 768px) {
    font-size: 18vh;
    bottom: 200px;
  }
  @media (max-width: 640px) {
    font-size: 10vh;
    bottom: 280px;
  }
`;

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>{Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <HeroBg>
              <HeroBgAnimation />
            </HeroBg>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              id="developer"
            >
              <path
                fill="#343c4a"
                d="M206.628 3.499h98.744a31 31 0 0 1 31 31v67H175.628v-67a31 31 0 0 1 31-31Z"
              ></path>
              <path
                fill="#243047"
                d="M290.504 101.499h45.868v-67a30.856 30.856 0 0 0-3.552-14.408 88.172 88.172 0 0 1-13.513 24.846A87.812 87.812 0 0 1 305 59.5Z"
              ></path>
              <path
                fill="#8fd17a"
                d="M447.56 501.999v-154.68a60 60 0 0 0-38.01-55.824l-97.019-38.217a20 20 0 0 1-12.67-18.608v-18.907H212.14v18.907a20 20 0 0 1-12.67 18.608l-97.019 38.217a60 60 0 0 0-38.01 55.825v154.679a10 10 0 0 0 10 10h363.12a10 10 0 0 0 10-10Z"
              ></path>
              <path
                fill="#cc938b"
                d="M194.28 255.323a67.498 67.498 0 0 0 123.441 0l-5.19-2.045a20 20 0 0 1-12.67-18.608v-18.907H212.14v18.907a20 20 0 0 1-12.67 18.608l-5.19 2.045Z"
              ></path>
              <path
                fill="#a56362"
                d="M303.044 245.472a19.962 19.962 0 0 1-3.183-10.802v-18.907H212.14v7.74a100.872 100.872 0 0 0 23.568 21.193 63.122 63.122 0 0 0 67.337.776Z"
              ></path>
              <path
                fill="#cc938b"
                d="M327.573 180.203a100.878 100.878 0 0 1-37.28 43.492 63.128 63.128 0 0 1-68.586 0 100.88 100.88 0 0 1-37.28-43.492 100.879 100.879 0 0 1-8.8-41.205v-37.499a211.645 211.645 0 0 0 78.514-13.9A210.466 210.466 0 0 0 305 59.5a68.355 68.355 0 0 0 31.372 42v37.499a100.88 100.88 0 0 1-8.799 41.205zM135.12 511.999H74.44a10 10 0 0 1-10-10v-48.015h70.68z"
              ></path>
              <path
                fill="#a56362"
                d="M256.001 204.681a36.94 36.94 0 0 1-15.72-3.536 3.5 3.5 0 0 1 2.998-6.327A29.89 29.89 0 0 0 256 197.681h.09a29.907 29.907 0 0 0 12.63-2.863 3.5 3.5 0 0 1 2.997 6.327 36.955 36.955 0 0 1-15.606 3.536zm12.703-45.194v6.15a12.701 12.701 0 0 1-12.7 12.702h-.007a12.701 12.701 0 0 1-12.701-12.701v-6.151a3 3 0 0 1 3-3h19.408a3 3 0 0 1 3 3zM175.628 138.479a23.39 23.39 0 0 1-23.39-23.39 17.66 17.66 0 0 1 17.66-17.66h5.73v41.05Z"
              ></path>
              <path
                fill="#596381"
                d="M336.372 101.499a69.351 69.351 0 0 1-3.086-1.952l-30.49 26.492a3.5 3.5 0 1 0 4.6 5.277l28.976-25.174zm-160.744 0v4.368l27.208 20.319a3.5 3.5 0 0 0 4.189-5.609l-25.552-19.08c-2.045.027-4 .027-5.845.002zm101.254 33.321h-41.764a3.5 3.5 0 0 1 0-7h41.764a3.5 3.5 0 0 1 0 7z"
              ></path>
              <path
                fill="#709653"
                d="M135.12 511.999a3.5 3.5 0 0 1-3.5-3.5v-88.224a3.5 3.5 0 0 1 7 0V508.5a3.5 3.5 0 0 1-3.5 3.5Z"
              ></path>
              <path
                fill="#a56362"
                d="M336.372 138.479v-41.05h5.73a17.66 17.66 0 0 1 17.66 17.66 23.39 23.39 0 0 1-23.39 23.39Z"
              ></path>
              <rect
                width="191.322"
                height="191.322"
                x="317.178"
                y="320.677"
                fill="#f2f2f2"
                rx="15"
              ></rect>
              <path
                fill="#343c4a"
                d="M332.178 320.677H493.5a15 15 0 0 1 15 15v20H317.178v-20a15 15 0 0 1 15-15Z"
              ></path>
              <circle cx="337.517" cy="338.553" r="3.5" fill="#f96263"></circle>
              <circle cx="351.517" cy="338.553" r="3.5" fill="#ffbc5b"></circle>
              <circle cx="365.517" cy="338.553" r="3.5" fill="#8fd17a"></circle>
              <path
                fill="#343c4a"
                d="M378.686 460.036a3.488 3.488 0 0 1-2.124-.719l-25.54-19.52a7.5 7.5 0 0 1 .001-11.918l25.54-19.52a3.5 3.5 0 0 1 4.25 5.562l-25.54 19.52a.499.499 0 0 0 0 .793l25.54 19.52a3.5 3.5 0 0 1-2.127 6.282zm68.306 0a3.5 3.5 0 0 1-2.128-6.281l25.54-19.52a.499.499 0 0 0 0-.794l-25.54-19.52a3.5 3.5 0 0 1 4.251-5.563l25.54 19.52a7.5 7.5 0 0 1 0 11.919l-25.54 19.52a3.488 3.488 0 0 1-2.123.72zm-48.54 5.21a3.501 3.501 0 0 1-3.107-5.105l28.766-55.813a3.5 3.5 0 1 1 6.222 3.207l-28.767 55.813a3.5 3.5 0 0 1-3.113 1.897z"
              ></path>
              <rect
                width="42"
                height="27"
                x="203.5"
                y="117.821"
                fill="#cce3fd"
                rx="7"
              ></rect>
              <rect
                width="42"
                height="27"
                x="266.5"
                y="117.821"
                fill="#cce3fd"
                rx="7"
              ></rect>
            </Svg>
          </HeroRightContainer>
        </HeroInnerContainer>
        <SlidingTextContainer
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          &nbsp; I DEV &nbsp; I CODE &nbsp; I FIX
        </SlidingTextContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
