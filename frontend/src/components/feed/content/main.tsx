import { useEffect, useState } from 'react';
import { Button, Loading, Textarea, useToasts } from '@geist-ui/react';
import {
  Calendar,
  Chatbox,
  Heart,
  Image,
  Send,
  Videocam,
} from '@styled-icons/ionicons-outline';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  createPost,
  getCommunityPosts,
  selectPost,
} from '../../../features/post/postSlice';
import { selectUser } from '../../../features/user/userSlice';
import { Emoji } from '../../emoji';
import { ProfilePhoto } from '../top';
import { IPost } from '../../../types';
import { useUser } from '../../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    border-radius: 12px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 18px;
  border-radius: 12px;

  margin-bottom: 18px;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 18px;
`;

const TextCard = styled(Card)`
  flex-direction: row;
  align-items: center;
  background-color: var(--bg-1);

  .textarea {
    margin-left: 12px;
    height: 50px !important;
    border: none !important;
  }

  margin-bottom: 18px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .wrapper {
    display: flex;
    align-items: center;
  }

  .publish {
    display: flex;
    align-items: center;

    border-radius: 12px !important;

    .icon {
      margin-right: 4px;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  border: none;
  outline: none;
  background-color: white;

  font-size: 14px;
  color: var(--accent-2);

  &:hover {
    color: var(--accent-3);
  }

  .action-icon {
    margin-right: 8px;
  }
`;

const Divider = styled.div`
  height: 22px;
  border-right: 1px solid var(--accent-2);
  margin: 0 12px;
`;

const CreatePost = () => {
  const [text, setText] = useState('');
  const [, setToast] = useToasts();
  const dispatch = useAppDispatch();
  const { currentCommunity } = useAppSelector(selectUser);
  const {
    postCreate: { isLoading, error },
  } = useAppSelector(selectPost);

  useEffect(() => {
    if (error)
      setToast({
        type: 'error',
        text: `Could not publish due to "${error?.toString()}" 😢!`,
      });
  }, [error]);

  const onPublish = () => {
    dispatch(
      createPost({
        description: text,
        cb: () => {
          setToast({ type: 'success', text: 'Announcement published! 😃' });
          setText('');
        },
        community: currentCommunity?.id || 0,
      })
    );
  };

  return (
    <Card>
      <Title>Create announcement</Title>
      <TextCard>
        <Emoji isRoundedWhiteBg>💬</Emoji>
        <Textarea
          width="100%"
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's going on?"
        />
      </TextCard>
      <ActionsWrapper>
        <div className="wrapper">
          <ActionButton>
            <Image height={18} width={18} className="action-icon" />
            Image
          </ActionButton>
          <Divider />
          <ActionButton>
            <Videocam height={18} width={18} className="action-icon" />
            Video
          </ActionButton>
          <Divider />
          <ActionButton>
            <Calendar height={18} width={18} className="action-icon" />
            Event
          </ActionButton>
        </div>
        <Button
          auto
          type={error ? 'error' : 'success'}
          className="publish"
          onClick={onPublish}
          loading={isLoading}
        >
          <Send height={20} width={20} className="icon" />
          Publish
        </Button>
      </ActionsWrapper>
    </Card>
  );
};

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const Info = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--accent-3);
`;

const ReactionsWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 12px;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  color: var(--accent-5);

  font-size: 13px;
  margin-right: 12px;
`;

const Post = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const description = post.description;
  const username =
    post.user !== user?.id
      ? 'Alina Gagarina'
      : [user?.first_name, user?.last_name].join(' ');
  const info = formatDistance(new Date(post.created_at), new Date()) + ' ago';
  return (
    <Card>
      <UserWrapper>
        <ProfilePhoto style={{ marginRight: 16 }}>
          {post.user !== user?.id ? '🧑‍🚀' : '🦸🏻‍♀️'}
        </ProfilePhoto>
        <UsernameWrapper>
          <Username>{username}</Username>
          <Info>{info}</Info>
        </UsernameWrapper>
      </UserWrapper>
      <TextCard>
        <Emoji isRoundedWhiteBg>👋</Emoji>
        <span style={{ marginLeft: '18px', fontSize: 14 }}>{description}</span>
      </TextCard>
      <ReactionsWrapper>
        <Reaction>
          <Heart width={20} height={20} style={{ marginRight: 8 }} /> 0 Likes
        </Reaction>
        <Reaction>
          <Chatbox width={20} height={20} style={{ marginRight: 8 }} /> 0
          Comments
        </Reaction>
      </ReactionsWrapper>
    </Card>
  );
};

export const Main = () => {
  const {
    posts,
    postRequest: { isLoading },
  } = useAppSelector(selectPost);
  const { currentCommunity } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ((!posts || !posts.length) && !isLoading)
      dispatch(getCommunityPosts(currentCommunity?.id || 0));
  }, []);

  return (
    <Wrapper>
      <CreatePost />
      {isLoading ? (
        <Loading />
      ) : (
        posts.map((post) => <Post key={`post-${post.id}`} post={post} />)
      )}
    </Wrapper>
  );
};
