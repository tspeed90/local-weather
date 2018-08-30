exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: "Sorry, couldn't find anything"
  });
};

exports.server = (err, req, res) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: `Internal server error: ${err}`
  });
};
