import type { EncryptionParams } from '../../cipher'
// extends继承
export interface CreateStorageParams extends EncryptionParams {}

export const createStorage = ({}: Partial<CreateStorageParams> = {}) => {
  //使用Partial就可以解决类型声明不全时会报错的问题
  const WebStorage = class WebStorage {
    get(key: string): any {}
  }
  return new WebStorage()
}
