/** @jsxImportSource theme-ui */
import { Box, Card, Flex, Heading, Image, NavLink, Text } from 'theme-ui';


const TopicsCart = ({ title, desc, link, cardImgUrl, avatarUrl, userName }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginY: 8,
      }}
      variant="cards.primary"
    >
      <Image
        src={cardImgUrl}
        alt="Babel"
        sx={{ width: 73, minWidth: 'auto !important' }}
      />

      <Box sx={{ maxWidth: 609 }}>
        <Heading as="h3" variant="text.heading">
          {title}
        </Heading>
        <Text as="p" variant="text.body">
          {desc}
        </Text>
        <Flex sx={{ alignItems: 'center' }}>
          <Image src={avatarUrl} variant="images.cardAvatar" alt="Avatar" />
          <Text as="span" sx={{ marginLeft: 2 }}>
            {userName}
          </Text>
        </Flex>
      </Box>

      <NavLink
        href="#"
        variant="text.lead"
        sx={{
          color: '#F39F47',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Text as="span" sx={{ display: 'block' }}>
          {link}
        </Text>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.5L5 5.5L1 1.5"
            stroke="#F39F47"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
    </Flex>
  );
};

export default TopicsCart;
