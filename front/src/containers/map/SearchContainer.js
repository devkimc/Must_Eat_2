import { SearchInput } from 'components'
import { SearchResult } from 'components'
import styled from 'styled-components'

const SearchBox = styled.div`
  background: white;
  position: absolute;
  z-index: 20;
  width: 390px;
  height: 100%;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%), 5px 0 15px 0 rgb(0 0 0 / 10%);
`

const SearchContainer = () => {
  return (
    <SearchBox>
      <SearchInput />
      <SearchResult />
    </SearchBox>
  )
}

export default SearchContainer