const faker = require("faker/locale/es");

const appRouter = app => {
  app.get("/", (request, response) => {
    response.status(200).send("Welcome to our awesome RESTful API");
  });
  app.get("/", (request, response) => {
    response.status(200).send("Welcome to our awesome RESTful API");
  });

  app.get("/user", (request, response) => {
    const user = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    };
    response.status(200).send(user);
  });

  app.get("/users/:num", (request, response) => {
    const users = [];
    const num = request.params.num;
    if (isFinite(num) && num > 0) {
      for (i = 0; i < num; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email()
        });
      }

      response.status(200).send(users);
    } else {
      res.status(400).send({ message: "invalid number supplied" });
    }
  });
  app.post("/users/", (request, response) => {});
};

module.exports = appRouter;
