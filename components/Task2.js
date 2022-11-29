export default function Task2(props) {

   const PAGE_PROPERTIES = {
      pages: [ // widths of all pages
         {
            width: "1000px"
         },
         {
            width: "2000px"
         },
         {
            width: "6000px"
         }
      ]
   }

   return <div style={{
      display: 'flex',
      flexDirection: 'column'
   }}>
      <CarouselController {...} /> // TO-DO: Pass in whatever states you need here
      <Carousel pages={PAGE_PROPERTIES.pages} {...} /> // TO-DO: Pass in whatever states you need here
   </div>
}