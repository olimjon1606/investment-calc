import React, { useState } from 'react'

const InputContainer = ({onUpdate, userInput}) => {
    
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required value={userInput.initialInvest} onChange={(event) => onUpdate("initialInvest", event.target.value)} />
                </p>
                <p>
                    <label >Anual Investment</label>
                    <input type="number" required value={userInput.anualInvest} onChange={(event) => onUpdate("anualInvest", event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onUpdate("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onUpdate("duration", event.target.value)} />
                </p>
            </div>
        </section>
    )
}

export default InputContainer
