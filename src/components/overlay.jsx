import { useState } from 'react'

function Overlay({onClickButton}) {
  const [value, setValue] = useState("");

    return (
        <div className="overlay">
            <p>Username</p>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => onClickButton(value)}>
                JOIN
            </button>
        </div>
    )
}

export default Overlay