import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBox = styled.div`
  font-size: 1rem;
  color: black;
  background: white;
  position: absolute;
  z-index: 10;
  width: 100%;
`

const LinkGroup = styled.div`
  padding: 1rem 2rem;
`

const Header = () => {
  return (
    <HeaderBox>
      <LinkGroup>
        <Link to='/'>Home </Link>
        <Link to='/map'>Map </Link>
        <Link to='/login'>Login </Link>
      </LinkGroup>
    </HeaderBox>
  )
}

export default Header;
