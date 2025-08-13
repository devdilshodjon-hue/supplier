# Netlify ga Deploy Qilish Qo'llanmasi

## 1-qadam: Loyihani tayyorlash

```bash
# Dependencies o'rnatish
npm install

# Images optimizatsiya qilish (agar rasm fayllar mavjud bo'lsa)
npm run optimize:images

# Production build yaratish
npm run build:production
```

## 2-qadam: Netlify Deploy

### A) Netlify CLI orqali (tavsiya etiladi)

```bash
# Netlify CLI o'rnatish
npm install -g netlify-cli

# Netlify ga login qilish
netlify login

# Loyihani deploy qilish
netlify deploy --prod --dir=dist
```

### B) Netlify Web Interface orqali

1. [Netlify.com](https://netlify.com) ga kiring
2. "New site from Git" tugmasini bosing
3. GitHub/GitLab repositoryni ulang
4. Build sozlamalari:
   - **Build command:** `npm run build:production`
   - **Publish directory:** `dist`
   - **Node version:** `18` (Environment variables da)

## 3-qadam: Environment Variables (Netlify Dashboard)

```
NODE_VERSION=18
NPM_VERSION=9
```

## 4-qadam: Custom Domain (ixtiyoriy)

1. Netlify Dashboard → Domain Settings
2. "Add custom domain" tugmasini bosing
3. DNS sozlamalarini o'rnating:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

## Performance Optimizatsiyalar

### Mavjud optimizatsiyalar:
- ✅ Bundle size minimization
- ✅ Code splitting
- ✅ Image optimization (WebP, AVIF)
- ✅ Text compression (Gzip, Brotli)
- ✅ Critical CSS inlining
- ✅ Resource preloading
- ✅ Security headers
- ✅ CDN caching

### Lighthouse Score maqsadi:
- **Performance:** 95+ 🎯
- **Accessibility:** 100 🎯  
- **Best Practices:** 100 🎯
- **SEO:** 100 🎯

## Monitoring va Analytics

### Netlify Analytics
```bash
# Netlify Analytics yoqish
netlify open --admin
# Dashboard → Analytics → Enable
```

### Web Vitals Monitoring
```javascript
// main.tsx da mavjud
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Deploy Scripts

```json
{
  "scripts": {
    "build:production": "npm run optimize:images && npm run build",
    "deploy:netlify": "netlify deploy --prod --dir=dist",
    "deploy:preview": "netlify deploy --dir=dist"
  }
}
```

## Troubleshooting

### Mashhur muammolar:

1. **Build fail bo'lsa:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Images ko'rinmasa:**
   - `public/images/` papkani tekshiring
   - Image pathlarni tekshiring
   - `npm run optimize:images` ni ishga tushiring

3. **Performance past bo'lsa:**
   ```bash
   # Bundle analyzer
   npm run build:analyze
   # Browser da dist/bundle-analysis.html ni oching
   ```

## Post-Deploy Checklist

- [ ] Site yuklanadi
- [ ] Images ko'rinadi
- [ ] Forms ishlaydi
- [ ] Theme toggle ishlaydi
- [ ] Mobile responsive
- [ ] Lighthouse score 95+
- [ ] Security headers mavjud
- [ ] SEO meta tags mavjud

## Support

Masala yuzaga kelsa:
- GitHub Issues: [repository-link]
- Email: dev.dilshodjon@gmail.com
- Telegram: @dilshodjon_dev
