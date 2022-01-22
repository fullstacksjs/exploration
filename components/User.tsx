import { signOut } from 'next-auth/react';
import { Flex, Text } from 'theme-ui';

interface UserProps {
  email: string;
}

export const User: React.FC<UserProps> = ({ email }) => {
  return (
    <Flex sx={{ gap: 2, justifyContent: 'center' }}>
      <Text sx={{ textAlign: 'center' }}>{email}</Text>
      <Text
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Text>
    </Flex>
  );
};
