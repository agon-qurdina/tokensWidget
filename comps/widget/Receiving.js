import { useContext } from "react";
import Context from "./Context";

const Receiving = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="text-xl my-5">Amount to be received</div>
            <div>
                <input className="border border-gray w-[80%] p-2 text-sm" value={context.shares > 0 ? context.cryptoValue : ''} onChange={context.onPaymentValueChange} disabled type="number" />
                <select name="currencies" id="" className="w-[20%] p-2 border border-gray text-sm" disabled>
                    <option value="XCHF">XCHF</option>
                </select>
            </div>
            <div className="my-2">
                <input className="border border-gray w-[80%] p-2 text-center text-sm" value={context.shares > 0 ? `You are selling ${context.shares} PCS for ${context.cryptoValue} CHF` : ''} onChange={context.onPaymentValueChange} disabled type="text" />
                <button className="w-[20%] p-2 border border-gray bg-white text-sm">Details</button>
            </div>
            <button className="submit-btn w-full p-3 text-white mt-5" onClick={() => context.setConfirmationModal(true)}>Start selling</button>
        </>
    );
}

export default Receiving