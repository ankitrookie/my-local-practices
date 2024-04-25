export const Signin = () => {
  return <div>
    Signin
  </div>
}


// one thing all the component are by default server side components, if you have handlers like onClick or othere interactivity etc, 
// then we have to expectely descripbe follwing line on the top of the component --> "use client"
//
// one more take way, even we convert our component to client side component, it still render it in SSR (Server side component);
// quest is, why do client side components gets SSR's to HTML ?
