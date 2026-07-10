# How to Maintain & Deploy Your Résumé

## Updating Your Resume Content

All personal content lives in one file:

```
src/data/resume.ts
```

Edit that file and push to `main`. The CI/CD pipeline will automatically rebuild and push the new Docker image. Re-deploy on K3S (see below).

### Adding a new section

1. Add a TypeScript interface in `src/types/resume.ts`
2. Add the field to `ResumeData` in the same file
3. Add your data to `src/data/resume.ts`
4. Create `src/components/sections/YourSection.tsx`
5. Import and render it in `src/App.tsx`

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. You can preview it with `npm run preview`.

---

## CI/CD

On every push to `main`:
1. GitHub Actions runs the build + type-check
2. Builds a Docker image and pushes it to GHCR as:
   - `ghcr.io/YOURUSERNAME/resume:latest`
   - `ghcr.io/YOURUSERNAME/resume:sha-<commit>`

No secrets needed beyond the default `GITHUB_TOKEN`.

---

## K3S Deployment

### First-time setup

1. **Edit `k8s/manifest.yaml`** — replace:
   - `ghcr.io/GITHUB_USERNAME/resume:latest` → your actual image path
   - `resume.yourdomain.com` → your actual domain
   - Verify `cert-manager.io/cluster-issuer` matches your issuer name

2. **Create GHCR pull secret** (so K3S can pull the image):

```bash
kubectl create secret docker-registry ghcr-secret \
  --namespace resume \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GHCR_PAT \
  --docker-email=your@email.com
```

3. **Apply the manifest**:

```bash
kubectl apply -f k8s/manifest.yaml
```

### Re-deploying after a new image

```bash
# Trigger a rolling restart to pull the latest image
kubectl rollout restart deployment/resume -n resume

# Or apply the manifest again if you changed it
kubectl apply -f k8s/manifest.yaml
```

### Useful commands

```bash
kubectl get pods -n resume
kubectl logs -n resume deployment/resume
kubectl describe ingress -n resume
```

---

## PDF Export & Download

### How it works
The "Download PDF" button in the sticky header links directly to a hosted PDF file on a CDN — no server-side processing, no overhead.

### Workflow
1. Print your résumé from the browser (`Print` button → Save as PDF)
2. Upload the PDF to your CDN (Cloudflare R2, AWS S3, Azure Blob, etc.)
3. Copy the public URL of the file
4. Set `pdfUrl` in `src/data/resume.ts`:

```ts
pdfUrl: 'https://your-cdn.example.com/your-name-resume.pdf',
```

5. Push to `main` — CI rebuilds and the "Download PDF" button appears automatically.

> The `Print` button (browser print dialog) is always visible and is how you generate new PDFs when you update your content.

---
