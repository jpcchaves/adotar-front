import { useState } from 'react'
import { SyntheticEvent } from 'react-draft-wysiwyg'

const useHandleTabChange = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTabIndex(() => newValue)
  }

  return {
    activeTabIndex,
    handleChange
  }
}

export default useHandleTabChange
