import { createStorage as create, CreateStorageParams } from './storageCache'
export type Options = Partial<CreateStorageParams>
export const createStorage = (options: Options = {}) => {
  return create()
}
export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, { ...options })
}
