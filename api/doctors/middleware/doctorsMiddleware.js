module.exports = {
  checkInsertRequirements
};

function checkInsertRequirements(req, res, next) {
  const info = req.body;
  if (info.doctor_name && info.hospital_id) {
    next();
  } else {
    res.status(403).json({ message: "required info was not provided" });
  }
}
