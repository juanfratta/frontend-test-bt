import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.lightgrey_bt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 1024px;
  height: 80%;
  background: white;
  color: ${({ theme }) => theme.colors.grey_bt};
  font-size: 14px;
  display: grid;
  grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr;
`;
export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  box-shadow: 0px 2px 3px 0px ${({ theme }) => theme.colors.lightgrey_bt};
  align-content: center;
  padding-left: 20px;
`;
