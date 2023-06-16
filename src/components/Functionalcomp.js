import App from "../App";

function Functinalcomp(props) {
  console.log("receving props", props);

  const data = props.data;

  const num = props.number;

  const fn = props.func;

  const user = props.obj;

  const user1 = props.arr;

  const comp = props.comp;

  return (
    <>

      <div style={styles.container}>
        <h1 style={styles.text}>Passing Differnt Data Types as a Props</h1>

        <div style={styles.data}>
          <h3 style={styles.border}>
            String: <span>{data}</span>
          </h3>

          <h3 style={styles.border}>Number:{num}</h3>

          <h6 style={styles.border}>Function:{fn()}</h6>

          <ul style={styles.ul}>
            <li>{user.data0}</li>
            <li>{user.data1}</li>
            <li>{user.data2}</li>
          </ul>

          <ol style={styles.border}>
            <li>{user1[0]}</li>
            <li>{user1[1]}</li>
            <li>{user1[2]}</li>
            <li>{user1[3]}</li>
          </ol>

          <ul style={styles.border}>
            <li>{comp}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Functinalcomp;

const styles = {
  data: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
  },

  container: {
    border: "2px solid red",
    margin: "5px",
    background: "orange",
  },

  ul: {
    border: "2px solid red",
    padding: "30px",
  },
  ol: {
    border: "2px solid red ",
    padding: "30px",
  },
  border: {
    border: "2px solid red",
    padding: "30px",
  },
};
