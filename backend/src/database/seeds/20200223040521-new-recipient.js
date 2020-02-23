module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "recipients",
      [
        {
          name: "Julia Oliveira",
          street: "Avenida Brasil",
          number: "198",
          additional_address: "Edifício Sol Nascente, Apt. 2",
          state: "São Paulo",
          city: "Jardim Paulista",
          zip_code: "01430000",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
