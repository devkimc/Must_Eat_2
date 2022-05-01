import styled from 'styled-components'

const SearchResultBox = styled.div`
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`


const SearchResultList = styled.li`
  padding: 18px 25px 20px;
`

const SearchResult = () => {
  return (
    <SearchResultBox>
      <ul>
        <SearchResultList>맛집 검색 결과</SearchResultList>
        <SearchResultList>맛집 검색 결과</SearchResultList>
        <SearchResultList>맛집 검색 결과</SearchResultList>
      </ul>
    </SearchResultBox>
  )
}

export default SearchResult