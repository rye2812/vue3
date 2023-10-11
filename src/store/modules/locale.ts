import type { LocaleSetting } from '../../../types/config.d'
import { defineStore } from 'pinia'
import { store } from '../../store'
import { createLocalStorage } from '../../locales/utils/cache'
import { LOCALE_KEY } from '../../enums/cacheEnum'
const ls = createLocalStorage()
const lsLocaleSetting = ls.get(LOCALE_KEY) as LocaleSetting
interface LocaleState {
  localInfo: LocaleSetting
}
export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
})

export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
