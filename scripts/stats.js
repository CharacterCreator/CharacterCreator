function generateScores(primary, secondary, race, subrace, classChoice) {
    var primary = 0;
    var secondary = 0;
    var scoresTemp = [0, 0, 0, 0, 0, 0];
    var scores = [0, 0, 0, 0, 0, 0];

    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;

    switch (race) {
        case "Dwarf":
            scores[2] += 2;
            break;
        case "Elf":
            scores[1] += 2;
            break;
        case "Halfling":
            scores[1] += 2;
            break;
        case "Human":
            for (var i = 0; i < scores.length; i++)
                scores[i] += 1;
            break;
        case "Dragonborn":
            scores[0] += 2;
            scores[5] += 1;
            break;
        case "Gnome":
            scores[3] += 2;
            break;
        case "Half-Elf":
            scores[5] += 2;
            var index = Math.floor(Math.random() * 5);
            scores[index] += 1;
            var index2 = 0;
            do {
                index2 = Math.floor(Math.random() * 5);
            } while (index2 != index);
            scores[index2] += 1;
            break;
        case "Half-Orc":
            scores[0] += 2;
            scores[2] += 1;
            break;
        case "Tiefling":
            scores[5] += 2;
            scores[3] += 1;
            break;
    }

    switch (subrace) {
        case "Hill ":
            scores[4] += 1;
            break;
        case "Mountain ":
            scores[0] += 2;
            break;
        case "High ":
            scores[3] += 1;
            break;
        case "Wood ":
            scores[4] += 1;
            break;
        case "Dark ":
            scores[5] += 1;
            break;
        case "Lightfoot ":
            scores[5] += 1;
            break;
        case "Stout ":
            scores[2] += 1;
            break;
        case "Forest ":
            scores[1] += 1;
            break;
        case "Rock ":
            scores[2] += 1;
            break;
    }

    switch (classChoice) {
        case "Barbarian":
            primary = 0;
            secondary = 2;
            break;
        case "Bard":
            primary = 5;
            secondary = 1;
            break;
        case "Cleric":
            primary = 4;
            secondary = Math.floor(Math.floor(Math.random() * 2) * 2);
            break;
        case "Druid":
            primary = 4;
            secondary = 2;
            break;
        case "Fighter":
            primary = Math.floor(Math.random() * 2);
            secondary = 2;
            break;
        case "Monk":
            primary = 1;
            secondary = 4;
            break;
        case "Paladin":
            primary = 0;
            secondary = 5;
            break;
        case "Ranger":
            primary = 1;
            secondary = 4;
            break;
        case "Rogue":
            primary = 1;
            secondary = Math.floor(Math.floor(Math.random() * 2) * 2) + 3;
            break;
        case "Sorcerer":
            primary = 5;
            secondary = 2;
            break;
        case "Warlock":
            primary = 5;
            secondary = 2;
            break;
        case "Wizard":
            primary = 3;
            secondary = Math.floor(Math.random() * 2) + 1;
            break;
    }

    for (var i = 0; i < 6; i++) {
        var score = 0;
        var lowest = 6;
        for (var j = 0; j < 4; j++) {
            var roll = 0;
            roll = Math.floor((Math.random() * 6) + 1);
            score += roll;
            if (roll < lowest)
                lowest = roll;
        }
        score -= lowest;
        scoresTemp[i] = score;
    }

    var biggest = 0;
    var index = 0;
    for (var i = 0; i < scoresTemp.length; i++) {
        if (scoresTemp[i] > biggest) {
            index = i;
            biggest = scoresTemp[i];
        }
    }

    scores[primary] += biggest;
    scoresTemp[index] = 0;

    var secondBiggest = 0;
    for (var i = 0; i < scoresTemp.length; i++) {
        if (scoresTemp[i] > secondBiggest) {
            index = i;
            secondBiggest = scoresTemp[i];
        }
    }

    scores[secondary] += secondBiggest;
    scoresTemp[index] = 0;

    for (var i = 0; i < scores.length; i++) {
        var original = scores[i];
        while (i != primary && i != secondary && scores[i] == original) {
                var j = Math.floor(Math.random() * 6);
                scores[i] += scoresTemp[j];
                scoresTemp[j] = 0;
        }
    }

    strength = scores[0];
    dexterity = scores[1];
    constitution = scores[2];
    intelligence = scores[3];
    wisdom = scores[4];
    charisma = scores[5];

    mods = [0, 0, 0, 0, 0, 0];

    if (strength >= 10)
        mods[0] = Math.floor((strength - 10) / 2);
    else if (strength % 2 == 0)
        mods[0] = Math.floor((strength - 10) / 2);
    else
        mods[0] = Math.floor((strength - 10.5) / 2);

    if (dexterity >= 10)
        mods[1] = Math.floor((dexterity - 10) / 2);
    else if (dexterity % 2 == 0)
        mods[1] = Math.floor((dexterity - 10) / 2);
    else
        mods[1] = Math.floor((dexterity - 10.5) / 2);
    if (constitution >= 10)
        mods[2] = Math.floor((constitution - 10) / 2);
    else if (constitution % 2 == 0)
        mods[2] = Math.floor((constitution - 10) / 2);
    else
        mods[2] = Math.floor((constitution - 10.5) / 2);

    if (intelligence >= 10)
        mods[3] = Math.floor((intelligence - 10) / 2);
    else if (intelligence % 2 == 0)
        mods[3] = Math.floor((intelligence - 10) / 2);
    else
        mods[3] = Math.floor((intelligence - 10.5) / 2);

    if (wisdom >= 10)
        mods[4] = Math.floor((wisdom - 10) / 2);
    else if (wisdom % 2 == 0)
        mods[4] = Math.floor((wisdom - 10) / 2);
    else
        mods[4] = Math.floor((wisdom - 10.5) / 2);

    if (charisma >= 10)
        mods[5] = Math.floor((charisma - 10) / 2);
    else if (charisma % 2 == 0)
        mods[5] = Math.floor((charisma - 10) / 2);
    else
        mods[5] = Math.floor((charisma - 10.5) / 2);

    strMod = mods[0];
    dexMod = mods[1];
    conMod = mods[2];
    intMod = mods[3];
    wisMod = mods[4];
    chaMod = mods[5];

    for (var e = 0; e < mods.length; e++) {
        if (mods[e] >= 0)
            mods[e] = "+" + mods[e];
    }

    return "Strength: " + strength + " (" + mods[0] + ")</br> Dexterity: " + dexterity + " (" + mods[1] + ")</br> Constitution: " + constitution + " (" + mods[2] + ")</br> Intelligence: " + intelligence + " (" + mods[3] + ")</br> Wisdom: " + wisdom + " (" + mods[4] + ")</br> Charisma: " + charisma + " (" + mods[5] + ")";
}

function setHealth() {
    maxHP += hitDie + conMod;
    if (maxHP <= 0)
        maxHP = 1;
    return "Max HP: " + maxHP;
}

function setSpeed() {
    var baseSpeed = 25;
    var raceMod = 0;
    if (race !== "Gnome" && race !== "Halfling" && race !== "Dwarf")
        raceMod += 5;
    speed = baseSpeed + raceMod;
    return "Speed: " + speed;
}

function setAC(index) {
  armorClass += dexMod;
  switch (index) {
    case 0:
      armorClass += 1;
      break;
    case 1:
      armorClass += 1;
      break;
    case 2:
      armorClass += 2;
      break;
    case 3:
      armorClass += 2;
      if (dexMod > 2) {
        armorClass -= dexMod;
        armorClass += 2;
      }
      break;
    case 4:
      armorClass += 3;
      if (dexMod > 2) {
        armorClass -= dexMod;
        armorClass += 2;
      }
    case 5:
      armorClass += 4;
      if (dexMod > 2) {
        armorClass -= dexMod;
        armorClass += 2;
      }
      break;
    case 6:
      armorClass += 4;
      if (dexMod > 2) {
        armorClass -= dexMod;
        armorClass += 2;
      }
      break;
    case 7:
      armorClass += 5;
      if (dexMod > 2) {
        armorClass -= dexMod;
        armorClass += 2;
      }
      break;
    case 8:
      armorClass += 4;
      armorClass -= dexMod;
      break;
    case 9:
      armorClass += 6;
      armorClass -= dexMod;
      break;
    case 10:
      armorClass += 7;
      armorClass -= dexMod;
      break;
    case 11:
      armorClass += 8;
      armorClass -= dexMod;
      break;
  }
}

function displayAC() {
  for (var e = 0; e < equipment.length; e++) {
    if (equipment[e][0] == "Shield")
      return "Armor Class: " + armorClass + " (" + (armorClass + 2) + " while using shield)";
  }
  return "Armor Class: " + armorClass;
}
