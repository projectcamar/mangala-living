import React from 'react'
import { type LanguageCode } from '../data/products'
import './LanguageTabs.css'

interface LanguageInfo {
    code: LanguageCode
    name: string
    nativeName: string
    flag: string
}

const LANGUAGES: LanguageInfo[] = [
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' }
]

interface LanguageTabsProps {
    selectedLanguage: LanguageCode
    onLanguageChange: (lang: LanguageCode) => void
    completionStatus?: Partial<Record<LanguageCode, boolean>>
}

const LanguageTabs: React.FC<LanguageTabsProps> = ({
    selectedLanguage,
    onLanguageChange,
    completionStatus = {}
}) => {
    return (
        <div className="language-tabs-container">
            <div className="language-tabs">
                {LANGUAGES.map(lang => {
                    const isActive = selectedLanguage === lang.code
                    const isCompleted = completionStatus[lang.code] || false

                    return (
                        <button
                            key={lang.code}
                            className={`language-tab ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                            onClick={() => onLanguageChange(lang.code)}
                            title={`${lang.name} - ${lang.nativeName}`}
                        >
                            <span className="tab-flag">{lang.flag}</span>
                            <span className="tab-name">{lang.nativeName}</span>
                            <span className="tab-code">{lang.code.toUpperCase()}</span>
                            {isCompleted && <span className="tab-check">✓</span>}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default LanguageTabs
export { LANGUAGES, type LanguageInfo }
