import { useContext } from "react";
import Context from "./Context";
import Shares from "./Shares";
import Payment from "./Payment";
import Receiving from "./Receiving";

const Body = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="main-container p-5 mt-2 rounded-3xl">
                <Shares />
                {context.isBuy ? <Payment /> : <Receiving />}
            </div>
        </>
    );
}

export default Body