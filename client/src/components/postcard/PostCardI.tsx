import { ReactElement } from 'react';
import Wrapper from '../../assets/wrappers/postcard/PostCardI';
import { FaPlay } from 'react-icons/fa';
import { FaClosedCaptioning } from 'react-icons/fa';
import { FaDotCircle } from 'react-icons/fa';

interface PostCardIProps {
  title: string | ReactElement;
  imgUrl: string;
  episodeCount: number;
  className?: string;
  type: string;
  duration: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const PostCardI: React.FC<PostCardIProps> = ({
  title,
  className,
  imgUrl,
  episodeCount,
  type,
  duration,
  onClick,
}) => {
  return (
    <Wrapper className={className}>
      <div className='poster' onClick={onClick}>
        <img src={imgUrl} alt='poster' />
        <FaPlay className='play-icon' />
        <div className='count'>
          <span className='item'>
            <FaClosedCaptioning className='icon' />
            <span className='text'>{episodeCount}</span>
          </span>
        </div>
      </div>
      <p className='title' onClick={onClick}>{title}</p>
      <p className='meta-info'>
        {type}
        <FaDotCircle className='sep' />
        {duration}
      </p>
    </Wrapper>
  );
};

export default PostCardI;
