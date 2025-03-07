// Export the greet function so it can be used in our routes
exports.greet = (req, res) => {
  const name = req.query.name;

  // If name is not provided, send back an error message
  if (!name) {
    return res.json({ error: "Name is required." });
  }
  // If name is provided, send a greeting message
  return res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
};

