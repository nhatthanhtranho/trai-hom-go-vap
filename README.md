# Sinh Phúc Thọ Blog (Next.js Project)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It is a **sub-product of [Sinh Phúc Thọ](https://sinhphuctho.com)**, designed for creating and managing blog articles related to funeral services, cultural practices, and memorial content in Vietnam.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Project Structure

The project follows the **Next.js App Router** structure:

```
app/
  ├─ cam-nang/         # Blog posts (each folder contains a post with page.tsx)
  ├─ components/       # Reusable components (e.g., SimpleSlider, PostCard)
  ├─ layout.tsx        # Root layout
  ├─ page.tsx          # Homepage
  └─ globals.css       # Global Tailwind styles
```

* **Blog Posts**: Each post is a folder inside `app/cam-nang` with a `page.tsx`.
* **Components**: Includes sliders, cards, banners, and reusable UI elements.
* **Global Styles**: Tailwind CSS directives are in `globals.css`.

---

## Features

* Built with **Next.js 14+** (App Router, Server/Client components).
* Fully **responsive design** using **Tailwind CSS**.
* Optimized fonts with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), including Geist font.
* Blogging platform for **funeral services, cultural guides, and memorial content**.
* Easy to add new posts and categories.

---

## Adding a New Blog Post

1. Create a new folder in `app/cam-nang` with a unique slug:

   ```
   app/cam-nang/ten-bai-viet/page.tsx
   ```
2. Add your content inside `page.tsx` using JSX, Tailwind classes, and any reusable components.
3. Optionally, include a banner image using `SimpleSlider` or your own component.
4. Save and visit `http://localhost:3000/cam-nang/ten-bai-viet` to see the post.

---

## Learn More

To learn more about Next.js and improve your project:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - interactive tutorial.
* [Tailwind CSS Documentation](https://tailwindcss.com/docs) - customize styling and utilities.
* [Next.js GitHub repository](https://github.com/vercel/next.js) - source code and community feedback.

---

## Deployment

The easiest way to deploy your Next.js app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Website

🌐 **Official Website**: [https://sinhphuctho.com](https://sinhphuctho.com)
This project is a blogging platform for **Sinh Phúc Thọ**, focusing on funeral services, memorial practices, and cultural guides in Vietnam.

---

## Contributing

If you want to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request with a detailed description.

Feedback and contributions are welcome!

---

## License

This project is part of **Sinh Phúc Thọ** and is proprietary.
For commercial use or collaboration, please contact [https://sinhphuctho.com](https://sinhphuctho.com).
