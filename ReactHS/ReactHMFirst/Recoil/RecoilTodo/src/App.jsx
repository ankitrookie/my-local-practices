import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { networkAtom, jobsAtom, messageAtom, notificationAtom, totalNotificationSelector } from "./store/atom/atoms";

function App() {
  return (
    <RecoilRoot>
      <RootComponent />    
    </RecoilRoot>
  )
};


const RootComponent = () => {
  const networkFeed = useRecoilValue(networkAtom);
  const jobsFeed = useRecoilValue(jobsAtom);
  const [messages, setmessages] = useRecoilState(messageAtom);
  const notificationFeed = useRecoilValue(notificationAtom);
  // this is equevalent to useMemo
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
      <div>
        <button>Home</button>
        <button>My Network ({networkFeed >= 100 ? "99+" : networkFeed})</button>
        <button>Jobs ({jobsFeed})</button>
        <button>Messages ({messages})</button>
        <button>Notification ({notificationFeed})</button> <br />
        <button>Total No of Notification ({totalNotificationCount})</button>
        <button onClick={() => setmessages(e => e + 1)}>Add Messages</button>
      </div>
  )
}

export default App
