import styled from "styled-components";
import { device } from "../Layout/mediaQueries";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: #483f35;
  position: relative;
  bottom: 0;
`;

export const LogoFooterWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

export const CreditFooterWrapper = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    align-items: flex-start;
  }
`;

export const SocialNetworksWrapper = styled.div`
  max-width: 90%;
  width: 300px;
  display: flex;
  justify-content: flex-start;

  @media ${device.tablet} {
    padding-left: 15px;
  }
`;

export const SocialNetworksIcon = styled.img`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
`;

export const FooterCreditsWrapper = styled.div`
  width: 300px;
  max-width: 90%;
  height: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  text-align: justify;
  color: #eef3fc;

`;

export const LogoFooter = styled.img`
  width: 50px;
  cursor: pointer;
`;
