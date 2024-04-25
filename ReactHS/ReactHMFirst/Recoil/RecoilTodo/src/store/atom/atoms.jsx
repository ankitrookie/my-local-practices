import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "netwrokFeetAtom",
  default: 102
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 33
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0
})

export const messageAtom = atom({
  key: "messageAtom",
  default: 0
});

// asyncsection in atom for fetching data
//

export const fetchDataAtom = atom({
  key: "fetchDataAtom",
  default: selector({
    key: "fetchDataAtomSelector",
    get: async () => {
      const res = await axios.get('https://localhost:3000/notification');
      return res.data;
    }
  })
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({get}) => {
    const networkAtomCount = get(networkAtom);
    const notificationAtomCount = get(messageAtom);
    const jobsAtomCount = get(jobsAtom);
    const messageAtomCount = get(messageAtom);

    return networkAtomCount + notificationAtomCount + jobsAtomCount + messageAtomCount;
  }
})
