import { useState, useEffect } from "react";
import { getUser, updateUser, addUser } from "./../services/userService";

export default function useUser(userId) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      userId && setUser(await getUser(userId));
    })();
  }, []);

  const changeInput = (option, value) => {
    setUser(prevState => ({...prevState, [option]: value}));
  }

  const changeUser = async () => {
    await updateUser(user.id, user);
  }

  const createUser = async () => {
    await addUser(user);
  }

  return { user, changeInput, createUser, changeUser };
}
