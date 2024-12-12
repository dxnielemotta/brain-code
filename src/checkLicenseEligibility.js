function checkLicenseEligibility(age, yearsOfExperience) {
  let message;
  age < 18
    ? (message = "Não pode obter a licença.")
    : age >= 18 && yearsOfExperience < 2
    ? (message = "Pode obter a licença, mas é necessária supervisão.")
    : (message = "Pode obter a licença sem supervisão.");

  return message;
}

module.exports = {
  checkLicenseEligibility,
};
