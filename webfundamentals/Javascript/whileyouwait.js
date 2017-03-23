for(var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--){
    if (daysUntilMyBirthday >= 30){
    console.log(daysUntilMyBirthday + " days until my birthday." + " Sigh! So far away!")
  }
    if (daysUntilMyBirthday < 30 && daysUntilMyBirthday >= 5){
      console.log(daysUntilMyBirthday + " days until my birthday." + " Woo hoo! It's getting close!")
    }
    if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0){
      console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!")
    }
    if (daysUntilMyBirthday === 0){
      console.log("HAPPY BIRTHDAY TO ME!!!")
    }
}
