import styled from "styled-components";
import { Icon } from "../mobile/styles";

type active = {
    active: boolean;
}

export const Box = styled.div`
    background: ${({active} : active)=>{
       return active? "linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)": "white";
    }};

    border-radius: 50px;
    padding: 1% 4%;
    
    ${Icon}{
        color: ${({active} : active)=>{
       return active? "white": "black";
    }};

    transform: ${({active} : active)=>{
       return active? "translate(0, -40%);": "";
    }};
         
    }
    
`