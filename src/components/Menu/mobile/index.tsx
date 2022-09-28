import React, { useState } from 'react'
import Item from '../Item';
import Post from '../Post';
import { IconChat, IconHome, IconSearch, IconUser, Wrapper } from './styles';

function Mobile() {
  const tabBarIcons = [
    {
      Icon: IconHome,
      link: "/feed"
    },
    {
      Icon: IconSearch,
      link: "/search"
    },
    {
      Icon: Post,
      link: "#"
    },
    {
      Icon: IconChat,
      link: "/chat"
    },
    {
      Icon: IconUser,
      link: "/account"
    }
  ]

  const [selected, setSelected] = useState(2);
  return (
    <Wrapper>

      {
        tabBarIcons.map((value, index)=>{
          return <Item 
                  {...value} 
                  key={index} 
                  active={ selected === index}
                  onClick={()=>{
                    setSelected( index )
                  }}
          />
        })
      }
      
    </Wrapper>
  )
}

export default Mobile