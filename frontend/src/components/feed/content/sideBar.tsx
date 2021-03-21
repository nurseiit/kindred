import { Button, Loading, Spacer } from '@geist-ui/react';
import { Calendar } from '@styled-icons/ionicons-outline';
import { useEffect } from 'react';
import styled from 'styled-components';
import { formatDistance, format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getEvents, selectUser } from '../../../features/user/userSlice';
import { IEvent } from '../../../types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 18px;
  border-radius: 12px;

  margin-bottom: 18px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;

const CalendarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 18px;

  font-size: 20px;
  border-radius: 10px;
  width: 90px;

  background-color: var(--bg-1);
`;

const Emoji = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  width: 24px;

  min-height: 35px;
  min-width: 35px;
  background-color: var(--bg-1);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
  margin: 18px 0 12px 0;
`;

const Event = ({ event }: { event: IEvent }) => {
  return (
    <Card>
      <Title>Upcoming Event</Title>
      <Wrapper>
        <DetailsWrapper>
          <Emoji>👶</Emoji>
          <Title style={{ fontSize: 20 }}>{event.title}</Title>
          <span style={{ fontSize: 13, color: 'var(--accent-5)' }}>
            {event.description}
          </span>
        </DetailsWrapper>
        <CalendarCard>
          <strong>{format(new Date(event.start), 'dd')}</strong>{' '}
          {format(new Date(event.start), 'EEE')}
        </CalendarCard>
      </Wrapper>
      <Wrapper style={{ marginTop: 12 }}>
        <DetailsWrapper>
          <Title style={{ fontSize: 14 }}>Details</Title>
          <span
            style={{
              fontSize: 13,
              color: 'var(--accent-5)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Calendar width={20} height={20} style={{ marginRight: 8 }} />
            in {formatDistance(new Date(event.start), new Date())}
          </span>
        </DetailsWrapper>
      </Wrapper>
      <Spacer y={1} />
      <Button type="success-light" size="small">
        Joining?
      </Button>
    </Card>
  );
};

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const {
    events,
    eventsRequest: { isLoading },
  } = useAppSelector(selectUser);

  useEffect(() => {
    if ((!events || !events.length) && !isLoading) dispatch(getEvents());
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        events.map((event) => <Event key={`event-${event.id}`} event={event} />)
      )}
    </div>
  );
};
