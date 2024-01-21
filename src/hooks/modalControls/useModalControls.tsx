import { useState } from 'react'

const useModalControls = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleModal = () => {
    setIsOpen(prevState => !prevState)
  }

  return { isOpen, toggleModal }
}

export default useModalControls
