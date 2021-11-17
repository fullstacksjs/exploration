/* eslint-disable max-lines-per-function */
import { Composition } from '@atomic-layout/emotion';
import { not } from '@fullstacksjs/toolbox';
import { useState } from 'react';
import { Box, Button, Card, Heading, Image, Text, useThemeUI } from 'theme-ui';
import { TopicsQuery } from '../graphql/generated';

import ChevronDownIcon from './Icons/ChevronDownIcon.svg';
import ChevronUpIcon from './Icons/ChevronUpIcon.svg';

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

// eslint-disable-next-line dot-notation
type TopicQuery = TopicsQuery['allTopics'][number];
interface TopicsCartProps extends TopicQuery {}

const TopicsCart: React.FC<TopicsCartProps> = ({
  title,
  description,
  icon,
  lecturers,
}) => {
  const { theme } = useThemeUI();
  const isVoted = true;
  const votes = 10;

  const [showDetails, setShowDetails] = useState(false);

  const hasDescOverflow = description!.length > 120;

  return (
    <Card>
      <Composition
        areas={areasMobile}
        areasSm={areasTablet}
        templateCols="auto"
        templateColsSm="85px 1fr 40px"
        templateColsMd="95px 1fr 70px"
        gapRow={theme.space![4]}
        gapRowSm={theme.space![2]}
        gapColSm={theme.space![6]}
      >
        {(Areas) => (
          <>
            <Areas.Icon
              flex
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={icon[0].url} sx={{ width: [70, 95] }} alt="avatar" />
            </Areas.Icon>
            <Areas.Title>
              <Heading
                as="h3"
                variant="heading4"
                sx={{ textAlign: ['center', 'left'], marginBottom: -2 }}
              >
                {title}
              </Heading>
            </Areas.Title>
            <Areas.Desc flex flexDirection="column">
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
                  {description}
                </Text>
                {!showDetails && hasDescOverflow && (
                  <Box
                    sx={{
                      display: ['block', 'none'],
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '55px',
                      width: '100%',
                      backgroundImage: `linear-gradient(to bottom, transparent, #383E4D)`,
                    }}
                  />
                )}
              </Box>
              {hasDescOverflow ? (
                <Text
                  variant="small"
                  onClick={() => setShowDetails(not)}
                  as="span"
                  role="link"
                  sx={{
                    alignSelf: 'center',
                    py: 1,
                    px: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    display: ['inline', 'none'],
                    marginTop: '10px',
                    '&:focus': {
                      outline: '1px solid',
                      outlineColor: 'accent',
                    },
                  }}
                >
                  {showDetails ? 'Hide Detail' : 'Show Detail'}
                </Text>
              ) : null}
            </Areas.Desc>
            <Areas.Author
              flex
              alignItems="center"
              flexDirection="column"
              flexDirectionSm="row"
            >
              <Image
                sx={{ width: '33px' }}
                srcSet={lecturers[0].avatar[0].responsiveImage?.srcSet}
                variant="images.avatar"
                alt="Avatar"
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
                {lecturers[0].name}
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
