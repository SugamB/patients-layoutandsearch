const patients = {
    patients: [
      {
        firstName: "Julie",
        lastName: "Mao",
        sex: "Female",
        birthdate: -863654400000,
        conditions: ["COPD", "Hypertension", "Diabetes"]
      },
      {
        firstName: "Naomi",
        lastName: "Nagata",
        sex: "Female",
        birthdate: -778464000000,
        conditions: ["pneumonia"]
      },
      {
        firstName: "James",
        lastName: "Holden",
        sex: "Male",
        birthdate: -688348800000,
        conditions: ["Dermatitis", "Diabetes"]
      },
      {
        firstName: "Roberta",
        lastName: "Draper",
        sex: "Female",
        birthdate: -393292800000,
        conditions: ["COPD", "Hypertension"]
      },
      {
        firstName: "Amos",
        lastName: "Burton",
        sex: "Male",
        birthdate: -333936000000,
        conditions: ["Dermatitis", "Diabetes"]
      },
      {
        firstName: "Chrisjen",
        lastName: "Avasarala",
        sex: "Female",
        birthdate: -306028800000,
        conditions: ["COPD", "depression"]
      },
      {
        firstName: "Joe",
        lastName: "Miller",
        sex: "Male",
        birthdate: -300585600000,
        conditions: ["Osteoarthritis", "Hyperlipidemia", "Diabetes"]
      },
      {
        firstName: "Alex",
        lastName: "Kamal",
        sex: "Male",
        birthdate: -141609600000,
        conditions: ["Obesity", "Anxiety", "Diabetes"]
      },
      {
        firstName: "Camina",
        lastName: "Drummer",
        sex: "Female",
        birthdate: -83980800000,
        conditions: ["COPD", "Hypothyroidism", "Osteoarthritis"]
      },
      {
        firstName: "Sadavir",
        lastName: "Errinwright",
        sex: "Male",
        birthdate: -71452800000,
        conditions: ["Acute laryngopharyngitis", "Asthma", "Allergic rhinitis"]
      },
      {
        firstName: "Frederick",
        lastName: "Lucius Johnson",
        sex: "Male",
        birthdate: 25833600000,
        conditions: ["COPD", "Hypertension", "Reflux esophagitis"]
      },
      {
        firstName: "Clarissa",
        lastName: "Mao",
        sex: "Female",
        birthdate: 46310400000,
        conditions: ["COPD", "Hypertension", "Diabetes"]
      },
      {
        firstName: "Monica",
        lastName: "Stuart",
        sex: "Female",
        birthdate: 148003200000,
        conditions: ["Hypothyroidism", "Hypertension", "Diabetes"]
      },
      {
        firstName: "Jules-Pierre",
        lastName: "Mao",
        sex: "Male",
        birthdate: 165801600000,
        conditions: ["Hyperlipidemia", "Hypothyroidism", "Diabetes"]
      },
      {
        firstName: "Frodo",
        lastName: "Baggins",
        sex: "Male",
        birthdate: 242006400000,
        conditions: ["Acute bronchitis", "Hypertension", "Diabetes"]
      },
      {
        firstName: "Samwise",
        lastName: "Gamgee",
        sex: "Male",
        birthdate: 269049600000,
        conditions: [
          "Depressive disorder",
          "Visual refractive errors",
          "Diabetes"
        ]
      },
      {
        firstName: "Meriadoc",
        lastName: "Brandybuck",
        sex: "Male",
        birthdate: 310348800000,
        conditions: ["COPD", "Hypertension"]
      },
      {
        firstName: "Peregrin",
        lastName: "Took",
        sex: "Male",
        birthdate: 345772800000,
        conditions: [
          "Obesity",
          "Hypertension",
          "Diabetes",
          "Coronary atherosclerosis"
        ]
      }
    ]
  };
  
  // export default patients;
  
  export const getPatients = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(patients);
      }, 2000)
    );
  };
  