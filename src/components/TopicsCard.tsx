/* eslint-disable max-lines-per-function */
import { Composition } from '@atomic-layout/emotion';
import { useState } from 'react';
import { Box, Button, Card, Heading, Image, Text, useThemeUI } from 'theme-ui';

import { ReactComponent as ChevronDownIcon } from '../assets/ChevronDownIcon.svg';
import { ReactComponent as ChevronUpIcon } from '../assets/ChevronUpIcon.svg';
import { Topic } from '../mocks/topics';

const areasMobile = `
  icon
  title
  author
  desc
  button
`;

const areasTablet = `
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

  const [showDetails, setShowDetails] = useState(false);

  const hasDescOverflow = desc.length > 220;

  return (
    <Card variant="cards.primary" sx={{ width: '884px' }}>
      <Composition
        areas={areasMobile}
        areasSm={areasTablet}
        templateCols="auto"
        templateColsSm="85px 1fr 40px"
        templateColsMd="95px 1fr 70px"
        gapRow={theme.space[4]}
        gapRowSm={theme.space[2]}
        gapColSm={theme.space[6]}
      >
        {(Areas) => (
          <>
            <Areas.Icon
              flex
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Icon sx={{ width: [60, 95] }} />
            </Areas.Icon>
            <Areas.Title>
              <Heading
                as="h3"
                sx={{
                  textAlign: ['center', 'left'],
                  marginBottom: -2,
                }}
                variant="heading4"
              >
                {title}
              </Heading>
            </Areas.Title>
            <Areas.Desc>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxHeight: [
                    showDetails ? 'max-content' : '95px',
                    'max-content',
                  ],
                  overflow: 'hidden',
                }}
              >
                <Text
                  as="p"
                  color="text.1"
                  variant="text.body"
                  sx={{
                    textAlign: ['center', 'left'],
                  }}
                >
                  {desc}
                </Text>
                {!showDetails && hasDescOverflow && (
                  <Box
                    sx={{
                      display: ['block', 'none'],
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      m: 0,
                      p: 2,
                      height: '55px',
                      width: '100%',
                      backgroundImage: `linear-gradient(to bottom, transparent, #383E4D)`,
                    }}
                  />
                )}
              </Box>
              {hasDescOverflow && (
                <Button
                  variant="text"
                  onClick={() => setShowDetails(!showDetails)}
                  sx={{
                    display: ['block', 'none'],
                    textAlign: 'center',
                    cursor: 'pointer',
                    m: 0,
                    p: 0,
                    gap: 1,
                    width: '100%',
                    color: 'text',
                  }}
                >
                  <Text
                    variant="small"
                    as="span"
                    sx={{
                      display: 'block',
                      lineHeight: '25px',
                      marginTop: '10px',
                    }}
                  >
                    {showDetails ? 'Hide Detail' : 'Show Detail'}
                  </Text>
                </Button>
              )}
            </Areas.Desc>
            <Areas.Author
              flex
              alignItems="center"
              flexDirection="column"
              flexDirectionSm="row"
            >
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
                sx={{
                  marginLeft: [0, 2, null],
                  marginTop: ['5px', null],
                  textAlign: ['center', 'left'],
                }}
              >
                {username}
              </Text>
            </Areas.Author>

            <Areas.Button flex alignItems="center" justifyContent="center">
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
