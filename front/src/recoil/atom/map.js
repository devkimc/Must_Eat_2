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

export const loadTargetState = atom({
  key: 'loadTargetState',
  default: null
})

export const isLoadedState = atom({
  key: 'isLoadedState',
  default: false
})