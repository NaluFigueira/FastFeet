module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "deliverymans",
      [
        {
          name: "João da Silva",
          email: "joão.silva@fastfeet.com",
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
