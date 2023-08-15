import { useContext } from "react";
import Context from "./Context";

const Shares = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="text-2xl text-[#16546d] font-bold">Palma Coliving Shares</div>
            <div className="text-xl my-5">Number of Shares</div>
            <div>
                <button className={"w-1/2 bg-gray-200 p-2 text-sm " + (context.isBuy ? 'active_btn': 'inactive_btn')} onClick={context.handleIsBuyChange}>Buy</button>
                <button className={"w-1/2 bg-gray-200 p-2 text-sm " + (context.isBuy ? 'inactive_btn': 'active_btn')} onClick={context.handleIsBuyChange}>Sell</button>
            </div>
            <div className="mt-2 relative">
                <input className="border border-gray w-full p-2 text-sm" value={context.shares} onChange={context.handleSharesChange} type="number" />
                <div className="absolute right-0 text-sm">PCS</div>
            </div>
        </>
    );
}

export default Shares