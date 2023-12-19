export class ObjectUtils {
  private static readonly isEmptyObjectLength: number = 0

  static isEmpty(obj: object): boolean {
    return Object.keys(obj).length === this.isEmptyObjectLength
  }
}
