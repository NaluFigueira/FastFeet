import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

import { Container, Content, Profile, MenuItem } from './styles';

export default function Header() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <MenuItem
            to="/deliveries"
            selected={
              history.location.pathname === '/deliveries' ||
              history.location.pathname === '/delivery/register' ||
              history.location.pathname === '/delivery/edit'
            }
          >
            ENCOMENDAS
          </MenuItem>
          <MenuItem
            to="/deliverymen"
            selected={
              history.location.pathname === '/deliverymen' ||
              history.location.pathname === '/deliveryman/register' ||
              history.location.pathname === '/deliveryman/edit'
            }
          >
            ENTREGADORES
          </MenuItem>
          <MenuItem
            to="/recipients"
            selected={
              history.location.pathname === '/recipients' ||
              history.location.pathname === '/recipient/register' ||
              history.location.pathname === '/recipient/edit'
            }
          >
            DESTINATÁRIOS
          </MenuItem>
          <MenuItem
            to="/delivery_problems"
            selected={history.location.pathname === '/delivery_problems'}
          >
            PROBLEMAS
          </MenuItem>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/" onClick={handleSignOut}>
                sair do sistema
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
