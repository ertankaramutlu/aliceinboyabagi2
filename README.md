# Alice in Boyabağı

Kamp, glamping, plaj ve bar için Türkçe tanıtım sitesi. Astro + Tailwind.

```sh
npm install
npm run dev
```

Rezervasyon WhatsApp üzerinden. Numara `src/data/site.ts` içinde.

Blog Sanity’den okunur (`src/content/blog` yedek). Dataset private ise Vercel’e `SANITY_API_READ_TOKEN` ekle (PUBLIC değil).

Studio kaydı sonrası Vercel’in yeniden build etmesi için:

1. Vercel → Project Settings → Git → Deploy Hooks → Production / `main` hook oluştur.
2. Sanity → [API webhooks](https://www.sanity.io/manage/project/aubx2pik/api/webhooks) → hook URL’sini yapıştır.
   Trigger: Create, Update, Delete. Filter: `_type == "post"`.
