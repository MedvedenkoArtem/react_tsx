import {useNavigate} from 'react-router-dom'

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }
  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>

        <NavigationContainer>
          <NavigationContainer>
  <HeaderLink to="/" style={getActiveStyles}>Home</HeaderLink>
  <HeaderLink to="/About" style={getActiveStyles}>About</HeaderLink>
  <HeaderLink to="/ContactUs" style={getActiveStyles}>ContactUs</HeaderLink>
  <HeaderLink to="/LogIn" style={getActiveStyles}>LogIn</HeaderLink>
  <HeaderLink to="/LifeWaves" style={getActiveStyles}>LifeWaves</HeaderLink>
  <HeaderLink to="/RandomCrafts" style={getActiveStyles}>RandomCrafts</HeaderLink>
  <HeaderLink to="/YellowCow" style={getActiveStyles}>YellowCow</HeaderLink>
    </NavigationContainer>
          
        </NavigationContainer>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>

        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/About">About</FooterLink>
          <FooterLink to="/ContactUs">ContactUs</FooterLink>
          <FooterLink to="/LogIn">LogIn</FooterLink>
          <FooterLink to="/LifeWaves">LifeWaves</FooterLink>
          <FooterLink to="/RandonCrafts">RandonCrafts</FooterLink>
          <FooterLink to="/YellowCow"
          >YellowCow</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;