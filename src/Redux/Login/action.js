  const LOGED_IN = "logedIn";
  const LOGED_OUT = "logOut";
  export {LOGED_IN , LOGED_OUT}

  const logedIn = (payload) => ({
      type : LOGED_IN,
      payload
  })

  const logedOut = () => ({
      type : LOGED_OUT
  })

  export {logedIn , logedOut}