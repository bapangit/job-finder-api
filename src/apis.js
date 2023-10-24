const { Job, Applied } = require("./models");

module.exports.createJob = (req, res) => {
  try {
    const body = req.body;
    new Job({
      name: body.name,
      company: body.company,
      salary: body.salary,
      type: body.type,
      location: body.location,
    })
      .save()
      .then(
        (job) => {
          res.status(200).json({ message: "Upload successful." });
        },
        (err) => {
          res.status(404).json({ error: "Couldn't upload !" });
        }
      );
  } catch (e) {
    console.log("error", e.message);
  }
};
module.exports.fetchJobs = (req, res) => {
  try {
    Job.find()
      /* .sort({ createdAt: -1 })
      .skip(skipAmount * page)
      .limit(skipAmount)
      .select({
        photoUrl: 1,
      }) */
      .then(
        (data) => {
          res.status(200).json(data);
        },
        (err) => res.status(500).json({ error: "Database error !" })
      );
  } catch (e) {
    console.log("error", e.message);
  }
};

module.exports.addToApplied = (req, res) => {
  try {
    const body = req.body;
    new Applied({
      userId: body.userId,
      jobId: body.jobId,
    })
      .save()
      .then(
        (job) => {
          res.status(200).json({ message: "Successful." });
        },
        (err) => {
          res.status(404).json({ error: "Failed !" });
        }
      );
  } catch (e) {
    console.log("error", e.message);
  }
};
module.exports.getAppliedJobs = (req, res) => {
  try {
    const body = req.body;
    Applied.find({ userId: body.userId }).then(
      (data) => {
        if (data.length) {
          const applied = data.map((v) => v.jobId);
          Job.find({
            _id: applied,
          }).then(
            (job) => {
              res.status(200).json(job);
            },
            (err) => {
              res.status(404).json({ error: "Failed !" });
            }
          );
        }
      },
      (err) => {
        res.status(500).json({ error: "Internal Server Error." });
      }
    );
  } catch (e) {
    console.log("error", e.message);
  }
};
