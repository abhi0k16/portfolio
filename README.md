# Abhinav Kumar — Software Engineer

Personal site for Abhinav Kumar, Specialist at PwC. The copy comes from his resume, the AWS Certified Developer – Associate certificate, and public GitHub repositories under [abhi0k16](https://github.com/abhi0k16).

## Run locally

```bash
git clone https://github.com/abhi0k16/portfolio.git
cd portfolio
npm install
npm run dev -- --port 3921
```

Open [http://127.0.0.1:3921](http://127.0.0.1:3921).

```bash
npm run lint
npm run build
npm start -- --port 3921
```

The resume download is `public/resume.pdf`.

## Push to GitHub

From this folder, with the GitHub CLI already signed in as `abhi0k16`:

```bash
git add .
git commit -m "Add the engineering portfolio"
git push -u origin main
```

The remote is [github.com/abhi0k16/portfolio](https://github.com/abhi0k16/portfolio).

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import `abhi0k16/portfolio`.
2. Framework preset: Next.js. Leave the root directory as the repository root.
3. No environment variables are required.
4. Deploy. The resume stays available at `/resume.pdf`.
