import { useState } from "react";

export default function useForm() {
  const [task, setTask] = useState({});

  const changeInput = (name, value) => setTask(prevState => ({...prevState, [name]: value}))

  return { task, changeInput };
}