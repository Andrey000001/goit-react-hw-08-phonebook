import styled from '@emotion/styled';

export const Item = styled.li`
  list-style: none;
  display: flex;
  border: '1px solid rgba(0, 0, 0, 0.23)';
  align-items: center;
  border-radius: 3px;
  margin-bottom: 5px;
  padding: 3px 10px;
  justify-content: space-between;
  background: rgb(139 121 121 / 20%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Span = styled.span`
  font-weight: 500;
`;
