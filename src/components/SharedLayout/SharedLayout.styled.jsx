import styled from 'styled-components';
import SideBarImg_1280 from '../../images/SideBarImg_1280.png';
import SideBarImg_768 from '../../images/SideBarImg_768.png';

export const HeaderBarIsLogedIn = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    background-image: url(${SideBarImg_768}),
      linear-gradient(white 65%, ${p => p.theme.colors.background.greyBackground} 59% 100%);
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    background-image: url(${SideBarImg_1280}),
      linear-gradient(to right, white 59%, ${p => p.theme.colors.background.greyBackground} 59% 100%);
    background-repeat: no-repeat;
  }
`;
