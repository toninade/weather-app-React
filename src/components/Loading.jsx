import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="loading d-flex justify-content center align-items-center flex-column">
      <Spinner animation="border" variant="dark" />
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
