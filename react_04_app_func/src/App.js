import React, {Fragment, useState, useEffect} from 'react'
import Counter from './components/Counter/Counter';

export default function App() {

  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCounter(false);
    },3000);
  }, [])

  return (
    <Fragment>
      {showCounter ? <Counter /> : null}
    </Fragment>
  )
}