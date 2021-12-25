/* eslint-disable max-lines-per-function */
import { Composition } from '@atomic-layout/emotion';
import { isNull, not } from '@fullstacksjs/toolbox';
import { useState } from 'react';
import { Box, Button, Card, Heading, Image, Text, useThemeUI } from 'theme-ui';
import type { TopicsQuery } from '../graphql/generated';
import { useTopic, useVoteDown, useVoteUp } from '../operations';
import ChevronDownIcon from './Icons/ChevronDownIcon.svg';
import ChevronUpIcon from './Icons/ChevronUpIcon.svg';
import { PuffLoader } from './PuffLoader';

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

type TopicQuery = TopicsQuery['allTopics'][number];
interface TopicsCartProps extends TopicQuery {}

export const TopicCart: React.FC<TopicsCartProps> = ({
  id,
  title,
  description,
  icon,
  lecturers,
}) => {
  const { theme } = useThemeUI();
  const { data: topic, isLoading: isTopicLoading } = useTopic(id);
  const [showDetails, setShowDetails] = useState(false);
  const { mutate: voteUp, isLoading: isVoteUpLoading } = useVoteUp();
  const { mutate: voteDown, isLoading: isVoteDownLoading } = useVoteDown();
  const isLoading = isVoteDownLoading || isVoteUpLoading || isTopicLoading;

  const hasDescOverflow = description!.length > 120;

  return (
    <Card sx={{ width: '100%' }}>
      <Composition
        width="100%"
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
                  color: topic?.isVoted ? 'accent' : 'text',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textTransform: 'unset',
                  cursor: 'pointer',
                  gap: 1,
                }}
                disabled={isLoading}
                onClick={() => {
                  if (isNull(topic)) return;
                  return topic?.isVoted ? voteDown(topic.id) : voteUp(topic.id);
                }}
              >
                {isLoading ? (
                  <PuffLoader />
                ) : (
                  <>
                    {!topic?.isVoted ? <ChevronUpIcon width="16px" /> : null}
                    <Text
                      variant="lead"
                      as="span"
                      sx={{ display: 'block', lineHeight: '20px' }}
                    >
                      {topic!.votesCount} Votes
                    </Text>
                    {topic?.isVoted ? <ChevronDownIcon width="16px" /> : null}
                  </>
                )}
              </Button>
            </Areas.Button>
          </>
        )}
      </Composition>
    </Card>
  );
};
