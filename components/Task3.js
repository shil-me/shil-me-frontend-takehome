export default function Task2(props) {

   // TO-DO: When the user clicks Add Item, you should pick
   // one of these sizes randomly and add to grid.
   const SIZE_OPTIONS = [
      [50, 50],
      [50, 100],
      [100, 50],
      [100, 100],
      [100, 150]
   ] // in pixels [w, h]

   const DESIGN_DETAILS = {
      sideBarWidth: 300, // in pixels
      numberOfInitialBoxes: 69,
      fontFamily: 'Public Sans',
      spaceBetweenItems: 8 // vertical and horizontal, in pixels
   }

   return <div style={{
      width: '100vw',
      height: '100vh'
   }}>
      ...
   </div>
}