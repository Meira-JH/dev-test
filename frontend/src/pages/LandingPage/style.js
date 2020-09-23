import styled from "styled-components";
import img from "../../img/miltiadis-fragkidis-2zGTh-S5moM-unsplash.jpg";
import Button from "@material-ui/core/Button";
import { device } from "../../components/Layout/mediaQueries";

export const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media ${device.tablet} {
    flex-direction: column
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
  width: 40%;
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
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  width: 650px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const BankingCard = styled.div`
  width: 260px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffff;
  box-shadow: 0 0 5px;
  border-radius: 10px;

  @media ${device.laptop} {
    height: 370px;
    width: 90%;
  }
`;

export const CardHeader = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px lightgrey solid;
`;

export const IconCard = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.predatory === "predatory" ? "#f44336" : "#614ea0"};
  color: white;
  text-align: center;
  border-radius: 5px;
`;

export const CardTitle = styled.span`
  padding-top: 15px;
  color: #483f35;
  font-size: 26px;
  font-weight: 700;
`;

export const CardSubtitle = styled.span`
  padding-top: 10px;
  color: #483f35;
  font-size: 20px;
  font-weight: 500;
`;

export const CardBody = styled.div`
  height: 230px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardItems = styled.div`
  height: 40px;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
`;

export const IconItem = styled.img`
  height: 20px;
  padding-right: 10px;
`;

export const ItemText = styled.span`
  font-size: 20px;
  color: #483f35;
`;

export const CardButton = styled(Button)`
  && {
    background-color: #614ea0;
    width: 100%;
    color: #ffff;
    font-weight: 900;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
      background-color: rgb(72, 63, 53, 0.1);
      color: #614ea0;
      font-weight: 900;
    }
    @media ${device.mobileL} {
      font-size: 12px;
    }
  }
`;
