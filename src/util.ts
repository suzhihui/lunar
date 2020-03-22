export default class CacheUtil {
  static current: any;
  public cache: any = null
  static setCurrent(key: any, value: any = ''){
    if(this.current)
  }
  get(key:string) {
    if(!this.cache) this.cache = {}
    return this.cache[key]
  }
  set(key:string, value:string = '') {
    if(!this.cache) this.cache = {}
    this.cache[key] = value
    return this.cache[key]
  }
  clear() {
    this.cache = null
  }
}