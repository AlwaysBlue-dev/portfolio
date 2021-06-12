import "../node_modules/bootstrap//dist/js/bootstrap.bundle";
import About from "./My Components/About";
import Education from "./My Components/Education";
import Experience from "./My Components/Experience";
import Skills from "./My Components/Skills";
import Interests from "./My Components/Interests";
import Awards from "./My Components/Awards";
import Sidebar from "./My Components/Sidebar";
import { Switch, Route, Redirect } from "react-router";

const App = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/interests" component={Interests} />
        <Route exact path="/awards" component={Awards} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
