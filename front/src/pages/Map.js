import { MapContainer, SearchContainer } from 'containers'
import styled from 'styled-components'

const Map = () => {
  return (
    <Container>
      <SearchContainer></SearchContainer>
      <MapContainer></MapContainer>
    </Container>
  )
}

const Container = styled.div`
`

export default Map