import React from "react";
import { styled, css } from "styled-components";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { rem } from "polished";

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInformation>
          <HeaderInformationLeft>
            <HeaderLogoWrap href={"/"}>
              <Image src={"logo.svg"} fill alt={"logo"} priority={true} />
            </HeaderLogoWrap>
            <HeaderChoiceCity>
              <HeaderChoiceCityName>Москва</HeaderChoiceCityName>
              <HeaderChoiceCityArrow></HeaderChoiceCityArrow>
            </HeaderChoiceCity>
          </HeaderInformationLeft>
          <div></div>
        </HeaderInformation>
      </Container>
    </HeaderWrap>
  );
};

const fontMenuSecondary = css`
  font-size: ${rem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

const HeaderWrap = styled.header`
  background: ${(props) => props.theme.colors.primary};
  min-height: ${rem(205)};
`;

const HeaderInformation = styled.div`
  padding: ${rem(22)} 0;
`;

const HeaderInformationLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(50)};
`;

const HeaderLogoWrap = styled(Link)`
  position: relative;
  display: block;
  width: ${rem(280)};
  height: ${rem(29)};
`;

const HeaderChoiceCity = styled.p`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
`;

const HeaderChoiceCityName = styled.span`
  ${fontMenuSecondary}
  color: ${(props) => props.theme.colors.coolGrey};
`;

const HeaderChoiceCityArrow = styled.i`
  flex-shrink: 0;
  display: block;
  width: ${rem(6)};
  height: ${rem(6)};
  background: url("select-arrow.svg") no-repeat 0 0;
`;

export default Header;
