import { SearchInput, SearchResult } from 'components'

import { useRecoilState, useResetRecoilState } from 'recoil'
import { searchIpState, searchResState } from 'recoil/atom/map'

import styled from 'styled-components'

const SearchContainer = () => {
  const [searchIp] = useRecoilState(searchIpState)
  const [searchRes, setSearchRes] = useRecoilState(searchResState)
  const resetRes = useResetRecoilState(searchResState)
  
  /* global kakao */
  const keywordSearch = () => {

    const searchOption = {
      category_group_code: 'FD6',      
      x: 126.86483931801229,
      y: 37.55108043514493      
    }

    const places = new kakao.maps.services.Places()
    places.keywordSearch(searchIp, keywordSearchCallBack, searchOption)
  }

  const keywordSearchCallBack = (res, status) => {
    const resStatus = kakao.maps.services.Status
    if (status === resStatus.OK) {
      setSearchRes(res)
    } else if (status === resStatus.ZERO_RESULT) {
      alert('검색 결과가 없습니다!')
      console.log(status)
      resetRes()
    } else {
      alert('서버 응답에 문제가 있습니다!')
      console.log(status)
      resetRes()
    }
  }

  return (
    <Container>
      <SearchInput
        onSearch={() => keywordSearch()}
      />
      <SearchResult searchRes={searchRes}/>
    </Container>
  )
}

const Container = styled.div`
  background: white;
  position: absolute;
  z-index: 20;
  width: 390px;
  height: 100vh;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%), 5px 0 15px 0 rgb(0 0 0 / 10%);
`

export default SearchContainer