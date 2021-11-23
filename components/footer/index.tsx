import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <a href="https://www.wnd.co.jp" target="_blank" rel="noopener noreferrer">
      Powered by W&amp;D
    </a>
  </StyledFooter>
);

export default Footer;
