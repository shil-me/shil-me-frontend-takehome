# Shil.me Front-end Engineer Take-home Project (2022)

👋 Hey there! Congrats for making it this far, that means we really liked you and thought you would make a great addition for our amazing team. This project is designed to see if your frontend abilities are complementary to ours, by putting you through three tasks similar to what you will face day to day at Shil.me.

## What We're Looking For

- **Independence / Autonomy:** We value all of our team members taking initiative and working with minimal management and deadlines.
- **Resourcefulness:** When faced with a problem, we want to see your process in solving it, even if you don't end up being able to solve it.
- **Obsession:** Everyone in the Shil.me Team is striving for perfection. There's a way to finish all of these tasks in a minimal way, and a way to ✨finish✨ these tasks in a way that's over and beyond. We wanna see that special something.

## Tasks
The project consists of three tasks ranging at three different difficulty levels.

### Task 1: Programmatic component creation [INTERMEDIATE]
!sudo make ui

**Task**
Make a component which takes in a `config` and builds a UI based on that config.

**Flow**
1. App.js takes a configuration as props such as:

```
{
      title: "Mint NFT",
      description: "Select how many NFTs from the collection you’d like to mint.",
      style: {
         backgroundColor: '#F2F2F2',
         color: 'black'
      },
      components: [
         {
            type: "input-number",
            placeholder: 42,
            title: "Number of NFTs",
            description: null
         },
         {
            type: 'button',
            title: 'Mint!',
            style: {
               backgroundColor: 'green',
               color: 'white'
            },
            callback: () => {
               console.log("button from Builder2 pressed!")
            }
         }
      ]
   }
```



App.js creates a Builder component and passes in the configuration.
The Builder component goes through the config and build the element using components from /builder-components.
Builder component keeps a state of the values of all the sub-components

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
