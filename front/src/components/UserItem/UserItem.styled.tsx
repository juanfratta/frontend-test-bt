import styled from 'styled-components';

export const UserStyle = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  justify-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightgrey_bt};

  &:nth-child(2n + 3) {
    #name {
      background: #f4f4f4;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-right: 0.5px solid ${({ theme }) => theme.colors.lightgrey_bt};

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h4 {
    margin: 0 20px;
    font-weight: 600;
  }

  p {
    margin: 0 20px;
    color: red;
  }

  #delete {
    visibility: hidden;
  }

  &:hover {
    #delete {
      visibility: visible;
      cursor: pointer;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
