import { not } from '@fullstacksjs/toolbox';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Flex, Image, Text } from 'theme-ui';

import LogoutIcon from './Icons/LogoutIcon.svg';

interface UserProps {
  email: string;
  image: string;
}

export const User: React.FC<UserProps> = ({ email, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        p: 2,
        gap: 2,
        backgroundColor: 'tints.0',
        borderRadius: '29px',
        alignSelf: 'flex-end',
        maxHeight: !isOpen ? '53px' : '106px',
        transition: 'max-height 300ms',
        overflow: 'hidden',
      }}
    >
      <Flex
        onClick={() => setIsOpen(not)}
        sx={{
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <Image
          src={image}
          alt="/"
          sx={{ width: '33px', height: '33px', borderRadius: 'circle' }}
        />
        <Text sx={{ textAlign: 'center' }}>{email}</Text>
      </Flex>
      <Flex
        sx={{ alignItems: 'center', gap: 2, cursor: 'pointer' }}
        onClick={() => {
          signOut();
        }}
      >
        <LogoutIcon sx={{ size: '33px' }} />
        <Text>Logout</Text>
      </Flex>
    </Flex>
  );
};
