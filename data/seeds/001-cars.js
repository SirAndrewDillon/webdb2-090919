
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          vin: "3FA6P0RU3ER169003",
          make: "1949 Oldsmobile ",
          model: "88",
          mileage: 5762,
          transmissionType: "manual",
          titleStatus: "clean"
      },
      {
          id: 2,
          vin: "YV4CZ852981463186",
          make: "1970 Plymouth",
          model: "Hemi Superbird",
          mileage: 2262,
          transmissionType: "automatic",
          titleStatus: "clean"
      },
      {
          id: 3,
          vin: "3N1AB7AP4EY335992",
          make: "1971 Ford",
          model: "Torino GT Convertible",
          mileage: 9762,
          transmissionType: "automatic",
          titleStatus: "clean"
      },
      {
          id: 4,
          vin: "KMHTC6AE4DU097814",
          make: "1970 Ford",
          model: "Mustang Boss 429",
          mileage: 3578,
          transmissionType: "manual",
          titleStatus: "clean"
      },
      {
        id: 5,
        vin: "2A8GM68X17R214804",
        make: "1970 Chevrolet",
        model: "Chevelle SS 454 LS6",
        mileage: 8878,
        transmissionType: "manual",
        titleStatus: "clean"
    },
    {
      id: 6,
      vin: "JH4CU2F81EC003908",
      make: "1971 Pontiac",
      model: "GTO Judge Convertible",
      mileage: 3214,
      transmissionType: "manual",
      titleStatus: "clean"
  },
  {
    id: 7,
    vin: "1FTFW1EFXBKD74943",
    make: "1969 Chevrolet",
    model: "Camaro ZL1",
    mileage: 5987,
    transmissionType: "manual",
    titleStatus: "salvage"
},
{
  id: 8,
  vin: "1FTEX18L8VNB78321",
  make: "1964 Ford",
  model: "Galaxie 427 SOHC",
  mileage: 22554,
  transmissionType: "automatic",
  titleStatus: "clean"
},
{
  id: 9,
  vin: "1J4HS58N15C700653",
  make: "1972 Dodge",
  model: "Dart Demon 340",
  mileage: 19887,
  transmissionType: "automatic",
  titleStatus: "clean"
},
{
  id: 10,
  vin: "4JGBB86E47A283071",
  make: "1987 Buick",
  model: "Regal Grand National",
  mileage: 12459,
  transmissionType: "automatic",
  titleStatus: "clean"
}
      ]);
    });
};
