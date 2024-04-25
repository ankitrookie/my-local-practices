import { atomFamily, selectorFamily } from "recoil";
import { TODO } from "./todo";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    const todo = TODO.find((ids) => ids.id === id);
    return todo;
  }
})


export const todoFamilyData = atomFamily({
  key: "todoFamilyData",
  default: selectorFamily({
    key: "selectorFamily",
    get: (id) => async ({get}) => {
        const res = await fetch(`http://localhost:3000/data/${id}`)
        const data = res.json();
      return data
    }
  })
})

