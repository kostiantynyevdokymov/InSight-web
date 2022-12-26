import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${p => p.theme.mp(5)};
  padding-right: ${p => p.theme.mp(5)};
  padding-top: ${p => p.theme.mp(4)};
  padding-bottom: ${p => p.theme.mp(5)};
`;

export const HeaderBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 450px;
`;
export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  padding-bottom: ${p => p.theme.mp(3)};
`;
export const Calories = styled.p`
  font-size: ${p => p.theme.fontSizes.xxl};
  color: ${p => p.theme.colors.text.calorieText};
  padding-bottom: ${p => p.theme.mp(4)};
`;

export const Kcal = styled.span`
  font-size: 16px;
  color: ${p => p.theme.colors.text.calorieText};
`;

export const List = styled.ul`
  list-style: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.mp(2)};
  padding-bottom: ${p => p.theme.mp(4)};
  border-top: ${p => p.theme.border.header};
  width: 280px;

  @media screen and (max-width: 767px) {
    &: not(: last-child) {
      padding-bottom: ${p => p.theme.mp(4)};
    }
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Text = styled.h3`
  padding-bottom: ${p => p.theme.mp(3)};
`;

export const Button = styled.button`
  padding: 13px 0;
  display: block;
  width: 210px;
  border: 2px solid #fc842d;
  border-radius: 30px;
  background-color: #fc842d;
  color: #ffffff;
  font-weight: 700;
  font-family: Verdana;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;
  outline: none;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #fc842d;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;
