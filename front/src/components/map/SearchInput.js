import styled from 'styled-components'


const SearchInputBox = styled.div`
  width: 340px;
  padding: 15px 25px;
`


const SearchInput = () => {
  return (
    <SearchInputBox>
      <input placeholder='MustEat 지도 검색'></input>
    </SearchInputBox>
  )
}

export default SearchInput