import { SearchInput } from 'components'
import { SearchResult } from 'components'
import styled from 'styled-components'

const SearchContainer = () => {

  /* global kakao */
  const keywordSearch = () => {
    const searchOption = {
      category_group_code: 'FD6',      
      x: 126.86483931801229,
      y: 37.55108043514493      
    }

    const places = new kakao.maps.services.Places()
    places.keywordSearch('음식명', keywordSearchCallBack, searchOption)
  }

  const keywordSearchCallBack = (res, status) => {
    const resStatus = kakao.maps.services.Status
    if (status === resStatus.OK) {
      console.log(res)
      alert(`${res.length} 건의 검색 결과가 있습니다!`)
    } else if (status === resStatus.ZERO_RESULT) {
      alert('검색 결과가 없습니다!')
    } else {
      alert('서버 응답에 문제가 있습니다!')
    }
  }  

  return (
    <Container>
      <SearchInput />
      <button onClick={keywordSearch}>클릭!</button>
      <SearchResult />
    </Container>
  )
}

const Container = styled.div`
  background: white;
  position: absolute;
  z-index: 20;
  width: 390px;
  height: 100%;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%), 5px 0 15px 0 rgb(0 0 0 / 10%);
`

export default SearchContainer