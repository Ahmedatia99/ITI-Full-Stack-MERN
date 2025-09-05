import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaBox } from "react-icons/fa";
import { Form, Button, Container, Row, Col, Table, Card, Modal } from "react-bootstrap";

function EditProductForm({ currentData, onSave, onCancel, show }) {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const categoryRef = useRef(null);
  const quantityRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      Name: nameRef.current.value,
      Price: priceRef.current.value,
      Category: categoryRef.current.value,
      Quantity: quantityRef.current.value,
    };
    onSave(updatedProduct);
  };

  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" defaultValue={currentData.Name} ref={nameRef} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" defaultValue={currentData.Price} ref={priceRef} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue={currentData.Category} ref={categoryRef}>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Books</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" defaultValue={currentData.Quantity} ref={quantityRef} />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="success" type="submit">Save</Button>
            <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function ProductForm() {
  const [productsData, setProductsData] = useState([]);
  const [productEditForm, setProductEditForm] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);

  const productName = useRef(null);
  const productPrice = useRef(null);
  const productCategory = useRef(null);
  const productQuantity = useRef(null);

  const AddProductBtnHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      Name: productName.current.value,
      Price: productPrice.current.value,
      Category: productCategory.current.value,
      Quantity: productQuantity.current.value,
    };

    setProductsData([...productsData, newProduct]);

    productName.current.value = "";
    productPrice.current.value = "";
    productCategory.current.value = "";
    productQuantity.current.value = "";
  };

  const EditIconHandler = (productIndex) => {
    setCurrentData(productsData[productIndex]);
    setCurrentIndex(productIndex);
    setProductEditForm(true);
  };

  const saveEditedProduct = (EditedProduct) => {
    setProductsData((prev) => {
      const updatedProducts = [...prev];
      updatedProducts[currentIndex] = { ...updatedProducts[currentIndex], ...EditedProduct };
      return updatedProducts;
    });
    setProductEditForm(false);
  };

  const deleteProduct = (productIndex) => {
    setProductsData((prev) => prev.filter((_, index) => index !== productIndex));
  };

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          <FaBox className="me-2" /> Product Management
        </h1>
        <p className="text-muted">Add, edit, and manage your products easily</p>
      </div>

      <Card className="shadow-lg p-4 mb-5 rounded">
        <Card.Title className="mb-4">Add New Product</Card.Title>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" ref={productName} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" ref={productPrice} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" ref={productCategory}>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Books</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter quantity" ref={productQuantity} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" onClick={AddProductBtnHandler}>
            ➕ Add Product
          </Button>
        </Form>
      </Card>

      <h2 className="mb-3">📋 Products List</h2>
      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {productsData.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-muted">No products yet</td>
            </tr>
          ) : (
            productsData.map((product, index) => (
              <tr key={index} className="align-middle text-center">
                <td>{index + 1}</td>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
                <td>{product.Category}</td>
                <td>{product.Quantity}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => EditIconHandler(index)}>
                    <FaEdit /> Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => deleteProduct(index)}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Edit Form Modal */}
      <EditProductForm
        currentData={currentData}
        onSave={saveEditedProduct}
        onCancel={() => setProductEditForm(false)}
        show={productEditForm}
      />
    </Container>
  );
}

export default ProductForm;
