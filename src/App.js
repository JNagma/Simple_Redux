import "./styles.css";
import { connect } from "react-redux";
import { dataActions } from "./redux/actions/dataActions";

function App(props) {
  console.log(props.state);
  console.log(props.data);
  return (
    <div className="App">
      {props.state.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

const mapStateTOProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    data: dataActions()
  };
};

export default connect(mapStateTOProps, mapDispatchToProps)(App);
