export default function Task1(props) {

   const Builder1 = {
      title: null,
      description: null,
      style: {
         backgroundColor: 'white',
         color: 'black'
      },
      components: [
         {
            type: "text",
            placeholder: "These are some cool use cases for our programmatic UI generator!",
         }
      ]
   }

   const Builder2 = {
      title: "Submit Proposal",
      description: "Submit a proposal for DAO governance.",
      style: {
         backgroundColor: '#F2F2F2',
         color: 'black'
      },
      components: [
         {
            type: "input-long-text",
            placeholder: "I propose that we...",
            title: "Your proposal",
            description: null,
            style: {
               backgroundColor: 'blue',
               color: 'white'
            }
         },
         {
            type: "input-number",
            placeholder: 42,
            title: "Value attached",
            description: "This is the amount of value you're pledging to this cause in ETH.",
            style: {
               backgroundColor: 'blue',
               color: 'white'
            }
         },
         {
            type: 'button',
            title: 'Propose',
            style: {
               backgroundColor: 'blue',
               color: 'white'
            },
            callback: () => {
               console.log("button from Builder1 pressed!")
            }
         }
      ]
   }

   const Builder3 = {
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

   return <div style={{
      display: 'flex',
      flexDirection: 'column'
   }}>
      <Builder config={Builder1} />
      <Builder config={Builder2} />
      <Builder config={Builder3} />
   </div>
}