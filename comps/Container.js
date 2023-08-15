import { useContext } from "react";
import Widget from "./Widget";
import Context from "./widget/Context";
import ConfirmationModal from "./ConfirmationModal";

const Container = () => {
    const context = useContext(Context)
    return (
        <>
            <Widget />
            {context.confirmationModal && <ConfirmationModal />}
        </>
    );
}
 
export default Container;