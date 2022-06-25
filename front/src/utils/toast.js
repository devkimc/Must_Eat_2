import { toast } from 'react-toastify';

export const infoToast = (position, text) => {
  const toastPosition = getToastPosition(position)

  toast.info(text, {
    position: toastPosition,
    autoClose: 1000,
    closeOnClick: true,
    progress: undefined
  })
}

export const successToast = (position, text) => {
  const toastPosition = getToastPosition(position)

  toast.success(text, {
    position: toastPosition,
    autoClose: 1000,
    closeOnClick: true,
    progress: undefined
  })
}

export const warningToast = (position, text) => {
  const toastPosition = getToastPosition(position)
  console.log(position + '|' + text)

  toast.warning(text, {
    position: toastPosition,
    autoClose: 1000,
    closeOnClick: true,
    progress: undefined
  })
}

export const errorToast = (position, text) => {
  const toastPosition = getToastPosition(position)

  toast.error(text, {
    position: toastPosition,
    autoClose: 1000,
    closeOnClick: true,
    progress: undefined
  })
}

const getToastPosition = (position) => {
  let toastPosition

  if(position === 'top-left') {
    toastPosition = toast.POSITION.TOP_LEFT
  } else if (position === 'top-right') {
    toastPosition = toast.POSITION.TOP_RIGHT
  } else if (position === 'top-center') {
    toastPosition = toast.POSITION.TOP_CENTER
  }  else if (position === 'bottom-left') {
    toastPosition = toast.POSITION.BOTTOM_LEFT
  } else if (position === 'bottom-right') {
    toastPosition = toast.POSITION.BOTTOM_RIGHT
  } else if (position === 'bottom-center') {
    toastPosition = toast.POSITION.BOTTOM_CENTER
  } else {
    alert('toastPosition Error')
  }

  return toastPosition
}

