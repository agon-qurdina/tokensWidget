import Navbar from './Navbar'
import ContextProvider from './widget/WidgetContextProvider'
import Container from './Container'

const App = () => {
    return (
      <>
        <div className='relative w-full h-screen bg-[#fef7ef]'>
          <Navbar />
          <ContextProvider>
            <Container />
          </ContextProvider>
        </div>  
      </>
    );
}
 
export default App