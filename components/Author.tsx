import { Flex, Image, Text } from 'theme-ui';

interface AuthorProps {
  srcSet: string;
  name: string;
}

export const Author: React.FC<AuthorProps> = ({ srcSet, name }) => (
  <Flex sx={{ alignItems: 'center', flexDirection: ['column', 'row'] }}>
    <Image
      sx={{ width: '33px' }}
      srcSet={srcSet}
      variant="images.avatar"
      alt={`${name} avatar`}
    />
    <Text
      as="span"
      variant="small"
      sx={{
        marginLeft: [0, 2],
        marginTop: ['5px', 0],
        textAlign: ['center', 'left'],
      }}
    >
      {name}
    </Text>
  </Flex>
);
