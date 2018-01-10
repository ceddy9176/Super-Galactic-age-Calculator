const moment = require('moment');

export class Calculator {

  ageInSeconds(age) {
    const yearInSeconds = (age * 31536000);
    return yearInSeconds;
  }

  twoDatesSeconds(a,b) {
    const date1 = moment(a);
    const date2 = moment(b);
    const result = date1.diff(date2, 'seconds');
    return result;
  }

  yearOnMercury(age) {
    const mercuryAge = (Math.floor(age / .241));
    return mercuryAge;
  }

  yearOnVenus(age) {
    const venusAge = (Math.floor(age / .615));
    return venusAge;
  }

  yearOnMars(age) {
    const marsAge = (Math.floor(age / 1.881));
    return marsAge;
  }

  yearOnJupiter(age) {
  const jupiterAge = (Math.floor(age / 11.86 ));
  return jupiterAge;
}

yearOnPlanet(age,sex,continent,planet) {

//Mercury Life Expectancy

  // North America
  if (sex === "male" & continent === "North America" && planet === "Mercury") {
    const lifeExpect = 76;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "North America" && planet === "Mercury") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // South America
  } else if (sex == "male" && continent == "South America" && planet === "Mercury") {
    const lifeExpect = 73;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "South America" && planet === "Mercury") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Asia
  } else if (sex == "male" && continent == "Asia" && planet === "Mercury") {
    const lifeExpect = 71;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Asia" && planet === "Mercury") {
    const lifeExpect = 74;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Africa
  } else if (sex == "male" && continent == "Africa" && planet === "Mercury") {
    const lifeExpect = 61;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Africa" && planet === "Mercury") {
    const lifeExpect = 64;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Europe
  }  else if (sex == "male" && continent == "Europe" && planet === "Mercury") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  }  else if (sex == "female" && continent == "Europe" && planet === "Mercury") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Austrailia
  } else if (sex == "male" && continent == "Austrailia" && planet === "Mercury") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Austrailia" && planet === "Mercury") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .241) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }

//Venus Life Expectancy

  // North America
  } else if (sex === "male" & continent === "North America" && planet === "Venus") {
    const lifeExpect = 76;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "North America" && planet === "Venus") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // South America
  } else if (sex == "male" && continent == "South America" && planet === "Venus") {
    const lifeExpect = 73;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "South America" && planet === "Venus") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Asia
  } else if (sex == "male" && continent == "Asia" && planet === "Venus") {
    const lifeExpect = 71;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Asia" && planet === "Venus") {
    const lifeExpect = 74;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Africa
  } else if (sex == "male" && continent == "Africa" && planet === "Venus") {
    const lifeExpect = 61;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Africa" && planet === "Venus") {
    const lifeExpect = 64;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Europe
  } else if (sex == "male" && continent == "Europe" && planet === "Venus") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Europe" && planet === "Venus") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Austrailia
  } else if (sex == "female" && continent == "Austrailia" && planet === "Venus") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Austrailia" && planet === "Venus") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / .615) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }

// Mars Life Expectancy

  // North America
  } else if (sex === "male" & continent === "North America" && planet === "Mars") {
    const lifeExpect = 76;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "North America" && planet === "Mars") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // South America
  } else if (sex == "male" && continent == "South America" && planet === "Mars") {
    const lifeExpect = 73;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "South America" && planet === "Mars") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Asia
  } else if (sex == "male" && continent == "Asia" && planet === "Mars") {
    const lifeExpect = 71;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Asia" && planet === "Mars") {
    const lifeExpect = 74;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Africa
  } else if (sex == "male" && continent == "Africa" && planet === "Mars") {
    const lifeExpect = 61;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Africa" && planet === "Mars") {
    const lifeExpect = 64;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Europe
  }  else if (sex == "male" && continent == "Europe" && planet === "Mars") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  }  else if (sex == "female" && continent == "Europe" && planet === "Mars") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Austrailia
  } else if (sex == "female" && continent == "Austrailia" && planet === "Mars") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Austrailia" && planet === "Mars") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }

// Mars Life Expectancy

  // North America
  } else if (sex === "male" & continent === "North America" && planet === "Mars") {
    const lifeExpect = 76;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "North America" && planet === "Mars") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // South America
  } else if (sex == "male" && continent == "South America" && planet === "Mars") {
    const lifeExpect = 73;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "South America" && planet === "Mars") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Asia
  } else if (sex == "male" && continent == "Asia" && planet === "Mars") {
    const lifeExpect = 71;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Asia" && planet === "Mars") {
    const lifeExpect = 74;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Africa
  } else if (sex == "male" && continent == "Africa" && planet === "Mars") {
    const lifeExpect = 61;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Africa" && planet === "Mars") {
    const lifeExpect = 64;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Europe
  }  else if (sex == "male" && continent == "Europe" && planet === "Mars") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  }  else if (sex == "female" && continent == "Europe" && planet === "Mars") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Austrailia
  } else if (sex == "male" && continent == "Austrailia" && planet === "Mars") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Austrailia" && planet === "Mars") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 1.881) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }

// jupiter Life Expectancy

  // North America
  } else if (sex === "male" & continent === "North America" && planet === "Jupiter") {
    const lifeExpect = 76;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "North America" && planet === "Jupiter") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


    // South America
  } else if (sex == "male" && continent == "South America" && planet === "Jupiter") {
    const lifeExpect = 73;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "South America" && planet === "Jupiter") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


    // Asia
  } else if (sex == "male" && continent == "Asia" && planet === "Jupiter") {
    const lifeExpect = 71;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Asia" && planet === "Jupiter") {
    const lifeExpect = 74;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


    // Africa
  } else if (sex == "male" && continent == "Africa" && planet === "Jupiter") {
    const lifeExpect = 61;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Africa" && planet === "Jupiter") {
    const lifeExpect = 64;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Europe
  } else if (sex == "male" && continent == "Europe" && planet === "Jupiter") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Europe" && planet === "Jupiter") {
    const lifeExpect = 81;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }


  // Austrailia
  } else if (sex == "female" && continent == "Austrailia" && planet === "Jupiter") {
    const lifeExpect = 75;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
    }
  } else if (sex == "female" && continent == "Austrailia" && planet === "Jupiter") {
    const lifeExpect = 79;
    if (age <= lifeExpect) {
      const leftOnEarth = (lifeExpect - age);
      return (Math.floor(leftOnEarth / 11.86) + " more years to live on " + planet);
    } else {
      return "your dead, try to be younger next time.";
      }
    }
  }
}
