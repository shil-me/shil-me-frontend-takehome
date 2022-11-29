// TO-DO: Implement the carousel component, which should be able to:
// 1. Scroll horizontally
// 2. Scroll to a specific page
// 3. Resize the page

export const Carousel = (pages, ...props) => {
   return <div className="carousel">
      {pages.map((page, index) => {
         return <Page {...page} key={index} />
      })}
   </div>
}