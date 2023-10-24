const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    name: String,
    company: String,
    salary: Number,
    type: String,
    location: String,
  },
  { timestamps: true }
);
const Job = mongoose.model("job", jobSchema);

const appliedSchema = mongoose.Schema(
  {
    userId: String,
    jobId: String,
  },
  { timestamps: true }
);
const Applied = mongoose.model("applied", appliedSchema);
module.exports = { Job, Applied };
