import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../assets/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg";

function MyCard() {
  return (
    <Card
      style={{
        width: "20rem",
        margin: "20px auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="shadow rounded border-0"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        className="rounded-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold text-primary">Awesome Card</Card.Title>
        <Card.Text className="text-muted">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. This card looks clean and modern.
        </Card.Text>
        <Button variant="primary" className="w-100 fw-semibold">
          Learn More
        </Button>
      </Card.Body>
      
    </Card>
  );
}

export default MyCard;
