/**
 * Created just to demonstrate the limitations of JSX
 * that only one root element you must return or store in a const or let
 */
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
