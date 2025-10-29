/**
 * Utility functions for sending background emails
 */

/**
 * Send email notification to rioanggaraclub@gmail.com in the background
 * This function does not block the main action and silently handles errors
 */
export const sendBackgroundEmail = async (
  type: 'order_now' | 'catalog_download',
  data: {
    productName?: string
    productSlug?: string
    productPrice?: string
    productCategory?: string
    productUrl?: string
    firstName?: string
    email?: string
    whatsapp?: string
  }
) => {
  // Don't await - fire and forget
  fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: data.firstName || 'Visitor',
      email: data.email || 'unknown@email.com',
      whatsapp: data.whatsapp || '',
      notificationType: type,
      ...(type === 'order_now' && {
        productName: data.productName,
        productSlug: data.productSlug,
        productPrice: data.productPrice,
        productCategory: data.productCategory,
        productUrl: data.productUrl || window.location.href,
      }),
    }),
  }).catch((error) => {
    // Silently log error without blocking user action
    console.error('Background email error:', error)
  })
}