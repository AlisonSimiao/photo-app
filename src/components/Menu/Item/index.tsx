import Link from 'next/link';
import React from 'react'
import { Box } from './styles';

type ItemProps = {
  Icon: any;
  link: string;
  active: boolean;
  onClick: ()=> void;
}

function Item({ Icon, link, active, onClick }: ItemProps) {
  return (
    <Link href={link}>
    
    <Box active={active} onClick={onClick}>
      {
        Icon && <Icon />
      }

    </Box>
    </Link>
  )
}

export default Item