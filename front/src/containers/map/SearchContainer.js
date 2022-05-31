import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import styled from 'styled-components'

import { SearchInput, SearchResult } from 'components'
import { searchIpState, searchResState, mapObjState, loadTargetState, isLoadedState } from 'recoil/atom/map'

const SearchContainer = () => {

  const [searchPage, setSearchPage] = useState(1)
  const searchIp = useRecoilValue(searchIpState)
  const [mapObj] = useRecoilState(mapObjState)
  const [loadTarget, setLoadTarget] = useRecoilState(loadTargetState)
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState)
  const [searchRes, setSearchRes] = useRecoilState(searchResState)

  /* map */
  const mapPosition = {
    latCdnt: 37.5396264,
    lngCdnt: 126.9465531
  }
  const { latCdnt, lngCdnt } = mapPosition

  const searchOption = {
    page: 1,    
    x: 126.86483931801229,
    y: 37.55108043514493,   
    category_group_code: 'FD6'     
  }

  /* global kakao */
  /* search */
  const keywordSearch = async (firstSearch) => {
    setIsLoaded(true)

    const places = new kakao.maps.services.Places()
    if (firstSearch) {
      /* init */
      searchOption.page = 1
      setSearchRes([])
      await places.keywordSearch(searchIp, keywordSearchCB, searchOption)
    } else {
      await places.keywordSearch(searchIp, keywordSearchAgainCB, searchOption)
    }
    searchOption.page += 1

    setIsLoaded(false)
  }

  const keywordSearchCB = async (res, status) => {
    const resStatus = kakao.maps.services.Status
    if (status === resStatus.OK) {
      const mapOptions = {
        center: new kakao.maps.LatLng(latCdnt, lngCdnt),
        level: 8
      }
      const container = document.getElementById('map')
      new kakao.maps.Map(container, mapOptions)

      setSearchRes(res)
    } else if (status === resStatus.ZERO_RESULT) {
      alert('검색 결과가 없습니다!')
    } else {
      alert('서버 응답에 문제가 있습니다!')
    }
  }

  const keywordSearchAgainCB = async (res, status) => {
    const resStatus = kakao.maps.services.Status
    if (status === resStatus.OK) {
      setSearchRes(searchRes => searchRes.concat(res))
    }
  }

  /* Infinite scroll */
  useEffect(() => {
    let observer;

    if (loadTarget) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      })
      observer.observe(loadTarget)
    }
    return () => observer && observer.disconnect();
  }, [loadTarget, searchIp])

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await keywordSearch(false);
      observer.observe(entry.target);
    }
  }
  
  return (
    <Container>
      <SearchInput
        onSearch={() => keywordSearch(true)}
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