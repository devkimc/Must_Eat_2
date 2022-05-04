import styled from 'styled-components'

const SearchResult = ({ searchRes }) => {
  return (
    <Container>
      <ul>
        {searchRes.map(res => (
          <SearchResultList id={res.id}>{res.place_name}</SearchResultList>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`


const SearchResultList = styled.li`
  padding: 18px 25px 20px;
`

export default SearchResult