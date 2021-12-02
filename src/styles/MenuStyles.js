import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height:?
`;

export const Image = styled.img`
    src: "${props => props.src}";
`;

export const Modal = styled.div`
    display: ${props => props.active ? 'block': 'none'}; 
    position: fixed; 
    z-index: 1;
    padding-top: 10vh; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.3); 
`

const slideInAnimation = keyframes`
    {   from {bottom: -200px; opacity:0 }
        to {bottom: 0; opacity: 1}
    }
`
export const DetailsContainer = styled.div`
    border-radius: 15px;
    position: relative;
    background-color: white;
    padding: 0;
    border: 1px solid #888;
    width: 100%;
    height: 95vh;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.17),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: ${slideInAnimation};
    animation-duration: 0.5s
`