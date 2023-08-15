import Header from "./widget/Header";
import Body from "./widget/Body";
  
const Widget = () => {
    return (
        <>
            <div className='p-5 w-[550px] bg-white border border-[#FE7560] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Header />
                <Body />
            </div>
        </>
    );
}
 
export default Widget;