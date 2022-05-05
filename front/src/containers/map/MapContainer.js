import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { MapComponent } from 'components'
import { searchResState } from 'recoil/atom/map'
import apiKey from 'key.json'

const MapContainer = () => {
  let mapObj = {}

  const [searchRes] = useRecoilState(searchResState)

  /* api */
  const api = {
    key: apiKey.API_KEY_KAKAO_MAP_LOCAL,
    url: 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=',
    services: '&libraries=services'
  }
  const { key, url, services } = api

  /* map */
  const mapPosition = {
    latCdnt: 37.5396264,
    lngCdnt: 126.9465531
  }
  const { latCdnt, lngCdnt } = mapPosition

  /* global kakao */
  useEffect(() => {
    if (window.kakao && kakao.maps) {
      initMap()
    } else {
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(initMap)
      script.src = url + key + services
      document.head.appendChild(script)
    }
  })

  useEffect(() => {
    searchRes.forEach(res => showMarker(res))
  }, [searchRes])
  
  const initMap = () => {
    const mapOptions = {
      center: new kakao.maps.LatLng(latCdnt, lngCdnt),
      level: 7
    }
    const container = document.getElementById('map')
    new kakao.maps.Map(container, mapOptions)
    mapObj = new kakao.maps.Map(container, mapOptions)
  }

  const showMarker = place => {
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(place.y, place.x),
      clickable: true
    })
    marker.setMap(mapObj)
  }

  return (
    <>
      <MapComponent />
    </>
  )
}

export default MapContainer