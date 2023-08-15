import { useContext } from "react";
import Context from "./widget/Context";

const ConfirmationModal = () => {
    const context = useContext(Context)
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full bg-[#FE7560] text-white flex justify-center items-center">
                <div className="text-4xl text-white">Coming soon...</div>
                <button className="absolute top-0 right-0 p-2 text-white" onClick={() => context.setConfirmationModal(false)}>X</button>
            </div>
        </>
    );
}
 
export default ConfirmationModal;