import React from 'react'

export default function OldRegistration() {
  return (
    <div className="flex justify-center pt-20">
      <div className="form-container bg-background border rounded p-2">
        <p className="title">{!userHasToken && `Be om adgangskode --- ${userHasToken}`}</p>
        {userHasToken ? (
          <form className="form" onSubmit={handleRegistration}>
            {/* <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div> */}
            <div className="input-group">
              <label htmlFor="register-code"></label>
              <input type="password" name="register-code" id="token-code" placeholder="" />
              <div className="forgot">
                <div onClick={() => setUserHasToken(!userHasToken)}>Mangler du adgangskode?</div>
              </div>
            </div>
            <button className="sign">Registrer</button>
          </form>
        ) : (
          // USER ASKS FOR CODE
          <form className="form" onSubmit={handleCodeRequest}>
            <div className="input-group">
              <label htmlFor="code-request"></label>
              <input type="password" name="code-request" id="token-code" placeholder="" />
              <div className="forgot">
                <div onClick={() => setUserHasToken(!userHasToken)}>Har du en allerede en kode?</div>
              </div>
            </div>
            <button className="sign">Be om kode</button>
          </form>
        )}
      </div>
    </div>
  )
}
