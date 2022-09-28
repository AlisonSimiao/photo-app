import styled, { css } from "styled-components";
import { AiOutlinePlus, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiOutlineHome, HiOutlineChat as chat } from "react-icons/hi";

export const Wrapper = styled.div`
    
    box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(13.5914px);

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    transition: 3s linear;
`

export const Icon = css`
    font-size: clamp(1.5rem, 4vw , 2rem);
    transition: .3s linear;
`

export const IconHome = styled(HiOutlineHome)`
    ${Icon};
`

export const IconPost = styled(AiOutlinePlus)`
    ${Icon}
`

export const IconSearch = styled(AiOutlineSearch  )`
    ${Icon}
`

export const IconUser = styled(AiOutlineUser)`
    ${Icon}
`
export const IconChat = styled(chat)`
    ${Icon}
`