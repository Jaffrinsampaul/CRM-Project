import DeleteAlert from './components/delete';
import LandingPage from './components/landingPage';
import {colors} from "./style/color"

function App() {
  return (
    <section style={{
        background: colors.darkGrey,
        margin:0, height: "100vh"
      }}>
        <LandingPage/>
        {/* <DeleteAlert/> */}
    </section>
   
  );
}

export default App;
