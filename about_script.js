function getAge() {
      var today = new Date();
      var birthDate = new Date(1997, 3, 11);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      document.write(age);
    }