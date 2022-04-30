import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderBox>
      <MenuGroup>
        <Menu>
          <Link to='/'>Home </Link>
        </Menu>
        <Menu>
          <Link to='/map'>Map </Link>
        </Menu>
        <Menu>
          <Link to='/login'>Login </Link>
        </Menu>
      </MenuGroup>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  font-size: 1rem;
  color: black;
  background: white;
  position: absolute;
  z-index: 10;
  width: 100%;
`

const MenuGroup = styled.ul`
  padding: 1rem 2rem;
  display: flex;
  list-style: none;
`

const Menu = styled.li`
  padding: 0rem 1rem;
`

export default Header;