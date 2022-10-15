import Link from 'next/link';
import React from 'react'
import { Box } from './styles';

type ItemProps = {
  Icon: any;
  link: string;
  active: boolean;
  onClick: ()=> void;
  props?: {
    close: ()=> void;
    open: ()=> void;
  }
}

function Item({ Icon, link, props, active, onClick }: ItemProps) {
  return (
    <Link href={link}>
    
    <Box active={active} onClick={onClick}>
      {
        Icon && <Icon close={ props && props.close} open={ props && props.open} />
      }

    </Box>
    </Link>
  )
}

export default Item