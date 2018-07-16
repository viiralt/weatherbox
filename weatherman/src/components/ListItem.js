import React from 'react';
import styled from 'styled-components';

const ListItem = props => (
  <Wrapper>
    <Header>this is header</Header>
    <MainText>some props</MainText>
    <MainText>other props</MainText>
  </Wrapper>
);

const Wrapper = styled.div``;
const Header = styled.h3``;
const MainText = styled.p``;

export default ListItem;
