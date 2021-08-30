'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("galleries", [
      {
        carId: 1,
        image1: "https://lh3.googleusercontent.com/pw/AM-JKLVHT5Oa2DJB9orJtV5MYb3KbsgyP5l9TpfD9qCZtAoyCMyZNWQMW1mxZfWNE1e6C2jGh4IRmrrHU9azPBGG8I-eQqjNmMlrbxYxe_5oAUEhIqCvVw_y4xqQvVGRigy-aDAt6GxwtCe_4EIJ7HBk5fiblw=s512-no?authuser=0",
        image2: "https://lh3.googleusercontent.com/pw/AM-JKLULVxGlU9lHJiSkkEB5_WXEPHJ_RQSvyKdYqNZBDWOHUlTGTQwY2v5npHLgNvObPJW-OTgjkYAjdIegdnx_B8DheJI1TrYfKMpHfOhBeHFsj7shdAty0Qc-XL1zNF6t644uIJxRzm7cdHI3enibN5Zwtg=w902-h600-no?authuser=0",
        image3: "https://lh3.googleusercontent.com/pw/AM-JKLVm8VYRs8e0tbq94XXz_c4bcbierxqJV-Fyyek6YmAkxS5_a7CA6qw_iDDGRl80M2BIi08GVvwDdQmaBxzeUs7wYkUSe1tHNUr7H1wp1KJ2SyFPHIKXLw9h1z7YiVHxtPxH1pOQpdLpTLBli1z6BNapfw=w902-h600-no?authuser=0",
        image4: "https://lh3.googleusercontent.com/pw/AM-JKLXKdT0hkNDUZRGmUpjnZUBP4RaDl19smvwfOA4VECJ9af6S1B8lFU2mLjavrm1mk9paKIhi_LJZRYcs1J17Fvy1wUdI4KyQp1b_zOzuagz9ulpCfWnMxoi-HmhLcWurpdp3J6SVGt9Fv1vyorP-L70dNw=w902-h600-no?authuser=0",
        image5: "https://lh3.googleusercontent.com/pw/AM-JKLX6jYQKvDWCIV7MkNhvc8EdsPo4-IHoUGR1iNfBfLPdMqlF5F0LLVPWzymp_BFqegzqB9atISNWXBjg8cE2Z91CURo9dnho3csIjto9XWDxst_BjY57Bs3pvnxg_XB5smku9xLaFIujdk1SYfk9NZRdlQ=w902-h600-no?authuser=0",
        image6: "https://lh3.googleusercontent.com/pw/AM-JKLU5QO4HmSLava8J75fN539ckr9vhCdbF-pWbRDhC3dVpn26XnwuV0KYD1ygjTdPN2LjIpAUJwK1njvwv0Tg5G8hrEijYZ40Rq3BgfQXrJ2IoF6lrR5PM0w8hDMHOLRgk7mNh_EOQW4FGPs5lCzZynnM6Q=w902-h600-no?authuser=0",
        image7: "https://lh3.googleusercontent.com/pw/AM-JKLVh92UKl84vH4g6Uh5Rs6pZu9pKUEF3vOngydTAMSy-VKlLMuxnu65yHo1ZOOaDDgnivM-APYZuowTg6NEDhHsEALPBGp4Ce0FZbGhFivM_dchKAtCgcuvZyVTuKQ8SNdS4hsVVmq7GJ9c-wMm14EXHOw=w902-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        carId: 2,
        image1: "https://lh3.googleusercontent.com/pw/AM-JKLVHT5Oa2DJB9orJtV5MYb3KbsgyP5l9TpfD9qCZtAoyCMyZNWQMW1mxZfWNE1e6C2jGh4IRmrrHU9azPBGG8I-eQqjNmMlrbxYxe_5oAUEhIqCvVw_y4xqQvVGRigy-aDAt6GxwtCe_4EIJ7HBk5fiblw=s512-no?authuser=0",
        image2: "https://lh3.googleusercontent.com/pw/AM-JKLULVxGlU9lHJiSkkEB5_WXEPHJ_RQSvyKdYqNZBDWOHUlTGTQwY2v5npHLgNvObPJW-OTgjkYAjdIegdnx_B8DheJI1TrYfKMpHfOhBeHFsj7shdAty0Qc-XL1zNF6t644uIJxRzm7cdHI3enibN5Zwtg=w902-h600-no?authuser=0",
        image3: "https://lh3.googleusercontent.com/pw/AM-JKLVm8VYRs8e0tbq94XXz_c4bcbierxqJV-Fyyek6YmAkxS5_a7CA6qw_iDDGRl80M2BIi08GVvwDdQmaBxzeUs7wYkUSe1tHNUr7H1wp1KJ2SyFPHIKXLw9h1z7YiVHxtPxH1pOQpdLpTLBli1z6BNapfw=w902-h600-no?authuser=0",
        image4: "https://lh3.googleusercontent.com/pw/AM-JKLXKdT0hkNDUZRGmUpjnZUBP4RaDl19smvwfOA4VECJ9af6S1B8lFU2mLjavrm1mk9paKIhi_LJZRYcs1J17Fvy1wUdI4KyQp1b_zOzuagz9ulpCfWnMxoi-HmhLcWurpdp3J6SVGt9Fv1vyorP-L70dNw=w902-h600-no?authuser=0",
        image5: "https://lh3.googleusercontent.com/pw/AM-JKLX6jYQKvDWCIV7MkNhvc8EdsPo4-IHoUGR1iNfBfLPdMqlF5F0LLVPWzymp_BFqegzqB9atISNWXBjg8cE2Z91CURo9dnho3csIjto9XWDxst_BjY57Bs3pvnxg_XB5smku9xLaFIujdk1SYfk9NZRdlQ=w902-h600-no?authuser=0",
        image6: "https://lh3.googleusercontent.com/pw/AM-JKLU5QO4HmSLava8J75fN539ckr9vhCdbF-pWbRDhC3dVpn26XnwuV0KYD1ygjTdPN2LjIpAUJwK1njvwv0Tg5G8hrEijYZ40Rq3BgfQXrJ2IoF6lrR5PM0w8hDMHOLRgk7mNh_EOQW4FGPs5lCzZynnM6Q=w902-h600-no?authuser=0",
        image7: "https://lh3.googleusercontent.com/pw/AM-JKLVh92UKl84vH4g6Uh5Rs6pZu9pKUEF3vOngydTAMSy-VKlLMuxnu65yHo1ZOOaDDgnivM-APYZuowTg6NEDhHsEALPBGp4Ce0FZbGhFivM_dchKAtCgcuvZyVTuKQ8SNdS4hsVVmq7GJ9c-wMm14EXHOw=w902-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        carId: 3,
        image1: "https://lh3.googleusercontent.com/pw/AM-JKLVHT5Oa2DJB9orJtV5MYb3KbsgyP5l9TpfD9qCZtAoyCMyZNWQMW1mxZfWNE1e6C2jGh4IRmrrHU9azPBGG8I-eQqjNmMlrbxYxe_5oAUEhIqCvVw_y4xqQvVGRigy-aDAt6GxwtCe_4EIJ7HBk5fiblw=s512-no?authuser=0",
        image2: "https://lh3.googleusercontent.com/pw/AM-JKLULVxGlU9lHJiSkkEB5_WXEPHJ_RQSvyKdYqNZBDWOHUlTGTQwY2v5npHLgNvObPJW-OTgjkYAjdIegdnx_B8DheJI1TrYfKMpHfOhBeHFsj7shdAty0Qc-XL1zNF6t644uIJxRzm7cdHI3enibN5Zwtg=w902-h600-no?authuser=0",
        image3: "https://lh3.googleusercontent.com/pw/AM-JKLVm8VYRs8e0tbq94XXz_c4bcbierxqJV-Fyyek6YmAkxS5_a7CA6qw_iDDGRl80M2BIi08GVvwDdQmaBxzeUs7wYkUSe1tHNUr7H1wp1KJ2SyFPHIKXLw9h1z7YiVHxtPxH1pOQpdLpTLBli1z6BNapfw=w902-h600-no?authuser=0",
        image4: "https://lh3.googleusercontent.com/pw/AM-JKLXKdT0hkNDUZRGmUpjnZUBP4RaDl19smvwfOA4VECJ9af6S1B8lFU2mLjavrm1mk9paKIhi_LJZRYcs1J17Fvy1wUdI4KyQp1b_zOzuagz9ulpCfWnMxoi-HmhLcWurpdp3J6SVGt9Fv1vyorP-L70dNw=w902-h600-no?authuser=0",
        image5: "https://lh3.googleusercontent.com/pw/AM-JKLX6jYQKvDWCIV7MkNhvc8EdsPo4-IHoUGR1iNfBfLPdMqlF5F0LLVPWzymp_BFqegzqB9atISNWXBjg8cE2Z91CURo9dnho3csIjto9XWDxst_BjY57Bs3pvnxg_XB5smku9xLaFIujdk1SYfk9NZRdlQ=w902-h600-no?authuser=0",
        image6: "https://lh3.googleusercontent.com/pw/AM-JKLU5QO4HmSLava8J75fN539ckr9vhCdbF-pWbRDhC3dVpn26XnwuV0KYD1ygjTdPN2LjIpAUJwK1njvwv0Tg5G8hrEijYZ40Rq3BgfQXrJ2IoF6lrR5PM0w8hDMHOLRgk7mNh_EOQW4FGPs5lCzZynnM6Q=w902-h600-no?authuser=0",
        image7: "https://lh3.googleusercontent.com/pw/AM-JKLVh92UKl84vH4g6Uh5Rs6pZu9pKUEF3vOngydTAMSy-VKlLMuxnu65yHo1ZOOaDDgnivM-APYZuowTg6NEDhHsEALPBGp4Ce0FZbGhFivM_dchKAtCgcuvZyVTuKQ8SNdS4hsVVmq7GJ9c-wMm14EXHOw=w902-h600-no?authuser=0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("galleries", null, {});
  },
};
