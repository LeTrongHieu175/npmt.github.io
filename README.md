# Portfolio / CV - Nguyễn Phan Mỹ Tiên

Website CV hiện đại xây bằng Vite + React + React Router + Tailwind CSS, hỗ trợ dark mode, animation chuyển trang (Framer Motion) và deploy GitHub Pages.

## Yêu cầu môi trường
- Node.js 18+ (khuyến nghị)

## Cài đặt & chạy dev
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
npm run preview
```

## Deploy GitHub Pages (GitHub Actions)
1. Đảm bảo `vite.config.ts` đã có:
   - `base: '/npmt.github.io/'`
2. Đẩy code lên repo `https://github.com/LeTrongHieu175/npmt.github.io.git`.
3. Vào **Settings → Pages** và chọn **Source: GitHub Actions**.
4. Workflow `deploy.yml` sẽ tự build & deploy mỗi khi push lên nhánh `main`.

## Hướng dẫn push lên GitHub
```bash
git init
git add .
git commit -m "init portfolio"
git remote add origin https://github.com/LeTrongHieu175/npmt.github.io.git
git branch -M main
git push -u origin main
```

## Ghi chú
- File CV nằm tại `public/cv.pdf`.
- Event data nằm tại `src/data/events.ts` (>=10 sự kiện).
- Dark mode lưu trạng thái tại `localStorage`.
