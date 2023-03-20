import styled from 'styled-components';

export const StyledContainer = styled('div')<any>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  border-top: ${(p) => (p.border ? '1px solid #CDD1D4' : '')};
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;

export const Root = styled('div')`
  position: relative;
  z-index: 99;
`;

export const Hero = styled('div')`
  text-align: center;
  margin: 80px 0 80px;
`;
export const MintCount = styled('h3')`
  font-family: 'Inter', sans-verif;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 20px;
  margin-top: 25px;
  font-weight: 700;
`;
export const Heading = styled('h1')`
  font-family: 'Inter', sans-verif;
  letter-spacing: 2px;
  margin-bottom: -20px;
  color: #897ea5;
  font-size: 60px;
`;
export const MintButtonStyled = styled('button')`
  border: 0.1px solid #424242;
  background: #000000b0;
  border-radius: 10px;
  padding: 6px;
  font-size: 28px;
  min-width: 300px;
  box-shadow: 2px 3px 1px 0px #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #0000;
  }
`;
