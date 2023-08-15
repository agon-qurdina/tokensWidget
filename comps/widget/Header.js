const Header = () => {
    return (
        <>
            <div className='top-container flex justify-between px-5'>
                <div className='p-2 text-center w-1/3 mr-2 active_tab'>Amount</div>
                <div className='p-2 text-center w-1/3 mr-2 inactive_tab'>Registration</div>
                <div className='p-2 text-center w-1/3 inactive_tab'>Confirmation</div>
            </div>
        </>
    );
}

export default Header