const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "Mtc@123",
    database: "programming_languages",
  },
  listPerPage: 10,
  multipleStatements: true,
};

module.exports = config;
