import { MapContainer, SearchContainer } from 'containers'
import styled from 'styled-components'

const MapBox = styled.div`
`

const Map = () => {
  return (
    <MapBox>
      <SearchContainer></SearchContainer>
      <MapContainer></MapContainer>
    </MapBox>
  )
}

export default Map