import { Composition } from '@atomic-layout/emotion';
import { Button, Card, Heading, Image, Text, useThemeUI } from 'theme-ui';

import { ReactComponent as ChevronDownIcon } from '../assets/ChevronDownIcon.svg';
import { ReactComponent as ChevronUpIcon } from '../assets/ChevronUpIcon.svg';
import { Topic } from '../mocks/topics';

const areas = `
  icon title button
  icon desc button
  icon author button
`;

const TopicsCart: React.FC<Topic> = ({
  title,
  desc,
  icon: Icon,
  username,
  authorAvatar,
  votes,
  isVoted,
}) => {
  const { theme } = useThemeUI();
  return (
    <Card variant="cards.primary" sx={{ width: '884px' }}>
      <Composition
        areas={areas}
        templateCols="95px 1fr 70px"
        gapRow={theme.space[2]}
        gapCol={theme.space[6]}
      >
        {(Areas) => (
          <>
            <Areas.Icon flex alignItems="center">
              <Icon sx={{ width: 95 }} />
            </Areas.Icon>
            <Areas.Title>
              <Heading as="h3" variant="heading4">
                {title}
              </Heading>
            </Areas.Title>
            <Areas.Desc>
              <Text as="p" color="text.1" variant="text.body">
                {desc}
              </Text>
            </Areas.Desc>
            <Areas.Author flex alignItems="center">
              <Image
                sx={{ width: '33px' }}
                src={authorAvatar}
                variant="images.avatar"
                alt="Avatar"
              />
              <Text
                as="span"
                color="text.0"
                variant="small"
                sx={{ marginLeft: 2 }}
              >
                {username}
              </Text>
            </Areas.Author>

            <Areas.Button flex alignItems="center">
              <Button
                variant="text"
                sx={{
                  p: 0,
                  display: 'flex',
                  color: isVoted ? 'accent' : 'text',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textTransform: 'unset',
                  cursor: 'pointer',
                  gap: 1,
                }}
              >
                {!isVoted ? <ChevronUpIcon width="16px" /> : null}
                <Text
                  variant="lead"
                  as="span"
                  sx={{ display: 'block', lineHeight: '20px' }}
                >
                  {votes}&nbsp;Votes
                </Text>
                {isVoted ? <ChevronDownIcon width="16px" /> : null}
              </Button>
            </Areas.Button>
          </>
        )}
      </Composition>
    </Card>
  );
};

export default TopicsCart;
