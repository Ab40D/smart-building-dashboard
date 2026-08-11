# Profile photo

Two ways to add your profile photo. The site picks it up automatically — no code change needed.

## Option 1 — local file (recommended for production)

1. Save your photo as `profile.jpg` (or `.png` / `.webp`).
2. Place it in this folder: `public/images/profile.jpg`.
3. The site reads it from `/images/profile.jpg`.

That's it.

## Option 2 — remote URL (fastest)

If you'd rather not commit a binary to the repo, edit `src/data/profile.ts`
and change the `photo` field to a full URL:

```ts
photo: 'https://your-cdn.example.com/your-photo.jpg',
```

The component accepts any URL and the same `<img onError>` placeholder
kicks in if the URL is broken.
