

// A in memory store for caching data
// It can be enhanced to support expiration, to handle concurrency, async operations and other features
// Or we can use something like ReactQuery to manage cache
export class MemoryCache<T> {
  private cache: Map<string, T> = new Map()

  get(key: string) {
    return this.cache.get(key)
  }

  set(key: string, value: T) {
    this.cache.set(key, value)
  }

  delete(key: string) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }
}