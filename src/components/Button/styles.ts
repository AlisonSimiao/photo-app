import styled from 'styled-components';
import CustonButton from './CustonButtom';

type Prop = {
    full?: boolean;
}

export const Button = styled.button`
    font-size: 1.6vw;
    line-height: 100%;
    border-radius: 8px;
    text-transform: uppercase;
    width: ${(prop: Prop): string => {
        return prop.full 
        ?  "100%"
        :  "44vw" 
    }};
    height: 8vh;
    opacity: 0.8;
    
    &:hover{
        opacity: 1;
    }

    @media screen and ( max-width: 500px){
        height: 5vh;
        font-size: 4vw;
        opacity: 1;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
    
export const Empty = styled(CustonButton)`
    color: black;
    background: white;
    border: 2px solid #000000;
`;

type status = {
    status?: "error" | "success" | undefined
}

export const Fill = styled(CustonButton)`
    color: white;
    background-color: ${ (props: status) =>{
        switch (props.status) {
            case "error":
                return "red"
            case "success":
                return "green"
            default:
                return "#000000";
        }
    } };
    border: 0;
`;