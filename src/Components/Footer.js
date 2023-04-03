import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const Search = () => {
  return (
    <div className="d-flex justify-content-between m-auto align-items-center bg-dark">
      <div className="col-lg-6  h5 text-white">✉️ userbrijesh@gmail.com</div>
      <Container className=" col-lg-6">
        <Form className="d-flex p-4">
          <Form.Control
            type="search"
            placeholder=""
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className="px-4">
            Search
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Search