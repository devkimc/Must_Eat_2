import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import ReactLoading from "react-loading";
import { BiMap } from "react-icons/bi"
import { IoIosCall } from "react-icons/io"

const SearchResult = ({ allSearchRes }) => {
  const [ref, inView] = useInView()
  const colorArr = [ '#c5d9ed',
                     '#72aee6',
                     '#dcdcde',
                     '#a7aaad',
                     '#facfd2',
                     '#ff8085',
                     '#f5e6ab',
                     '#f0c33c',
                     '#b8e6bf',
                     '#1ed14b' ]

  const splitCateNm = (cateNm) => {
    const cateNmWord = cateNm.split(' > ')
    cateNmWord.shift()
    return cateNmWord
  }

  return (
    <Wrapper>
      <Result>
        {allSearchRes.length ? allSearchRes.map(res => (
          <ResultList key={res.id}>
            <FlexRow>
              <RadiusBox>

                <Title>
                  <PlaceNmTxt>
                    {res.place_name}
                  </PlaceNmTxt>
                </Title>

                <Badges>
                  {splitCateNm(res.category_name).map((cateNm, i) => (
                    <Badge randomColor={colorArr[i]} key={i}>
                      <CateNmTxt>{cateNm}</CateNmTxt>
                    </Badge>
                  ))}
                </Badges>

                <BorderLine></BorderLine>

                <Info>
                  <AddrNm>
                    <AddrNmIcon>
                      <BiMap size={12}/>
                    </AddrNmIcon>

                    <AddrNmTxt>
                      &nbsp;{res.address_name}
                    </AddrNmTxt>
                  </AddrNm>

                  {res.phone && 
                    <PhoneNum>
                      <PhoneNumIcon>
                        <IoIosCall size={12}/>
                      </PhoneNumIcon>
                    
                      <PhoneNumTxt>
                        &nbsp;{res.phone}
                      </PhoneNumTxt>
                    </PhoneNum>
                  }
                </Info>
                
              </RadiusBox>
            </FlexRow>
          </ResultList>
        ))
        :
        <RequestSearch>
          <FlexCol>
           검색 결과가 없습니다.
          </FlexCol>
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

const RadiusBox = styled.div`
  width: 300px;
  /* height: 50px; */
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
  border-radius: 10px;

  padding: 15px 10px 15px 10px;
`

const Title = styled.div`
`

const BorderLine = styled.div`
  border-bottom: 1px solid silver;
  border-style: dashed;
  margin-bottom: 12px;
  margin-top: 10px;
`

const Info = styled.div`

`

const PlaceNmTxt = styled.span`
  font-size: 16px;
`

const PhoneNum = styled.div`
  display: flex;
`

const PhoneNumTxt = styled.span`
  font-size: 12px;
`

const PhoneNumIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const AddrNm = styled.div`
  display: flex;
  margin-bottom: 6px;
`

const AddrNmIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const AddrNmTxt = styled.span`
  font-size: 12px;
`

const CateNmTxt = styled.span`
  font-size: 11px;
  font-weight: 700;
`

const Badges = styled.div`
  display: flex;
  padding-top: 10px;
`

const Badge = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: ${props => props.randomColor};
  /* width: 40px; */
  padding: 5px 7px;
  border-radius: 5px;
  margin-right: 7px;
  /* height: 10px; */
`


/* 검색 결과 없을 시 */
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
const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default SearchResult