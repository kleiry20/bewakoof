import "./SearchBar.css";
import { Form, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      {/* <i className="fas fa-heart"></i>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by products"
      /> */}

      <Form>
        <InputGroup className="search-bar">
          <InputGroup.Text id="basic-addon1">
            <i className="fas fa-search"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Search by products"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
