export class ObjectUtils {
  private static readonly isEmptyObjectLength: number = 0

  static isEmpty(obj: object): boolean {
    return Object.keys(obj).length === this.isEmptyObjectLength
  }

  static hasAllKeys(object: Record<string, any>, keysToVerify: string[]): boolean {
    return keysToVerify.every(key => object.hasOwnProperty(key))
  }
}
