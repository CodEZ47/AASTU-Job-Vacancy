import React, { useState } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";

import styles from "../styles/searchBar.module.css";

export const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <div className={styles.searchBar}>
      <Form className="shadow-sm p-3 mb-5 bg-white rounded">
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Select aria-label="Filter">
            <option>Filter</option>
            <option value="val1">Value 1</option>
            <option value="val2">Value 2</option>
            <option value="val3">Value 3</option>
            <option value="val4">Value 4</option>
          </Form.Select>
          <Form.Select aria-label="Sort">
            <option>Sort</option>
            <option value="val1">Value 1</option>
            <option value="val2">Value 2</option>
            <option value="val3">Value 3</option>
            <option value="val4">Value 4</option>
          </Form.Select>
          <Button variant="outline-secondary">+ Add</Button>
        </InputGroup>
      </Form>
    </div>
  );
};
