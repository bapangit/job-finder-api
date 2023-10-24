const express = require("express");
const {
  createJob,
  fetchJobs,
  addToApplied,
  getAppliedJobs,
} = require("./apis");

const router = express.Router();

router.post("/create-job", createJob);
router.get("/fetch-job", fetchJobs);
router.post("/apply-job", addToApplied);
router.post("/get-applied-job", getAppliedJobs);

module.exports = router;
