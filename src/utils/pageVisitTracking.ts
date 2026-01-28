import { sendBackgroundEmail } from './emailHelpers';

/**
 * Maps URL paths to readable page names for the notification system
 */
const getPageNameFromPath = (path: string): string => {
    if (path === '/' || path === '/id' || path === '/eng') return 'index';
    if (path.includes('/about')) return 'about-me';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/past-works')) return 'past-works';
    if (path.includes('/blog')) return 'blog';
    if (path.includes('/shop')) return 'shop';
    if (path.includes('/product/')) return 'product-detail';
    return path.split('/').filter(Boolean).pop() || 'index';
};

/**
 * Tracks a page visit by sending a background email
 */
export const trackPageVisit = (pathname: string) => {
    // Use a small delay to ensure page title/metadata is updated if needed
    setTimeout(() => {
        const pageName = getPageNameFromPath(pathname);
        const pageUrl = window.location.href;

        // Avoid tracking the same page multiple times if needed, 
        // but for "real-time" intelligence, tracking every load/navigation is fine.
        sendBackgroundEmail('page_visit', {
            pageName,
            pageUrl
        });
    }, 1000);
};
