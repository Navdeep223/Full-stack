import React from "react";

// Base Class
class Person {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return "I am a person";
  }
}

// Student subclass
class Student extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  getDetails() {
    return `Studies ${this.subject}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  getDetails() {
    return `Teaches ${this.subject}`;
  }
}

function Exp3() {
  const people = [
    new Student("Rahul", "Computer Science"),
    new Teacher("Sharma", "Mathematics"),
  ];

  return (
    <div style={{textAlign:"center", marginTop:"40px"}}>
      <h1>Person Class Hierarchy</h1>

      {people.map((p, i) => (
        <div key={i} style={{
          border:"1px solid gray",
          padding:"20px",
          margin:"15px",
          borderRadius:"10px",
          width:"300px",
          marginInline:"auto"
        }}>
          <h2>{p.name}</h2>
          <p>Role: {p instanceof Student ? "Student" : "Teacher"}</p>
          <p>{p.getDetails()}</p>
        </div>
      ))}
    </div>
  );
}

export default Exp3;
