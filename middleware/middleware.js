import { isValidHttpDate } from "../utils/utils.js";
export function checkContentType(req, res, next) {
  const contentType = req.get("Content-Type");
  if (!contentType || contentType !== "application/json") {
    return res.status(400).send("Invalid Content-Type. Only application/json is accepted.");
  }
  next();
}
export function checkRequestDate(req, res, next) {
  const requestDate = req.get("Request-Date");
  if (!requestDate || !isValidHttpDate(requestDate)) {
    return res.status(400).send("Request-Date header is missing or invalid.");
  }
  next();
}
