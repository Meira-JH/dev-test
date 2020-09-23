import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 27, 25, 0.4);
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonWrapper = styled.div`
  font-size: 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: #ff595c;
  height: 100%;
  width: 40%;

  @media ${device.laptopL} {
    font-size: 19px;
  }

  @media ${device.tablet} {
    font-size: 17px;
  }
`;

export const OpenBanking = styled.span`
  height: 64px;
  width: 100px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffff;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 6px transparent solid;

  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom-color: rgb(253, 153, 109, 0.9);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const Separation = styled.span`
  border-left: 1px white solid;
  height: 34px;
`;

export const Login = styled.span`
  height: 64px;
  width: 100px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffff;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 6px transparent solid;

  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom-color: rgb(253, 153, 109, 0.9);
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
