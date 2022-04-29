import styeld from 'styled-components'

const TheHeader = styeld.div`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`

const Header = () => {
  return (
    <TheHeader>Must-Eat</TheHeader>
  )
}

export default Header;
