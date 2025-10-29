import { useState, useEffect } from 'react';
import { detectLanguageFromIP } from '../i18n';

interface IPDetectionResult {
  country: string;
  countryCode: string;
  language: string;
  loading: boolean;
  error: string | null;
}

export const useIPDetection = (): IPDetectionResult => {
  const [result, setResult] = useState<IPDetectionResult>({
    country: '',
    countryCode: '',
    language: 'en',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const detectLocation = async () => {
      try {
        setResult(prev => ({ ...prev, loading: true, error: null }));
        
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.reason || 'Failed to detect location');
        }

        const detectedLanguage = await detectLanguageFromIP();
        
        setResult({
          country: data.country_name || '',
          countryCode: data.country_code || '',
          language: detectedLanguage,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.warn('IP detection failed:', error);
        setResult({
          country: '',
          countryCode: '',
          language: 'en', // Fallback to English
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    };

    detectLocation();
  }, []);

  return result;
};