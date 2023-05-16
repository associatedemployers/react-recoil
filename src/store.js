import { atom, selector } from "recoil";

const sessionState = atom({
  key: "session",
  default: {
    isLoggedIn: false
  }
});

const loggedInState = selector({
  key: "loggedInState",
  get: ({ get }) => {
    return get(sessionState).isLoggedIn
  },
  set: ({ set }, {email, password }) => {
    set(sessionState, { isLoggedIn: email && password})
  }
});


const authAtom = atom({
    key: 'auth',
    default: null
});

export {
  sessionState,
  loggedInState,
  authAtom
};
