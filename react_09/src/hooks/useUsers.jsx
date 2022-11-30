import { useState, useEffect } from "react";
import { getUsers, deletUser as deletItem} from "./../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, []);

  const deleteUser = async id => {
    await deletItem(id);
    setUsers(prevState => prevState.filter(user => user.id !== id));
  }

  return {users, deleteUser};
}
