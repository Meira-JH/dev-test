import styled from "styled-components";
import img from "../../img/miltiadis-fragkidis-2zGTh-S5moM-unsplash.jpg";
import { Button, TextField } from "@material-ui/core";
import { device } from "../../components/Layout/mediaQueries";

export const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  flex-grow: 1;
`;


export const FormWrapper = styled.form`
  width: 320px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  border-radius: 8px;
  padding: 20px 20px ;
  margin-bottom: 30px;

  @media ${device.laptopL} {
    min-width: 300px;
  }
  @media ${device.tablet} {
    width: 300px;
  }
`;

export const LoginLogo = styled.img`
  max-height: 5vw;
  min-height: 60px;
`;

export const Warning = styled.span`
  font-size: 14px;
  color: red;
`

export const LoginButton = styled(Button)`
  && {
    background-color: #614ea0;
    color: #ffff;
    &:hover {
      background-color: #ffff;
      color: #614ea0;
      font-weight: 900;
    }
  }
`;

export const LoginTextField = styled(TextField)`
  && {
    width: 15vw;
    text-align: center;
    min-width: 280px;
    
    @media ${device.tablet} {
      width: 200px;
      font-size: 5px;
    }
  }
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const SecondTitle = styled.p`
  padding-top: 2vw;
  color: black;
  font-size: 35px;
  font-weight: 900;
  text-align: center;

  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.mobileL} {
    padding-top: 10vw;
    font-size: 22px;
  }
`;
