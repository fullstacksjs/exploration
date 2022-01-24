import { Composition } from '@atomic-layout/emotion';
import { isNull, not } from '@fullstacksjs/toolbox';
import { useState } from 'react';
import { Box, Card, Heading, Image, Link, Text, useThemeUI } from 'theme-ui';

import type { TopicsQuery } from '../graphql/generated';
import { useTopic, useVoteDown, useVoteUp } from '../operations';
import { Author } from './Author';
import { VoteButton } from './VoteButton';

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
                  sx={{ textAlign: ['center', 'left'] }}
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
                <Link
                  tabIndex={0}
                  variant="text.small"
                  onClick={() => setShowDetails(not)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setShowDetails(not);
                  }}
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
                </Link>
              ) : null}
            </Areas.Desc>
            <Areas.Author>
              <Author
                srcSet={lecturers[0].avatar[0].responsiveImage!.srcSet}
                name={lecturers[0]!.name!}
              />
            </Areas.Author>
            <Areas.Button flex alignItems="center" justifyContent="center">
              <VoteButton
                isLoading={isLoading}
                isVoted={topic?.isVoted}
                votesCount={topic?.votesCount}
                onClick={() => {
                  if (isNull(topic)) return;
                  return topic?.isVoted ? voteDown(topic.id) : voteUp(topic.id);
                }}
              />
            </Areas.Button>
          </>
        )}
      </Composition>
    </Card>
  );
};
