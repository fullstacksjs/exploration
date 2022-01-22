import { Button, Text } from 'theme-ui';
import { PuffLoader } from './PuffLoader';
import ChevronDownIcon from './Icons/ChevronDownIcon.svg';
import ChevronUpIcon from './Icons/ChevronUpIcon.svg';

interface VoteProps {
  isLoading: boolean;
  onClick: () => void;
  isVoted: boolean | null | undefined;
  votesCount?: number;
}

export const VoteButton: React.FC<VoteProps> = ({
  isLoading,
  onClick,
  isVoted,
  votesCount = 0,
}) => (
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
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? (
      <PuffLoader />
    ) : (
      <>
        {!isVoted ? <ChevronUpIcon width="16px" /> : null}
        <Text
          variant="lead"
          as="span"
          sx={{ display: 'block', lineHeight: '20px' }}
        >
          {votesCount} Votes
        </Text>
        {isVoted ? <ChevronDownIcon width="16px" /> : null}
      </>
    )}
  </Button>
);
