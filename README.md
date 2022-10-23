# Shil.me Front-end Engineer Take-home Project (2022)

👋 Hey there! Congrats for making it this far, that means we really liked you and thought you would make a great addition for our amazing team. This project is designed to see if your frontend abilities are complementary to ours, by putting you through three tasks similar to what you will face day to day at Shil.me.

## What We're Looking For

- **Independence / Autonomy:** We value all of our team members taking initiative and working with minimal management and deadlines.
- **Resourcefulness:** When faced with a problem, we want to see your process in solving it, even if you don't end up being able to solve it.
- **Obsession:** Everyone in the Shil.me Team is striving for perfection. There's a way to finish all of these tasks in a minimal way, and a way to ✨finish✨ these tasks in a way that's over and beyond. We wanna see that special something.

## Tasks
The project consists of three tasks ranging at three different difficulty levels.

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

### Task 2: Resizing animation [EASY]
⚡️ Bruce Banner -> Hulk

**Task**
Animate a grid item from arbitrary size to arbitrary size on click.

**Implementation**
Please implement the files `Task2.js` and `task-2.js`.

### Task 3: Horizontal draggable masonry grid [HARD]
⚡️ Let's see if you can make Windows 8, Windows GREAT!

**Task**
Design a draggable horizontally scrolling masonry grid similar to the Windows 8 Menu, with items of fixed width and variable height. Here, we'd like to createa masonry grid with items that are re-arrangeable via drag and drop.

**Requirements**
- Panel on the left with button for adding new items.
- Items draggable in the grid.
- Items react to hover and drag (up to you)
- Page title on top of grid (static, hard-coded)
- Side panel sticky and fixed
- Grid horizontal scrollable

**Implementation**
Please implement the folders `/grid` and files `Task3.js` and `task-3.js`.
