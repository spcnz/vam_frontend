import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height:
`;


export const Image = styled.img`
    src: "${props => props.src}";
    width: 100%;
    height: auto;
`;

export const SearchBar = styled.div`
    position:relative;
`

export const IconInside = styled.i`
    position:absolute;
    left:0;
    top: 20%;
    padding-left: 10px;
    color:#808080;
    font-size: 4.5vw;
`

export const SearchInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding-left:30px; 
`