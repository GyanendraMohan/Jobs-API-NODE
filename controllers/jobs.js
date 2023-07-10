const getAllJobs = async (req, res) => {
  res.send("get all the jobs");
};
const getJob = async (req, res) => {
  res.send("get single job");
};
const createJob = async (req, res) => {
  res.send("create new job");
};
const updateJob = async (req, res) => {
  res.send("update the job");
};
const deleteJob = async (req, res) => {
  res.send("delete the job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
