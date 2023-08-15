import { useContext } from "react";
import Context from "./Context";
import BankPayment from "./BankPayment";
import CryptoPayment from "./CryptoPayment";

const Payment = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="text-xl my-5">Payment</div>
            <div>
                <button className={"w-1/2 bg-gray-200 p-2 text-sm " + (!context.isCrypto ? 'active_btn': 'inactive_btn')} onClick={context.handleMethodChange}>Bank Transfer</button>
                <button className={"w-1/2 bg-gray-200 p-2 text-sm " + (context.isCrypto ? 'active_btn' : 'inactive_btn')} onClick={context.handleMethodChange}>Cryptocurrency</button>
            </div>
            <div className="mt-2">
                {!context.isCrypto ? <BankPayment /> : <CryptoPayment />}
            </div>
            <button className="submit-btn w-full p-3 text-white mt-5" onClick={() => context.setConfirmationModal(true)}>Start buying</button>
        </>             
    );
}

export default Payment