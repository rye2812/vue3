import { computed } from 'vue'
import { useLocaleStoreWithOut } from '../store/modules/locale'

export function useLocale() {
  const localeStore = useLocaleStoreWithOut()
  const getAntLocale = computed((): any => {
    return {}
  })
  return {
    getAntLocale,
  }
}
