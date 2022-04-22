import React from "react";
import styled from "styled-components";
import Header from "./Header";

const PageLayoutWrapper = styled.section``;

const Content = styled.main``;

const PageLayout = ({ children }) => {
  return (
    <PageLayoutWrapper>
      <Header />
      <Content>{children}</Content>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
