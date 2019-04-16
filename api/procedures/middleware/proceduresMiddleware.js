module.exports = {
  checkInsertRequirements
};

function checkInsertRequirements(req, res, next) {
  const info = req.body;
  if (info.procedure_name && info.cost) {
    next();
  } else {
    res.status(403).json({ message: "required info was not provieded" });
  }
}
