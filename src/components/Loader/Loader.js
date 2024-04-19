import { Spinner } from 'react-bootstrap';
export default function BasicExample() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
