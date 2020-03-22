export default class CacheUtil {
  static current: any;
  static setCurrent(key: any, value: any){
    if(this.current)
  }
  get(key:string) {
    if(!cache) cache = {}
    return cache[key]
  }
  set(key:string, value:string) {
    if(!cache) cache = {}
    cache[key] = value
    return cache[key]
  }
  clear() {
    cache = null
  }
}