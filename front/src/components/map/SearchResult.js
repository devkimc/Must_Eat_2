import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import ReactLoading from "react-loading";

const SearchResult = ({ allSearchRes }) => {
  const [ref, inView] = useInView()

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

        <LoaderTarget ref={ref}>
          <LoaderWrap>
            <ReactLoading type="spin" color="#A593E0" />
          </LoaderWrap>
        </LoaderTarget>
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

/* Loading */
const LoaderTarget = styled.div`
  height: 100px;
`

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

/* flex */
const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default SearchResult