[![Netlify Status](https://api.netlify.com/api/v1/badges/efac8f9f-6e6c-42d0-8a7a-f77452736e01/deploy-status)](https://app.netlify.com/sites/romantic-ritchie-553912/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributing Guide
### Adding Posts to `/lessons`
Posts are written in markdown and are found in the `content` directory

[For help on writing Markdown](https://www.markdownguide.org/basic-syntax)
#### Frontmatter for Lessons
* title: (string)
    * The article's title displayed in SEO and on the page
* date: (date)
    * The date of the lesson
* tags: ([string])
    * A list of tags that posts can be filted by
* youtubeUrl: (string)
    * The url to the lesson's YouTube video
* emoji: (string)
    * A single emoji that represents the theme of the lesson

### Adding Members to `/about-us`
Members are also stored in markdown so their biography can be written in markdown.

For an example, see `content/members/zach-lefkovitz.md`
#### Frontmatter for Members
* full_name: (string)
    * The member's full name
* *optional* title: (string)
    * The member's title in the club ex: Leader
* profile_picture: (string)
    * The path to the member's profile picture
    * To learn about Next.js static file serving, [visit this page](https://nextjs.org/docs/basic-features/static-file-serving)
* class: ("Senior" | "Junior" | "Sophomore" | "Freshman")
    * The member's class in school

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
