# Render'da Deployment Ayarları

## Sorun
Render `/opt/render/project/src` dizininde `package.json` bulamıyor.

## Çözüm 1: Render Dashboard Ayarları (ÖNERİLEN)

1. **Render Dashboard'a gidin**
2. **Service Settings > Build & Deploy**'e tıklayın
3. **Root Directory** ayarını değiştirin:
   ```
   Root Directory: frontend
   ```

4. **Build Command:**
   ```bash
   yarn install && yarn build
   ```

5. **Publish Directory:**
   ```
   build
   ```

6. **Environment Variables** ekleyin:
   ```
   REACT_APP_BACKEND_URL = https://your-app-name.onrender.com
   ```

7. **Save Changes** ve **Manual Deploy** yapın

---

## Çözüm 2: render.yaml Dosyası (ADVANCED)

Alternatif olarak, repository root'una `render.yaml` ekleyin:

```yaml
services:
  - type: web
    name: venedik-pastanesi
    env: static
    buildCommand: cd frontend && yarn install && yarn build
    staticPublishPath: frontend/build
    envVars:
      - key: REACT_APP_BACKEND_URL
        value: https://venedik-pastanesi.onrender.com
```

---

## Çözüm 3: Netlify/Vercel (DAHA KOLAY)

Render yerine **Netlify** veya **Vercel** kullanmak daha kolay olabilir:

### Netlify:
1. netlify.com'a gidin
2. GitHub repo'nuzu bağlayın
3. Build settings:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
4. Deploy!

### Vercel:
1. vercel.com'a gidin  
2. GitHub repo'nuzu import edin
3. Framework Preset: `Create React App`
4. Root Directory: `frontend`
5. Deploy!

---

## Not
- Render ücretsiz plan: 750 saat/ay
- Netlify: Sınırsız bandwidth
- Vercel: 100GB bandwidth/ay

Netlify ve Vercel, static siteler için Render'dan daha optimize!
