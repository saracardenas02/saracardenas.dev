# Deploy a Vercel

## Opción 1: Deploy manual desde Vercel Dashboard (más simple)

1. Ir a vercel.com → Sign up con GitHub
2. New Project → Import `Saracardenas02/saracardenas.dev`
3. Framework: **Other**
4. Build Command: `npm run build`
5. Output Directory: `dist/saracardenas-dev/browser`
6. Deploy → obtienes URL pública inmediatamente

## Opción 2: GitHub Actions automático (requiere configurar secrets)

1. En Vercel → Settings → Tokens → Create → copiar el token
2. En Vercel → Project → Settings → copiar Project ID y Org ID
3. En GitHub → repo `saracardenas.dev` → Settings → Secrets → Actions → agregar:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. Cada push a `main` hace deploy automático

## Dominio personalizado (cuando tengas saracardenas.dev)

En Vercel → Project → Settings → Domains → Add → `saracardenas.dev`
Seguir las instrucciones para Cloudflare DNS.

## Formspree (para el formulario de contacto)

1. Ir a formspree.io → Sign up gratis
2. New Form → copiar el Form ID
3. En `src/app/features/contact/contact.component.ts` reemplazar:
   `https://formspree.io/f/FORMSPREE_ID`
   con tu ID real, ej: `https://formspree.io/f/xyzabc123`
4. Push → deploy automático
