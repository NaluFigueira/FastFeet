module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "deliverymans",
      [
        {
          name: "Marcelo Tavares",
          email: "marcelo.tavares@fastfeet.com",
          avatar_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Marcelo de Nóbrega",
          email: "marcelo.nobrega@fastfeet.com",
          avatar_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Andressa Almeida",
          email: "andressa.almeida@fastfeet.com",
          avatar_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
