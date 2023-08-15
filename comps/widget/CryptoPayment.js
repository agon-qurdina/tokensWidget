import { useContext } from "react";
import Context from "./Context";

const CryptoPayment = () => {
    const context = useContext(Context)
    return (
        <>
            <input className="border border-gray w-[80%] p-2 text-sm" value={context.shares > 0 ? context.cryptoValue : ''} onChange={context.onPaymentValueChange} disabled type="number" />
            <select name="currencies" id="" className="w-[20%] p-2 border border-gray text-sm">
                <option value="XCHF">XCHF</option>
            </select>
            <div className="my-2">
                <input className="border border-gray w-[80%] p-2 text-center text-sm" value={context.shares > 0 ? `You are buying ${context.shares} PCS for ${context.cryptoValue} CHF` : ''} onChange={context.onPaymentValueChange} disabled type="text" />
                <button className="w-[20%] p-2 border border-gray bg-white text-sm">Details</button>
            </div>
        </>
    );
}
 
export default CryptoPayment;