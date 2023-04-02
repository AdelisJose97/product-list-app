import styled from 'styled-components';

export const StyledProductsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: ${(props) => `repeat(
    ${props.cardByColumns || 4},
    calc(100% / ${props.cardByColumns || 4}))`};
  margin-top: 50px;
`;
