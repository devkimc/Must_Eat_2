import styled from 'styled-components'
import { useRecoilValue, useRecoilState } from 'recoil'

import Loader from './Loader'
import { loadTargetState, isLoadedState } from 'recoil/atom/map'

const SearchResult = ({ searchRes }) => {
  const [loadTarget, setLoadTarget] = useRecoilState(loadTargetState)
  const isLoaded = useRecoilValue(isLoadedState)

  return (
    <Container>
      <Result>
        {searchRes.length !== 0 ? searchRes.map(res => (
          <ResultList key={res.id}>{res.place_name}</ResultList>
        )) : <RequestSearch></RequestSearch>}
      </Result>
      <LoadTarget ref={setLoadTarget}>
        {isLoaded && <Loader />}
      </LoadTarget>
    </Container>
  )
}

const Container = styled.div`
  height: 99vh;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Result = styled.ul`

`

const ResultList = styled.li`
  padding: 18px 25px 20px;
  border-top: 1px solid #eee;
`

const RequestSearch = styled.div`
  height: 100vh;
`

const LoadTarget = styled.div`
  width: 390px;
  height: 10px;
`

export default SearchResult