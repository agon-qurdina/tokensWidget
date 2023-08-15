import Context from "./Context"
import { useState } from "react"

const ContextProvider = ({children}) => {
    const TOKEN_RATE = 13.27092

    const [isBuy, setIsBuy] = useState(true)
    const [shares, setShares] = useState(1000)
    const [isCrypto, setIsCrypto] = useState(false)
    const [bankValue, setBankValue] = useState(shares * TOKEN_RATE)
    const [cryptoValue, setCryptoValue] = useState(shares * TOKEN_RATE)
    const [confirmationModal, setConfirmationModal] = useState(false)


    function handleIsBuyChange() {
        setIsBuy(!isBuy)
        setCryptoValue((shares * TOKEN_RATE - 10).toFixed(2))
        if (shares <= 0) {
          setCryptoValue(0)
        }
      }
    
    function handleSharesChange(event) {
        const currentValue = event.target.value
        setShares(currentValue)
        setBankValue((currentValue * TOKEN_RATE).toFixed(2))
        setCryptoValue((currentValue * TOKEN_RATE - 10).toFixed(2))
        if (currentValue <= 0) {
          setCryptoValue(0)
        }
      }
    
    function handleMethodChange() {
        setIsCrypto(!isCrypto)
        setCryptoValue((bankValue - 10).toFixed(2))
        if (shares <= 0) {
          setCryptoValue(0)
        }
    }  

    return (
      <>
        <Context.Provider value={{isBuy, shares, isCrypto, bankValue, cryptoValue, confirmationModal, setConfirmationModal, handleIsBuyChange, handleSharesChange, handleMethodChange }}>
            {children}
        </Context.Provider>
      </>
    );
}
 
export default ContextProvider;