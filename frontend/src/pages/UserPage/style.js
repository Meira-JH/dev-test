import styled from "styled-components";
import img from "../../img/miltiadis-fragkidis-2zGTh-S5moM-unsplash.jpg";
import Button from "@material-ui/core/Button";
import { device } from "../../components/Layout/mediaQueries";

export const UserPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const SecondTitle = styled.p`
  color: black;
  font-size: 45px;
  font-weight: 900;

  @media ${device.laptop} {
    font-size: 26px;
    text-align: center;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

export const FirstBlock = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Logo = styled.img`
  min-width: 210px;
  width: 83%;
  max-width: 280px;
  color: white;
`;

export const SecondBlock = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
      90deg,
      rgba(34, 27, 25, 0.9) 0%,
      rgba(34, 27, 25, 0) 100%
    ),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  box-shadow: 0 1px 5px;

  @media ${device.mobileL} {
    background-size: auto;
    background-position: center;
  }
`;

export const CardsWrapper = styled.div`
  width: auto;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const BankingCard = styled.div`
  width: auto;
  min-width: 350px;
  max-height: 95%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffff;
  box-shadow: 0 0 5px;
  border-radius: 10px;
  overflow-y: auto;


`;
