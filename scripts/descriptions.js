function setRace() {
    if (!manualRace) {
        races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
        race = races[Math.floor(Math.random() * 9)];
        subraces = ["Hill ", "Mountain ", "High ", "Wood ", "Dark ", "Lightfoot ", "Stout ", "Forest ", "Rock "];
        subrace = "";
        switch (race) {
            case "Dwarf":
                subrace = subraces[Math.floor(Math.random() * 2)];
                break;
            case "Elf":
                subrace = subraces[Math.floor(Math.random() * 3) + 2];
                break;
            case "Halfling":
                subrace = subraces[Math.floor(Math.random() * 2) + 5];
                break;
            case "Gnome":
                subrace = subraces[Math.floor(Math.random() * 2) + 7];
                break;
            default:
                subrace = "";
        }
    }
    return "Race: " + subrace + race + " ";
}

function setRaceManual(raceNumber) {
  manualRace = true;
  switch (raceNumber) {
      case 1:
          race = "Dwarf";
          subrace = "Hill ";
          document.getElementById("raceSelection").innerHTML = "Hill Dwarf";
          break;
      case 2:
          race = "Dwarf";
          subrace = "Mountain ";
          document.getElementById("raceSelection").innerHTML = "Mountain Dwarf";
          break;
      case 3:
          race = "Elf";
          subrace = "High ";
          document.getElementById("raceSelection").innerHTML = "High Elf";
          break;
      case 4:
          race = "Elf";
          subrace = "Wood ";
          document.getElementById("raceSelection").innerHTML = "Wood Elf";
          break;
      case 5:
          race = "Elf";
          subrace = "Dark ";
          document.getElementById("raceSelection").innerHTML = "Dark Elf";
          break;
      case 6:
          race = "Halfling";
          subrace = "Lightfoot ";
          document.getElementById("raceSelection").innerHTML = "Lightfoot Halfling";
          break;
      case 7:
          race = "Halfling";
          subrace = "Stout ";
          document.getElementById("raceSelection").innerHTML = "Stout Halfling";
          break;
      case 8:
          race = "Human";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Human";
          break;
      case 9:
          race = "Dragonborn";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Dragonborn";
          break;
      case 10:
          race = "Gnome";
          subrace = "Forest ";
          document.getElementById("raceSelection").innerHTML = "Forest Gnome";
          break;
      case 11:
          race = "Gnome";
          subrace = "Rock ";
          document.getElementById("raceSelection").innerHTML = "Rock Gnome";
          break;
      case 12:
          race = "Half-Elf";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Half-Elf";
          break;
      case 13:
          race = "Half-Orc";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Half-Orc";
          break;
      case 14:
          race = "Tiefling";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Tiefling";
          break;
      case 15:
          manualRace = false;
          race = "";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Race Selection";
          break;
  }
}

//We'll come back to this ;)
function setLevel() {
    level = 1;
}

function setClass() {
  var classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
  var hitDice = [12, 8, 8, 8, 10, 8, 10, 10, 8, 6, 8, 6];
  if (!manualClass) {
    var index = Math.floor(Math.random() * 11);
    classChoice = classes[index];
    hitDie = hitDice[index];
  } else {
    for (var i = 0; i < classes.length; i++) {
      if (classChoice == classes[i]) {
        hitDie = hitDice[i];
        break;
      }
    }
  }
  switch (classChoice) {
      case "Cleric":
          var choice = Math.floor(Math.random() * 7);
          switch (choice) {
              case 0:
                  subclass = "Knowledge Domain ";
                  break;
              case 1:
                  subclass = "Life Domain ";
                  break;
              case 2:
                  subclass = "Light Domain ";
                  break;
              case 3:
                  subclass = "Nature Domain ";
                  break;
              case 4:
                  subclass = "Tempest Domain ";
                  break;
              case 5:
                  subclass = "Trickery Domain ";
                  break;
              case 6:
                  subclass = "War Domain ";
                  break;
          }
          subclass = subclass + classChoice;
          return "Class: " + subclass;
      case "Sorcerer":
          var choice = Math.floor(Math.random() * 2);
          switch (choice) {
              case 0:
                  subclass = "Draconic Bloodline ";
                  break;
              case 1:
                  subclass = "Wild Magic ";
                  break;
          }
          subclass = subclass + classChoice;
          return "Class: " + subclass;
      case "Warlock":
          var choice = Math.floor(Math.random() * 3);
          switch (choice) {
              case 0:
                  subclass = " of the Archfey";
                  break;
              case 1:
                  subclass = " of the Fiend";
                  break;
              case 2:
                  subclass = " of the Great Old One";
                  break;
          }
          subclass = classChoice + subclass;
          return "Class: " + subclass;
  }
  if (level >= 2) {
      switch (classChoice) {
          case "Druid":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      choice = Math.floor(Math.random() * 8);
                      subclass = "Circle of the Land ";
                      switch (choice) {
                          case 0:
                              subclass += "(Arctic) ";
                              break;
                          case 1:
                              subclass += "(Coast) ";
                              break;
                          case 2:
                              subclass += "(Desert) ";
                              break;
                          case 3:
                              subclass += "(Forest) ";
                              break;
                          case 4:
                              subclass += "(Grassland) ";
                              break;
                          case 5:
                              subclass += "(Mountain) ";
                              break;
                          case 6:
                              subclass += "(Swamp) ";
                              break;
                          case 7:
                              subclass += "(Underdark) ";
                              break;
                      }
                      break;
                  case 1:
                      subclass = "Circle of the Moon ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Wizard":
              var choice = Math.floor(Math.random() * 8);
              switch (choice) {
                  case 0:
                      subclass = "School of Abjuration ";
                      break;
                  case 1:
                      subclass = "School of Conjuration ";
                      break;
                  case 2:
                      subclass = "School of Divination ";
                      break;
                  case 3:
                      subclass = "School of Enchantment ";
                      break;
                  case 4:
                      subclass = "School of Evocation ";
                      break;
                  case 5:
                      subclass = "School of Illusion ";
                      break;
                  case 6:
                      subclass = "School of Necromancy ";
                      break;
                  case 7:
                      subclass = "School of Transmutation ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
      }
  }
  if (level >= 3) {
      switch (classChoice) {
          case "Barbarian":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = "Path of the Berserker ";
                      break;
                  case 1:
                      subclass = "Path of the Totem Warrior ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Bard":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = "College of Lore ";
                      break;
                  case 1:
                      subclass = "College of Valor ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Fighter":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = " (Champion)";
                      break;
                  case 1:
                      subclass = " (Battle Master)";
                      break;
                  case 2:
                      subclass = " (Eldritch Knight)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
          case "Monk":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = "Way of the Open Hand ";
                      break;
                  case 1:
                      subclass = "Way of Shadow ";
                      break;
                  case 2:
                      subclass = "Way of the Four Elements ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Paladin":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = "Oath of Devotion ";
                      break;
                  case 1:
                      subclass = "Oath of the Ancients ";
                      break;
                  case 2:
                      subclass = "Oath of Vengeance ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Ranger":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = " (Hunter)";
                      break;
                  case 1:
                      subclass = " (Beastmaster)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
          case "Rogue":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = " (Thief)";
                      break;
                  case 1:
                      subclass = " (Assassin)";
                      break;
                  case 2:
                      subclass = " (Arcane Trickster)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
      }
  }
  subclass = classChoice;
  return "Class: " + subclass;
}

function setClassManual(classNumber) {
  manualClass = true;
  switch (classNumber) {
    case 1:
      classChoice = "Barbarian";
      document.getElementById("classSelection").innerHTML = "Barbarian";
      break;
    case 2:
      classChoice = "Bard";
      document.getElementById("classSelection").innerHTML = "Bard";
      break;
    case 3:
      classChoice = "Cleric";
      document.getElementById("classSelection").innerHTML = "Cleric";
      break;
    case 4:
      classChoice = "Druid";
      document.getElementById("classSelection").innerHTML = "Druid";
      break;
    case 5:
      classChoice = "Fighter";
      document.getElementById("classSelection").innerHTML = "Fighter";
      break;
    case 6:
      classChoice = "Monk";
      document.getElementById("classSelection").innerHTML = "Monk";
      break;
    case 7:
      classChoice = "Paladin";
      document.getElementById("classSelection").innerHTML = "Paladin";
      break;
    case 8:
      classChoice = "Ranger";
      document.getElementById("classSelection").innerHTML = "Ranger";
      break;
    case 9:
      classChoice = "Rogue";
      document.getElementById("classSelection").innerHTML = "Rogue";
      break;
    case 10:
      classChoice = "Sorcerer";
      document.getElementById("classSelection").innerHTML = "Sorcerer";
      break;
    case 11:
      classChoice = "Warlock";
      document.getElementById("classSelection").innerHTML = "Warlock";
      break;
    case 12:
      classChoice = "Wizard";
      document.getElementById("classSelection").innerHTML = "Wizard";
      break;
    case 13:
      classChoice = "";
      manualClass = false;
      document.getElementById("ClassSelection").innerHTML = "Class Selection";
      break;
  }
}

function setBackground() {
    var backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin"];
    backgroundSelect = backgrounds[Math.floor(Math.random() * 18)];

        //Personality Traits




        switch (backgroundSelect) {
            case "Acolyte":
                var index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsAcolyte[index];
                personalityTraitsAcolyte[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsAcolyte[index];
                }
                ideal = idealsAcolyte[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Charlatan":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsCharlatan[index];
                personalityTraitsCharlatan[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsCharlatan[index];
                }
                ideal = idealsCharlatan[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Criminal":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsCriminal[index];
                personalityTraitsCriminal[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsCriminal[index];
                }
                ideal = idealsCriminal[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Entertainer":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsEntertainer[index];
                personalityTraitsEntertainer[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsEntertainer[index];
                }
                ideal = idealsEntertainer[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Folk Hero":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsFolkHero[index];
                personalityTraitsFolkHero[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsFolkHero[index];
                }
                ideal = idealsFolkHero[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Gladiator":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGladiator[index];
                personalityTraitsGladiator[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGladiator[index];
                }
                ideal = idealsGladiator[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Guild Artisan":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGuildArtisan[index];
                personalityTraitsGuildArtisan[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGuildArtisan[index];
                }
                ideal = idealsGuildArtisan[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Guild Merchant":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGuildMerchant[index];
                personalityTraitsGuildMerchant[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGuildMerchant[index];
                }
                ideal = idealsGuildMerchant[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Hermit":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsHermit[index];
                personalityTraitsHermit[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsHermit[index];
                }
                ideal = idealsHermit[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Knight":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsKnight[index];
                personalityTraitsKnight[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsKnight[index];
                }
                ideal = idealsKnight[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Noble":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsNoble[index];
                personalityTraitsNoble[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsNoble[index];
                }
                ideal = idealsNoble[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Outlander":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsOutlander[index];
                personalityTraitsOutlander[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsOutlander[index];
                }
                ideal = idealsOutlander[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Pirate":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsPirate[index];
                personalityTraitsPirate[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsPirate[index];
                }
                ideal = idealsPirate[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Sage":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSage[index];
                personalityTraitsSage[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSage[index];
                }
                ideal = idealsSage[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Sailor":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSailor[index];
                personalityTraitsSailor[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSailor[index];
                }
                ideal = idealsSailor[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Soldier":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSoldier[index];
                personalityTraitsSoldier[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSoldier[index];
                }
                ideal = idealsSoldier[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Spy":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSpy[index];
                personalityTraitsSpy[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSpy[index];
                }
                ideal = idealsSpy[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Urchin":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsUrchin[index];
                personalityTraitsUrchin[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsUrchin[index];
                }
                ideal = idealsUrchin[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
    }
}

function setAlignment(race, ideal) {
    var alignmentOrder = ["Lawful", "Neutral", "Chaotic"];
    var alignmentMoral = ["Good", "Neutral", "Evil"];
    order = "";
    moral = "";
    if (ideal.includes("Lawful"))
        order = "Lawful";
    else if (ideal.includes("Chaotic"))
        order = "Chaotic";
    else if (ideal.includes("Good"))
        moral = "Good";
    else if (ideal.includes("Evil"))
        moral = "Evil";
    else if (ideal.includes("Neutral")) {
        var choice = Math.floor(Math.random() * 2);
        if (choice == 0)
            order = "Neutral";
        else
            moral = "Neutral";
    }
    else {
        var choice1 = Math.floor(Math.random() * 2);
        if (choice1 == 0)
            order = alignmentOrder[Math.floor(Math.random() * 3)];
        else
            moral = alignmentMoral[Math.floor(Math.random() * 3)];
    }
    switch (race) {
        case "Dwarf":
            if (order == (""))
                order = "Lawful";
            else
                moral = "Good";
            break;
        case "Elf":
            if (order == (""))
                order = "Chaotic";
            else
                moral = "Good";
            break;
        case "Halfling":
            if (order == (""))
                order = "Lawful";
            else
                moral = "Good";
            break;
        case "Human":
            if (order == (""))
                order = alignmentOrder[Math.floor(Math.random() * 3)];
            else
                moral = alignmentMoral[Math.floor(Math.random() * 3)];
            break;
        case "Dragonborn":
            if (order == (""))
                order = alignmentOrder[Math.floor(Math.random() * 3)];
            else
                moral = "Good";
            break;
        case "Gnome":
            if (order == (""))
                order = alignmentOrder[Math.floor((Math.random() * 2) * 2)];
            else
                moral = "Good";
            break;
        case "Half-Elf":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor(Math.random() * 3)];
            break;
        case "Half-Orc":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor(Math.random() * 2) + 1];
            break;
        case "Tiefling":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor((Math.random() * 2) + 1)];
            break;

    }
    if (order == moral)
        moral = " ";

    return "Alignment: " + order + " " + moral;
}
