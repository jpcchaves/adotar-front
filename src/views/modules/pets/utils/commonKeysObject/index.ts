const commonKeysObject = <T>(obj1: Record<string, T>, obj2: Record<string, T>): Record<string, T> => {
  const commonKeys = Object.keys(obj1).filter(key => key in obj2)

  const result: Record<string, T> = commonKeys.reduce((acc, key) => {
    //@ts-ignore
    acc[key] = obj1[key]

    return acc
  }, {})

  return result
}

export { commonKeysObject }
