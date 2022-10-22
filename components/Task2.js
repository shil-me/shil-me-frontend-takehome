export default function Task2(props) {

   const ANIMATION_DETAILS = {
      size: { // in pixels [w, h]
         start: [50, 50],
         end: [200, 400]
      },
      duration: '1' // in seconds
   }

   // TO-DO: This is where you can write the
   // mechanics for when a user clicks on the
   // resizable box.
   const callback = (e) => {
      ...
}

return <div style={{
   display: 'flex',
   flexDirection: 'row'
}}>
   <div id="resize-box-1" style={{
      backgroundColor: 'gray',
      padding: '8px'
   }} onClick={(e) => { callback(e) }}></div>
   <div id="resize-box-2" style={{
      backgroundColor: 'gray',
      padding: '8px'
   }} onClick={(e) => { callback(e) }}></div>
</div>
}