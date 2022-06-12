import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

import { searchIpState } from '@recoil/atom/map'

const SearchInput = ({ onSearch }) => {

  const [searchIp, setSearchIp] = useRecoilState(searchIpState)

  const onChange = e => {
    setSearchIp(() => e.target.value)
  }

  const onEnterPress = e => {
    if(e.key === 'Enter')
      onSearch()
  }

  return (
    <Container>
      <InputBox>
        <InputField
          type='text'
          value={searchIp}
          onChange={onChange}
          onKeyPress={onEnterPress}
          placeholder='Must Eat 지도 검색'
        >
        </InputField>
        <SearchButton onClick={onSearch}>
          <AiOutlineSearch size={24} />
        </SearchButton>
      </InputBox>
    </Container>
  )
}


const Container = styled.div`
  width: 340px;
  padding: 15px 25px;
`

const InputBox = styled.div`
  height: 46px;
  padding: 0px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
  position: relative;
`

const InputField = styled.input`
  border: 0 none;
  outline: none;
  height: 19px;
  line-height: 1.2;
  padding: 12px 16px 15px;
  font-size: 16px;
`

const SearchButton = styled.button`
  position: absolute;
  height: 46px;
  padding: 10px 0;
  right: 15px;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: silver;
    &:hover {
      color: #3C4043;
    }
  }
`



export default SearchInput