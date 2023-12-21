export class ObjectUtils {
  private static readonly isEmptyObjectLength: number = 0

  static isEmpty(obj: object): boolean {
    return Object.keys(obj).length === this.isEmptyObjectLength
  }

  static isAnyErrorTouched(errors: Record<string, any>, touched: Record<string, boolean>): boolean {
    const errorKeys = Object.keys(errors)

    return errorKeys.some(key => touched.hasOwnProperty(key))
  }
}
