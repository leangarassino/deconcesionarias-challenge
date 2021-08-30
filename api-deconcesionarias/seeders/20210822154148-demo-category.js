"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        name: "Documentación",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ruedas y frenos",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carrocería",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Motor",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alumbrado",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Volante",
        icon: "https://lh3.googleusercontent.com/pw/AM-JKLX7DZ-cyvLOCFCw7mpNkmkuYjCyQYCoSumFremh0sqX5mTRZsWL-vTdR9q0EHuzi_K0_XftqLd8cVt62M2cqxVmqEcL1oTFGCvk-dOIqanAHqDTsPGg8GjoBMog4AUqjifCxN7k76AVMH80uzAmM8Q2-A=s512-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
