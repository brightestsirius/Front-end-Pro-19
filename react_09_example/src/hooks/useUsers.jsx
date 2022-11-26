import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUsers(await getUsers());
      setLoading(false)
    })();
  }, []);

  const removeUser = async id => {
    await deleteUser(id);
    setUsers(prevState => prevState.filter(user => user.id !== id))
  }

  return {users, removeUser, isLoading};
}
