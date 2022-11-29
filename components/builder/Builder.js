import { useState } from 'react';

export default function Builder(config) {

   // TO-DO: Keep track of every input component's
   // value in a dictionary so that components can
   // access each others' values
   const [state, setState] = useState(...);

   return <div style={{
      display: 'flex',
      flexDirection: 'column'
   }}>
      <Builder config={Builder1} />
      <Builder config={Builder2} />
      <Builder config={Builder3} />
   </div>
}