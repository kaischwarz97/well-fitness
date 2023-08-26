import React from "react";
import { styled } from "styled-components";
import { rem } from "polished";

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  max-width: ${rem(1410)};
  margin: 0 auto;
  padding: 0 ${rem(15)};
  box-sizing: content-box;
`;

export default Container;
