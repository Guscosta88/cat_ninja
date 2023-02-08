import { useState, useEffect } from 'react'

const Persisting = () => {
    const [persistent, setPersistent] = useState(true);

    useEffect(() => {
        const data = window.localStorage.getItem('PERSISTENT_ITEM');
        if (data !== null) setPersistent(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('PERSISTENT_ITEM', JSON.stringify(persistent))
    }, [persistent])


    return (
        <div>
        {persistent && (
        <div>
            <h1>Persistent</h1>
            <button onClick={() => setPersistent(false)} >Hide</button>
        </div>
        )}
        <button onClick={() => setPersistent(true)} >Bring it back</button>
        </div>
  )
}

export default Persisting