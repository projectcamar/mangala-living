/**
 * Category Translation Utility
 * Translates category names across all supported languages
 */

import { type LanguageCode } from './languageManager'

export const CATEGORY_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'New Arrivals': {
    id: 'Produk Baru',
    en: 'New Arrivals',
    ar: 'الوافدون الجدد',
    zh: '新品',
    ja: '新着',
    es: 'Novedades',
    fr: 'Nouveautés',
    ko: '신상품'
  },
  'Lounge Set': {
    id: 'Set Lounge',
    en: 'Lounge Set',
    ar: 'طقم صالة',
    zh: '休息区套装',
    ja: 'ラウンジセット',
    es: 'Set de Sala',
    fr: 'Set de Salon',
    ko: '라운지 세트'
  },
  'Sofa Bench': {
    id: 'Sofa Bench',
    en: 'Sofa Bench',
    ar: 'أريكة مقعد',
    zh: '沙发长椅',
    ja: 'ソファベンチ',
    es: 'Sofá Banco',
    fr: 'Banc Canapé',
    ko: '소파 벤치'
  },
  'Dining Set': {
    id: 'Set Makan',
    en: 'Dining Set',
    ar: 'طقم طعام',
    zh: '餐桌套装',
    ja: 'ダイニングセット',
    es: 'Juego de Comedor',
    fr: 'Ensemble Salle à Manger',
    ko: '다이닝 세트'
  },
  'Bar Set': {
    id: 'Set Bar',
    en: 'Bar Set',
    ar: 'طقم بار',
    zh: '吧台套装',
    ja: 'バーセット',
    es: 'Set de Bar',
    fr: 'Set de Bar',
    ko: '바 세트'
  },
  'Outdoor': {
    id: 'Outdoor',
    en: 'Outdoor',
    ar: 'خارجي',
    zh: '户外',
    ja: 'アウトドア',
    es: 'Exterior',
    fr: 'Extérieur',
    ko: '야외'
  },
  'Daybed': {
    id: 'Daybed',
    en: 'Daybed',
    ar: 'سرير نهاري',
    zh: '日间床',
    ja: 'デイベッド',
    es: 'Diván',
    fr: 'Méridienne',
    ko: '데이베드'
  },
  'Storage': {
    id: 'Storage',
    en: 'Storage',
    ar: 'تخزين',
    zh: '储物',
    ja: '収納',
    es: 'Almacenamiento',
    fr: 'Rangement',
    ko: '수납'
  },
  'Tables': {
    id: 'Meja',
    en: 'Tables',
    ar: 'طاولات',
    zh: '桌子',
    ja: 'テーブル',
    es: 'Mesas',
    fr: 'Tables',
    ko: '테이블'
  },
  'Dine Table': {
    id: 'Meja Makan',
    en: 'Dining Table',
    ar: 'طاولة طعام',
    zh: '餐桌',
    ja: 'ダイニングテーブル',
    es: 'Mesa de Comedor',
    fr: 'Table à Manger',
    ko: '식탁'
  }
}

/**
 * Translate a single category name
 */
export const translateCategory = (category: string, language: LanguageCode): string => {
  const translations = CATEGORY_TRANSLATIONS[category]
  if (translations) {
    return translations[language] ?? translations.en ?? category
  }
  return category
}

/**
 * Translate multiple categories (joined with separator)
 */
export const translateCategories = (
  categories: string[],
  language: LanguageCode,
  separator: string = ', '
): string => {
  return categories.map(cat => translateCategory(cat, language)).join(separator)
}
