import { Navbar, Banner } from "./components";
import BottomBar from "./components/BottomBar";
import Category from "./components/Category";
import Vacations from "./components/Vacations";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <div className='absolute bottom-0 lg:ml-24 mx-12'>
      </div> */}
      <BottomBar />
    </>
  );
}

export default App;
