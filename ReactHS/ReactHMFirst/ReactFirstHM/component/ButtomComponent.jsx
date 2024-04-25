import React from 'react';


export const ButtonComponent = React.memo(({ functioncallbackexample }) => {
  console.log("when we pass function or object, react is not smart to dected that function has not chaged it state. so each and evcery time it will rerender.")
  return (
     <button>Child Button</button>
  )
})
