# ✅ Quick Action Checklist - Mangala Living

## 🚨 LAKUKAN HARI INI (URGENT!)

### ✓ Step 1: Deploy ke Production (5 menit)
```bash
cd /workspace
git add .
git commit -m "Fix: ItemList schema structure & sitemap lastmod dates"
git push origin cursor/fix-website-indexing-and-schema-warnings-b6f7
```

Atau kalau pakai Vercel CLI:
```bash
vercel --prod
```

---

### ✓ Step 2: Submit Sitemap ke Google Search Console (5 menit)

1. **Buka**: https://search.google.com/search-console
2. **Login** dengan akun Google yang punya akses
3. **Pilih property**: `mangala-living.com`
4. **Klik menu**: "Sitemaps" (di sidebar kiri)
5. **Hapus sitemap lama** kalau ada
6. **Ketik**: `sitemap.xml` di kolom "Add a new sitemap"
7. **Klik**: "Submit"

✅ Tunggu konfirmasi "Sitemap submitted successfully"

---

### ✓ Step 3: Request Indexing untuk Halaman Utama (10 menit)

Di Google Search Console, buka **URL Inspection Tool** (di atas):

#### Request index untuk URL ini (satu per satu):

1. `https://mangala-living.com/`
   - Paste URL → Enter
   - Tunggu test selesai
   - Klik "Request Indexing"
   - Tunggu konfirmasi (1-2 menit)

2. `https://mangala-living.com/shop`
   - Ulangi langkah yang sama

3. `https://mangala-living.com/blog`
   - Ulangi langkah yang sama

4. `https://mangala-living.com/about`
   - Ulangi langkah yang sama

5. `https://mangala-living.com/contact-us`
   - Ulangi langkah yang sama

✅ Total waktu: ~10 menit

---

### ✓ Step 4: Verify Fix dengan Schema Validator (2 menit)

1. **Buka**: https://validator.schema.org/
2. **Pilih tab**: "Fetch URL"
3. **Ketik**: `https://mangala-living.com/`
4. **Klik**: "Run Test"

**Expected Result**:
- ✅ "No errors found"
- ✅ 0 warnings untuk ItemList
- ✅ Muncul structured data: LocalBusiness, ItemList, WebSite, FAQPage

**Kalau masih ada warning**: tunggu 5-10 menit setelah deploy, lalu test lagi (cache belum clear)

---

## 📊 Cara Monitor Progress (Mulai Besok)

### Setiap Hari (Hari 1-7):
**Google Search Console > Coverage**
- Cek berapa halaman yang "Valid" (angka ini harus naik)
- Cek "Excluded" (angka ini harus turun)

### Setiap Minggu:
**Google Search Console > Sitemaps**
- Cek "Discovered" vs "Indexed"
- Target: Discovered 160+, Indexed naik bertahap

### Setiap 2 Minggu:
**Google Search Console > Performance**
- Cek Total Impressions (harus naik)
- Cek Total Clicks (harus naik)
- Cek Average Position (harus turun = lebih bagus)

---

## 🎯 Expected Timeline

| Waktu | Target | Cara Cek |
|-------|--------|----------|
| **Hari 1-2** | Schema warnings hilang | Schema validator |
| **Hari 3-7** | Google mulai crawl sitemap | GSC > Sitemaps |
| **Minggu 2** | 30-50 halaman indexed | GSC > Coverage |
| **Minggu 3-4** | 50-100 halaman indexed | GSC > Coverage |
| **Bulan 2-3** | 120-150+ halaman indexed | GSC > Coverage |

---

## 🔴 Red Flags (Kalau Ini Terjadi, Hubungi Developer)

❌ **Sitemap error di Google Search Console**
- Status: "Sitemap could not be read"
- **Action**: Cek format sitemap.xml

❌ **Schema errors bertambah**
- Lihat di GSC > Enhancements
- **Action**: Test dengan Rich Results Test

❌ **Indexed pages tidak naik setelah 2 minggu**
- Masih stuck di 20-30 halaman
- **Action**: Review Coverage errors di GSC

❌ **Mobile Usability errors**
- Muncul error di GSC
- **Action**: Test website di mobile device

---

## ✅ Success Indicators

✅ **Schema Validator**: No errors, 0 warnings
✅ **GSC Sitemaps**: Status "Success", Discovered 160+
✅ **GSC Coverage**: "Valid" pages naik setiap minggu
✅ **GSC Performance**: Impressions naik setiap minggu

---

## 📱 Contact Info (Kalau Butuh Bantuan)

**Mangala Living**
- WhatsApp: 0852-1207-8467
- Email: info@mangala-living.com

**Google Search Console Help**
- https://support.google.com/webmasters

**Schema.org Documentation**
- https://schema.org/ItemList
- https://schema.org/Product

---

## 🎉 Done!

Kalau sudah selesai 4 steps di atas, **DONE!** 

Tinggal tunggu dan monitor hasilnya setiap minggu di Google Search Console.

**Good luck! 🚀**

---

**Created**: 31 Oktober 2025
**Last Updated**: 31 Oktober 2025
