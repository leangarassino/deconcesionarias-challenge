'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("vehicles", [
      {
        name: "Duster",
        brand: "Renault",
        model: 2015,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLULVxGlU9lHJiSkkEB5_WXEPHJ_RQSvyKdYqNZBDWOHUlTGTQwY2v5npHLgNvObPJW-OTgjkYAjdIegdnx_B8DheJI1TrYfKMpHfOhBeHFsj7shdAty0Qc-XL1zNF6t644uIJxRzm7cdHI3enibN5Zwtg=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "C-3",
        brand: "Citroen",
        model: 2010,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLXqNyPiH9aYSVQW32A0ndl_aCZsl_7MLb-JFzhHoojitlY5rT4nrRBiccWtyTOe6_VqbCpoUWHpPl5HmoPrfkPQm-wSGTU_zfprh4BeU8e5m6FPv_aASOYrNvgNa6lalibCB9RzB2oDun-E2-kotwweCQ=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clio",
        brand: "Renault",
        model: 2008,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLUtAlyjAKadGRLZ83oHyLK_33pTMmgXZ0WBSFsvBKjJioId0pw4OLOZFgXOL8R0UWew6VDnmhOImmA5F2lcmj_9_D8AHOg7rP1c5hvLnbnWZUYSapUqiPBGGuMeauNa1ZTM2btrfxcBT3HP3fhXll4-Dg=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ethios",
        brand: "Toyota",
        model: 2015,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLVc9cAi8fc0s8jBv1ACCETynGWGHtSuTcyaV-gwKZWEPHo9d_-Whse_AGtrAeTlxvKuP9xIPKsKCHqxoG77UrXrFQxiN25oh3HA8-teNPl-WwSJFyIxUQVWaLH2Ss8x8a6HVv15-UXa3NIBWgdVUaqQOA=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Argo",
        brand: "Fiat",
        model: 2010,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLUJUQnyJt98seoP-gn7eR5hb8CNwXrYsYKycDqpY9Hr4T1Rww3f03l0rI29eOTUI7GbYLN9UJlrpYtqqhjUQhWjqcS4hv8MnfAHDbtwQYjxCRSGQU6LfGLY7eMKpppw3UOarTWOECUcEr8O9e08lJICKg=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chronos",
        brand: "Chevrolet",
        model: 2020,
        image: "https://lh3.googleusercontent.com/pw/AM-JKLV0x3z4mjaF82bImvCZRZWrjTFeeSwGacmwNPC1zAVgv4EmufLgngdg0Xrv2T-Mt2QjtQymzh1g0xZhTaKycBZNChaqN_DawVJ74dvJw9KUrLAga84AoD5xYSEd4Wz-NsNcw3sfR8jE83uT4cjgBpERJQ=w988-h657-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("vehicles", null, {});
  },
};