//learning props
const Welcome = (props) => {
  return (
    <button onClick={() => props.alertMyInput("My Name is Oluchi ")}>
      Click Me!!!
    </button>
  );
};

export default Welcome;
