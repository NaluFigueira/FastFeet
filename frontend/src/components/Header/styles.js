import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
  background: white;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 20%;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const MenuItem = styled(Link)`
  font-weight: bold;
  margin-right: 10px;
  color: ${props => (props.selected ? '#444' : '#999')};
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      font-weight: bold;
      color: #de3b3b;
    }
  }
`;
