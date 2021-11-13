import BabelIcon from './Babel.svg';
import EslintIcon from './Eslint.svg';
import CardAvatar from './avatar.png';

export interface Topic {
  id: number;
  title: string;
  desc: string;
  icon: SVGComponent;
  authorAvatar: StaticImageData;
  username: string;
  votes: number;
  isVoted?: boolean;
}

export const thisWeek: Topic = {
  id: 1,
  title: 'Babel',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue morbi auctor id ut fringilla cras commodo. Gravida metus, dui ac ridiculus suspendisse vel. Purus pretium',
  icon: BabelIcon,
  authorAvatar: CardAvatar,
  username: 'Farshid Shahmoradi',
  votes: 10,
  isVoted: true,
};

export const topics: Topic[] = [
  {
    id: 2,
    title: 'ESLint',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue morbi auctor id ut fringilla cras commodo. Gravida metus, dui ac ridiculus suspendisse vel. Purus pretium',
    icon: EslintIcon,
    authorAvatar: CardAvatar,
    username: 'Farshid Shahmoradi',
    votes: 100,
    isVoted: true,
  },
  {
    id: 3,
    title: 'Git',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue morbi auctor id ut fringilla cras commodo. Gravida metus, dui ac ridiculus suspendisse vel. Purus pretium',
    icon: BabelIcon,
    authorAvatar: CardAvatar,
    username: 'Farshid Shahmoradi',
    votes: 50,
  },
];
