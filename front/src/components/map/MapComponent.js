import styled from 'styled-components'
import key from 'key.json'

const MapBox = styled.div`
  height: 100vh;
`

const MapComponent = () => {

  const api = {
    key: key.API_KEY_KAKAO_MAP_LOCAL,
    url: 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=',
    services: '&libraries=services'
  }

  const mapSet = {
    latCdnt: 37.5396264,
    lngCdnt: 126.9465531
  }

  const initMap = () => {
    const container = document.getElementById('map')
    const mapOptions = {
      center: new kakao.maps.LatLng(mapSet.latCdnt, mapSet.lngCdnt),
      level: 7
    }
    new kakao.maps.Map(container, mapOptions)
  }

  /* global kakao */
  if (window.kakao && kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    script.onload = () => kakao.maps.load(initMap)
    script.src = api.url + api.key + api.services
    document.head.appendChild(script)
  }

  return (
    <MapBox id='map' />
  )
}

export default MapComponent