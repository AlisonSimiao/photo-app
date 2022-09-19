import styled from 'styled-components';

export const button = styled.button`
    
    font-size: 2.1vw;
    line-height: 100%;
    border-radius: 6px;
    text-transform: uppercase;
    width: 44vw;
    height: 8vh;
    opacity: 0.8;
    border: none;

    &:hover{
        opacity: 1;
    }

    @media screen and ( max-width: 500px){
        height: 5vh;
        font-size: 4vw;
    }
`;

export const Fill = styled(button)`
    color: white;
    background-color: black;
`;

export const Empty = styled(button)`
    color: black;
    background: white;
    border: 2px solid #000000;
`;