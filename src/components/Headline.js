import styled from 'styled-components';
import '../App.css'

const Header = styled.h1`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 200%;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none; 
`

const Headline = () => {
    return (
      <div>
        <Header>
          To-Do App
        </Header>
      </div>
    );
  }

export default Headline;