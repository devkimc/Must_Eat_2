import styled from 'styled-components'
import { useRecoilValue, useRecoilState } from 'recoil'

import Loader from './Loader'
import { loadTargetState, isLoadedState } from '@recoil/atom/map'

const SearchResult = ({ allSearchRes }) => {
  const [loadTarget, setLoadTarget] = useRecoilState(loadTargetState)
  const isLoaded = useRecoilValue(isLoadedState)

  return (
    <Wrapper>
      <Result>
        {allSearchRes.length !== 0 ? allSearchRes.map(res => (
          <ResultList key={res.id}>
            {res.place_name}
          </ResultList>
        ))
        :
        <RequestSearch>
          <FlexColBox>
           검색 결과가 없습니다.
          </FlexColBox>
        </RequestSearch>}

        <LoadTarget ref={setLoadTarget}>
          {/* {isLoaded && <Loader />} */}
        </LoadTarget>
      </Result>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
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
  display: flex;
  justify-content: center;
  height: 90vh;
`

const LoadTarget = styled.div`
  height: 100px;
`

/* flex */
const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default SearchResult