import express from "express";
const app = express();
export default app;
app.use(express.json());

import employeeRoutes from "./api/employeesApi.js";
app.use("/employees", employeeRoutes);

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong! :(");
});
