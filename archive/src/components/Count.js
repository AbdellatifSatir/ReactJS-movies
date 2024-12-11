import { useEffect, useState } from 'react';


const Count = () => {

    const [counter,setCounter] = useState(0); // Hook

    // useEffect(() => {
    //     alert('reload') // Hook
    // })

    return (
        <div className='App'>
                
            <button 
                // Event (action)
                onClick={() => setCounter(
                    (prevCount) => prevCount - 1 
                )}
            > - </button>

            <h1> {counter} </h1>

            <button 
                onClick={() => setCounter(
                    (prevCount) => prevCount + 1
                )}
            > + </button>
        </div>
    )
}

export default Count;