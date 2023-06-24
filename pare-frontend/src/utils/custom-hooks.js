import { useEffect } from 'react'
import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalProps, setModalProps] = useState({})

  const openModal = (props) => {
    setIsOpen(true)
    setModalProps(props)
  }

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    openModal,
    closeModal,
    modalProps,
  }
}

export function useMediaQuery(query) {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue))
      return defaultValue
    }
  })

  // this method update our localStorage and our state
  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue
    if (typeof valueOrFn === 'function') {
      const fn = valueOrFn
      newValue = fn(localStorageValue)
    } else {
      newValue = valueOrFn
    }
    localStorage.setItem(key, JSON.stringify(newValue))
    setLocalStorageValue(newValue)
  }
  return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage
