import { useState, useEffect } from "react";
import { getUser, changeUser, addUser } from "./../services/userService";

export default function useUser(userId) {
  const EMPTY_USER = {
    name: ``,
    email: ``,
    phone: ``,
    address: ``
  }
  const [user, setUser] = useState(EMPTY_USER);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      userId && setUser(await getUser(userId));
      setLoading(false);
    })();
  }, []);

  const changeFormItem = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const createFormUser = async () => await addUser(user);

  const changeFormUser = async () => changeUser(user.id, user);

  return { user, changeFormItem, createFormUser, changeFormUser, isLoading };
}
