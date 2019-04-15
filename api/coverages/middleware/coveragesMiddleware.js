module.exports = {
  checkInsertRequirements
};

function checkInsertRequirements(req, res, next) {
  const info = req.body;
  if (info.procedure_id && info.insurer_id && info.amount) {
    next();
  } else {
    res.status(403).json({ message: "required info was not provieded" });
  }
}
