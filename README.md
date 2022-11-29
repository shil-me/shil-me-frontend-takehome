# Shil.me Front-end Engineer Take-home Project (2022)

👋 Hey there! Congrats for making it this far, that means we really liked you and thought you would make a great addition for our amazing team. This project is designed to see if your frontend abilities are complementary to ours, by putting you through three tasks similar to what you will face day to day at Shil.me.

Please review a Figma mock-up of these tasks [here](https://www.figma.com/file/nBiQUgiGWgk4liKIR8lPDj/Untitled?node-id=0%3A1&t=MUo39K9qFGSXyAxn-0).

## What We're Looking For

- **Independence / Autonomy:** We value all of our team members taking initiative and working with minimal management and deadlines.
- **Resourcefulness:** When faced with a problem, we want to see your process in solving it, even if you don't end up being able to solve it.
- **Obsession:** Everyone in the Shil.me Team is striving for perfection. There's a way to finish all of these tasks in a minimal way, and a way to ✨finish✨ these tasks in a way that's over and beyond. We wanna see that special something.

## Tasks
The project consists of three tasks at two different difficulty levels.

### Task 1: Programmatic component creation [INTERMEDIATE]
⚡️ !sudo make ui

**Task**
Make a general component which takes in a `config` and builds a UI based on that config. The idea here is we want to create a component that can be used for various scenarios/configurations. In the example config below, we are creating a UI for a user to mint NFTs. Given this config, the component should be able to account for different titles, descriptions, styles, sub-components, etc.

**Flow**
1. Task1.js takes a configuration as props such as:

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

2. Task1.js creates a Builder component and passes in the configuration.
3. The Builder component goes through the config and build the element using components from /builder-components.
4. Builder component keeps a state of the values of all the sub-components

**Implementation**
Please implement the folders `/builder` and files `Task1.js` and `task-1.js`.

### Task 2: Animated carousel [INTERMEDIATE]
⚡️ Rock'n'scroll

**Task**
Make an animated, full page carousel with pages of different widths that can be used to scroll to different pages using > and < buttons.

**Implementation**
Please implement the folders `/carousel` and files `Task2.js` and `task-2.js`.

### Task 3: Horizontal draggable masonry grid [HARD]
⚡️ Let's see if you can make Windows 8, Windows GREAT!

**Task**
Modify the package [`react-grid-layout`](https://github.com/react-grid-layout/react-grid-layout) to make it horizontally expanding rather than vertically expanding. What we mean by that is that the current implementation of the package takes in a number of columns from the user, and when a new item is added, this item expands the grid vertically. For our purposes, we want to do the opposite: we want to set a number of rows which expands horizontally when an item is added. Please refer to the Figma file for a demonstration of this behaviour.

**Requirements**
- Fork the repository for the package at `https://github.com/react-grid-layout/react-grid-layout`.
- Make the necessary modifications.
- Install your repo as a package in [this Sandbox](https://codesandbox.io/s/5wy3rz5z1x?module=%2Fsrc%2FShowcaseLayout.js).
- Change `import { Responsive, WidthProvider } from "react-grid-layout"` to `import { Responsive, WidthProvider } from <YOUR PACKAGE>`.
- Change 
```
ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};
```
to
```
ShowcaseLayout.defaultProps = {
  className: "layout",
  columnWidth: 30, // changed
  onLayoutChange: function() {},
  rows: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }, // changed
  initialLayout: generateLayout()
};
```

**Hint**
`react-grid-layout` already has a horizontal compaction mode. The only thing that needs to be implemented is fixing the row count instead of the column count.
