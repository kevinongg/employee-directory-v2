import express from "express";
const router = express.Router();
export default router;

import employees from "#db/employees";
import { addEmployee } from "#db/employees";

router
  .route("/")
  .get((req, res) => {
    res.send(employees);
  })
  .post((req, res) => {
    if (req.body === undefined || req.body === null) {
      return res.status(400).send("Please provide a body");
    }
    const { name } = req.body;
    if (name === undefined || name === "") {
      return res.status(400).send("Please provide a name");
    }
    res.status(201).send(addEmployee(name));
  });

router.route("/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((employee) => employee.id === +id);
  if (!employee) {
    return res.status(404).send("Employee not found!");
  }
  res.send(employee);
});
