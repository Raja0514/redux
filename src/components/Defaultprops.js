
import Test from "./Test";

function defaultdata(props) {
  
  const user = props.obj;

  return (
    <div style={styles.data}>
      <p>This is default props component</p>
      <h6>The user name is :{user.name}</h6>
      <h6>The user name age is :{user.age}</h6>
      <Test user={user}/>
    </div>
  );
}

export default defaultdata;

const styles = {
  data: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
    margin: "5px",
    background: "orange",
    padding: "30px",
  },
};
