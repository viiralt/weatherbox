import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h3`
  margin: 1rem 0;
  font-weight: 700;
  font-size: 3.2rem;
  font-family: Chivo;
`;

export const HeadingSmall = styled.h3`
  font-weight: 700;
  font-size: 1.6em;
  font-family: Chivo;
`;

export const Text = styled.p`
  font-size: 1em;
  font-weight: 300;
  font-family: Overpass;
`;

export const Image = styled.img``;

export const ContentContainer = styled.div`
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

export const SearchedCityContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  height: 20rem;
  flex-direction: column;
  border-radius: 0.6rem;
  background-color: #ffffff;
  transition: box-shadow 0.3s;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;
