# Subscription Email Setup

Fitur subscription sudah diimplementasikan dan akan mengirim email ke `rioanggaraclub@gmail.com` setiap kali ada pengunjung yang berlangganan.

## Setup Resend API Key

Untuk mengaktifkan pengiriman email, Anda perlu setup Resend API Key:

### 1. Buat Akun Resend (Gratis)

1. Kunjungi [resend.com](https://resend.com)
2. Daftar akun gratis (gratis untuk 100 email per hari)
3. Verifikasi email Anda

### 2. Dapatkan API Key

1. Login ke dashboard Resend
2. Buka menu **API Keys**
3. Klik **Create API Key**
4. Beri nama (misal: "Mangala Subscription")
5. Copy API key yang dibuat

### 3. Setup di Vercel

1. Buka project di Vercel Dashboard
2. Pilih **Settings** → **Environment Variables**
3. Tambahkan variable baru:
   - **Name**: `RESEND_API_KEY`
   - **Value**: [paste API key dari Resend]
   - Environment: Production, Preview, Development (pilih semua)
4. Klik **Save**

### 4. Deploy Ulang

Setelah menambahkan environment variable, deploy ulang website:
- Vercel akan otomatis redeploy, ATAU
- Di dashboard Vercel, klik **Deployments** → pilih deployment terbaru → klik **Redeploy**

## Cara Kerja

1. User mengisi form subscription di footer website dengan:
   - Nama depan
   - Email
2. Klik tombol "BERLANGGANAN"
3. Sistem akan mengirim email ke `rioanggaraclub@gmail.com` dengan informasi:
   - Nama depan subscriber
   - Email subscriber
   - Waktu subscription

## Testing

Setelah setup selesai, test dengan:
1. Buka website
2. Scroll ke footer
3. Isi form subscription
4. Klik "BERLANGGANAN"
5. Harusnya ada konfirmasi "Terima kasih telah berlangganan!"
6. Cek inbox `rioanggaraclub@gmail.com`

## Notes

- **Free tier Resend**: 100 email per hari, 3,000 per bulan
- **Sender email**: Default menggunakan `onboarding@resend.dev`. Untuk custom domain email, tambahkan domain di Resend dashboard
- **Email logs**: Bisa dilihat di Resend dashboard untuk tracking

## Troubleshooting

### Email tidak terkirim?
1. Pastikan RESEND_API_KEY sudah di-set di Vercel
2. Check Vercel Function Logs di dashboard
3. Check Resend Logs di dashboard Resend

### Error "Email service not configured"?
- Environment variable RESEND_API_KEY belum di-set atau salah

### Error 500?
- Check Vercel Function Logs untuk detail error
- Pastikan API key valid

## Custom Domain Email (Optional)

Jika ingin email dikirim dari domain sendiri (misal: `noreply@mangalaliving.com`):

1. Di Resend dashboard, tambahkan domain
2. Verifikasi domain dengan DNS records
3. Update kode di `/api/subscribe.ts`, ganti:
   ```typescript
   from: 'Mangala Living <onboarding@resend.dev>'
   ```
   menjadi:
   ```typescript
   from: 'Mangala Living <noreply@mangalaliving.com>'
   ```
