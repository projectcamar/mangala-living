# WhatsApp Click Tracking Implementation

## Overview
Sistem tracking untuk semua klik link WhatsApp (wa.me/+6288801146881) di seluruh website. Setiap kali user mengklik link WhatsApp, sistem akan mengirim email notifikasi ke rioanggaraclub@gmail.com.

## Features Implemented

### 1. Utility Function (`whatsappTracking.ts`)
- `trackWhatsAppClick()`: Fungsi utama untuk tracking klik WhatsApp
- `handleWhatsAppClick()`: Helper function untuk wrap onClick handlers
- `createTrackedWhatsAppUrl()`: Membuat URL WhatsApp dengan tracking
- `withWhatsAppTracking()`: Higher-order function untuk wrap handlers

### 2. Global Tracking (`globalWhatsAppTracking.ts`)
- Automatically tracks ALL WhatsApp links across the website
- Detects clicks on dynamic content (blog posts, FAQ, chatbot messages)
- Identifies the source/context of each click
- No need to manually add tracking to every link

### 3. API Endpoint (`api/subscribe.ts`)
- New notification type: `whatsapp_click`
- Sends formatted email with click information:
  - Source (where the link was clicked)
  - Page URL
  - Language
  - Timestamp
  - Additional context (product name, etc.)

### 4. Email Notification Template
Beautiful HTML email with:
- WhatsApp green gradient header
- Click source information
- Page URL (clickable)
- Language detection
- Timestamp in Indonesia timezone
- Optional product information

## Tracked Locations

### Manual Tracking (Explicit onClick handlers):
1. **Footer**
   - `footer_contact_info`: Link di contact info section
   - `footer_workshop_address`: Link di workshop address

2. **Chatbot**
   - `chatbot_continue_to_whatsapp`: Button "Lanjutkan di WhatsApp"

3. **Contact Page**
   - `contact_form_submit`: When user submits contact form
   - `contact_page_workshop_address`: Workshop address link

4. **Product Detail Page**
   - `product_order_now`: Button "Order Now" di halaman product

5. **Furniture Besi Custom Bekasi Landing Page**
   - `furniture_besi_custom_hero_cta`: Hero CTA button
   - `furniture_besi_custom_quotation`: Price list button
   - `furniture_besi_custom_contact_card`: Contact card
   - `furniture_besi_custom_promo_cta`: Promo CTA button

6. **Custom Order Page**
   - `custom_order_page_cta`: Main CTA button

7. **Partnership Page**
   - `partnership_page_cta`: Main CTA button
   - `partnership_page_contact_info`: Contact info link

8. **Terms of Service Page**
   - `terms_of_service_contact`: Contact information link

9. **Shipping Information Page**
   - `shipping_info_contact`: Contact information link

### Automatic Global Tracking:
- All WhatsApp links in blog content
- All WhatsApp links in FAQ sections
- All WhatsApp links in chatbot messages
- Any dynamic content with WhatsApp links
- Links in footer, header, and other global components

## How It Works

1. **Manual Tracking**: 
   - Specific components have `onClick={() => trackWhatsAppClick('source_name')}` added to their WhatsApp links
   - This provides explicit context about where the click came from

2. **Global Tracking**:
   - Event listener attached to document captures all clicks
   - Checks if clicked element is a WhatsApp link
   - Automatically determines source based on DOM structure
   - Sends tracking data in background

3. **Email Notification**:
   - Tracking data sent to `/api/subscribe` endpoint
   - API creates formatted email
   - Email sent via Resend API to rioanggaraclub@gmail.com
   - Beautiful HTML template with all click details

## Testing

To test the tracking:

1. **Local Testing**:
   - Run the development server
   - Click any WhatsApp link on the website
   - Check browser console for "WhatsApp click tracked" message

2. **Production Testing**:
   - Deploy to production
   - Click WhatsApp links from different pages
   - Check email at rioanggaraclub@gmail.com for notifications

3. **Test Different Sources**:
   - Footer links
   - Blog article links
   - Product "Order Now" buttons
   - Chatbot "Continue to WhatsApp"
   - Landing page CTAs
   - Contact form submissions

## Email Template Preview

Subject: `WhatsApp Link Clicked: [source]`

Content includes:
- Click source (e.g., "footer_contact_info", "blog_content")
- Page URL where the click happened
- Language (Indonesian/English)
- WhatsApp number (+6288801146881)
- Timestamp (Jakarta timezone)
- Additional context if available

## Files Modified/Created

### Created:
- `/workspace/src/utils/whatsappTracking.ts`
- `/workspace/src/utils/globalWhatsAppTracking.ts`
- `/workspace/WHATSAPP_TRACKING_IMPLEMENTATION.md`

### Modified:
- `/workspace/api/subscribe.ts` - Added whatsapp_click notification type
- `/workspace/src/App.tsx` - Initialize global tracking
- `/workspace/src/components/Footer.tsx` - Added tracking to links
- `/workspace/src/components/WhatsAppButton.tsx` - Added tracking to chatbot
- `/workspace/src/pages/Contact.tsx` - Added tracking to form & links
- `/workspace/src/pages/ProductDetail.tsx` - Added tracking to Order Now button
- `/workspace/src/pages/FurnitureBesiCustomBekasi.tsx` - Added tracking to all CTAs
- `/workspace/src/pages/CustomOrder.tsx` - Added tracking to CTA
- `/workspace/src/pages/Partnership.tsx` - Added tracking to CTAs
- `/workspace/src/pages/TermsOfService.tsx` - Added tracking to contact link
- `/workspace/src/pages/ShippingInformation.tsx` - Added tracking to contact link

## Environment Variables Required

Make sure `RESEND_API_KEY` is set in your environment for email notifications to work.

## Notes

- Tracking is non-blocking - won't prevent WhatsApp link from working
- Email notifications sent in background
- Failed tracking won't affect user experience
- All timestamps in Jakarta timezone (GMT+7)
- Email template uses responsive design for mobile viewing

## Future Enhancements

Possible improvements:
1. Dashboard to view click analytics
2. Store tracking data in database
3. Add A/B testing for different link placements
4. Track conversion rates from WhatsApp clicks
5. Add user session data to tracking
