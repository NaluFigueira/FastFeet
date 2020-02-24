module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "recipients",
      [
        {
          name: "Breno Maia",
          street: "Rua Manoel Rodrigues Barbosa Filho",
          number: "192",
          additional_address: "Apt. 4",
          state: "São Paulo",
          city: "Presidente Prudente",
          zip_code: "19400000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ana Figueira",
          street: "Rua Claudino Corrêa",
          number: "18",
          additional_address: null,
          state: "São Paulo",
          city: "Presidente Prudente",
          zip_code: "19015350",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
