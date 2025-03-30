import React from 'react'
import { useTheme } from '../../../../Context/themeContext';
import { FaSun, FaMoon } from "react-icons/fa";
import Style from './ToggleTheme.module.scss';
import styled from 'styled-components';

export default function ToggleTheme() {
    const {theme,toggleTheme} = useTheme();
  return (
    <>
        <Toggle onClick={toggleTheme} theme={theme} className={Style.toggle}>
        <FaMoon/>
        <FaSun/>
        <Tbutton theme={theme}/>
        
    </Toggle>

            


    </>
  )
}

export const Toggle = styled.div(({theme})=>`
  display: flex;
  justify-content: space-between;
  border: ${theme==='light'?'3px solid black':'3px solid white'};
  border-radius: 1rem;
  position: relative;
  padding: 2px;
  cursor: pointer;

  & > * {
   
    color: ${theme==='light'?'black':'white'};
  }
`);

export const Tbutton = styled.div`
  border-radius: 100%;
  position: absolute;
  transition: all 0.8s ease;
  ${(props) => (props.theme==='light' ? "right: 2px;" : "left: 2px;")};
  ${(props) => (props.theme==='light' ? "background: black;" : "background: white;")}
`;