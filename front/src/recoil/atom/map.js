import { atom } from 'recoil'

export const searchIpState = atom({
  key: 'searchIpState',
  default: ''
})

export const mapObjState = atom({
  key: 'mapObjState',
  default: {}
})

export const searchResState = atom({
  key: 'searchResState',
  default: []
})