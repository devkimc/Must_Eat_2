import styled from 'styled-components'

const SearchResult = () => {
  return (
    <Container>
      <ul>
        <SearchResultList>맛집 검색 결과</SearchResultList>
        <SearchResultList>맛집 검색 결과</SearchResultList>
        <SearchResultList>맛집 검색 결과</SearchResultList>
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