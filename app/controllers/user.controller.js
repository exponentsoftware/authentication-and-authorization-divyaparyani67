exports.allAccess = (req, res) => {
  res.status(200).send("Public Content");
};

exports.viewerBoard = (req, res) => {
  res.status(200).send("Viewer Content");
};

exports.creatorBoard = (req, res) => {
  res.status(200).send("Creator Content");
};

exports.editorBoard = (req, res) => {
  res.status(200).send("Editor Content");
};
