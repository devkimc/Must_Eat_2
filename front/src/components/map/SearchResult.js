import styled from 'styled-components'

const SearchResult = ({ searchRes }) => {
  return (
    <Container>
      <ul>
        {searchRes.length !== 0 ? searchRes.map(res => (
          <SearchResultList key={res.id}>
            {res.place_name}
          </SearchResultList>
        )) : <div></div>}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`

const SearchResultList = styled.li`
  padding: 18px 25px 20px;
  border-top: 1px solid #eee;
`

export default SearchResult