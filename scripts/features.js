function setFeatures() {
    //Features by Race
    languages[0] = 1;
    features += "<u>Racial Traits</u></br>";
    switch (race) {
      case "Dwarf":
        features += "<b>Darkvision</b>: PHB pg. 20 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Dwarven Resilience</b>: PHB pg. 20 </br>You have advantage on saving throws against poison and resistance to poison damage. </br>";
        features += "<b>Dwarven Combat Training</b>: PHB pg. 20 </br>You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer. </br>";
        weaponProficiencies[3] = 1;
        weaponProficiencies[14] = 1;
        weaponProficiencies[30] = 1;
        features += "<b>Tool Proficiency</b>: PHB pg. 20 </br>Choose one of the following artisans' tools to gain proficiency with: smith's tools, brewer's supplies, or mason's tools. </br>";
        var choice = Math.floor(Math.random() * 3);
        switch (choice) {
          case 0:
            toolProficiencies[1] = 1;
            break;
          case 1:
            toolProficiencies[13] = 1;
            break;
          case 2:
            toolProficiencies[18] = 1;
            break;
        }
        features += "<b>Stonecunning</b>: PHB pg. 20 </br>Whenever you make a History check related to the origin of stonework, you are considered proficient in the check and add double your proficiency bonus. </br>";
        switch (subrace) {
          case "Hill ":
            features += "<b>Dwarven Toughness</b>: PHB pg. 20 </br>Your hit point maximum increases by 1, and increases by 1 again each time you gain a level. </br>";
            maxHP += level;
            break;
          case "Mountain ":
            features += "<b>Dwarven Armor Training</b>: PHB pg. 20 </br>You have proficiency with light and medium armor. </br>";
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            break;
        }
        languages[1] = 1;
        break;
      case "Elf":
        if (subrace !== "Dark ")
          features += "<b>Darkvision</b>: PHB pg. 23 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Keen Senses</b>: PHB pg. 23 </br>You have proficiency in the Perception skill. </br>";
        skillProficiencies[12] = 1;
        features += "<b>Fey Ancestry</b>: PHB pg. 23 </br>You have advantage on saving throws against being charmed and magic can't put you to sleep. </br>";
        features += "<b>Trance</b>: PHB pg. 23 </br>Instead of sleeping, you need only meditate deeply for 4 hours. </br>";
        switch (subrace) {
          case "High ":
            features += "<b>Elf Weapon Training</b>: PHB pg. 23 </br>You have proficiency with the longsword, shortsword, shortbow, and longbow. </br>";
            weaponProficiencies[12] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[35] = 1;
            features += "<b>Cantrip</b>: PHB pg. 24 </br>You know one wizard cantrip. Intelligence is your spellcasting ability for it. </br>";
            var choice = Math.floor(Math.random() * 18);
            while (languages[choice] == 1)
              choice = Math.floor(Math.random() * 18);
            languages[choice] = 1;
            break;
          case "Wood ":
            features += "<b>Elf Weapon Training</b>: PHB pg. 24 </br>You have proficiency with the longsword, shortsword, shortbow, and longbow. </br>";
            weaponProficiencies[12] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[35] = 1;
            features += "<b>Fleet of Foot</b>: PHB pg. 24 </br>Your base walking speed is 35 feet. </br>";
            speed = 35;
            features += "<b>Mask of the Wild</b>: PHB pg. 24 </br>You can attempt to hide even when only lightly obscured by natural phenomena. </br>";
            break;
          case "Dark ":
            features += "<b>Superior Darkvision</b>: PHB pg. 24 </br>You have superior vision in dim and dark conditions, within 120 feet of you. </br>";
            features += "<b>Sunlight Sensitivity</b>: PHB pg. 24 </br>You have disadvantage on attack rolls and Perception checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight. </br>";
            features += "<b>Drow Magic</b>: PHB pg. 24 </br>You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once per day. When you reach 5th level, you can also cast the Darkness spell once per day. Charisma is your spellcasting ability for these spells. </br>";
            features += "<b>Drow Weapon Training</b>: PHB pg. 24 </br>You have proficiency with rapiers, shortswords, and hand crossbows. </br>";
            weaponProficiencies[25] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[33] = 1;
            break;
        }
        languages[2] = 1;
        break;
      case "Halfling":
        features += "<b>Lucky</b>: PHB pg. 28 </br>When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. </br>";
        features += "<b>Brave</b>: PHB pg. 28 </br>You have advantage on saving throws against being frightened. </br>";
        features += "<b>Halfling Nimbleness</b>: PHB pg. 28 </br>You can move through the space of any creature that is of a size larger than yours. </br>";
        switch (subrace) {
          case "Lightfoot ":
            features += "<b>Naturally Stealthy</b>: PHB pg. 28 </br>You can attempt to hide even when you are obscured only by a creature of a size larger than yours. </br>";
            break;
          case "Stout ":
            features += "<b>Stout Resilience</b>: PHB pg. 28 </br>You have advantage on saving throws against poison and resistance against poison damage. </br>";
            break;
        }
        languages[6] = 1;
        break;
      case "Human":
        features += "<b>No racial features.</b> </br>";
        var choice = Math.floor(Math.random() * 18);
        while (languages[choice] == 1)
          choice = Math.floor(Math.random() * 18);
        languages[choice] = 1;
        break;
      case "Dragonborn":
        var dragons = ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"];
        var breaths = ["acid", "lightning", "fire", "lightning", "acid", "fire", "poison", "fire", "cold", "cold"];
        var ranges = ["5 by 30 ft. line", "5 by 30 ft. line", "5 by 30 ft. line", "5 by 30 ft. line", "5 by 30 ft. line", "15 ft. cone", "15 ft. cone", "15 ft. cone", "15 ft. cone", "15 ft. cone"];
        var saves = ["Dexterity", "Dexterity", "Dexterity", "Dexterity", "Dexterity", "Dexterity", "Constitution", "Dexterity", "Constitution", "Constitution"];
        var choice = Math.floor(Math.random() * 10);
        var dragonType = dragons[choice];
        var breathType = breaths[choice];
        var breathRange = ranges[choice];
        var breathSave = saves[choice];
        var breathDC = 8 + profBonus + conMod;
        var breathDamage = "";
        if (level < 6)
          breathDamage = "2d6";
        else if (level >= 6 && level < 11)
          breathDamage = "3d6";
        else if (level >= 11 && level < 16)
          breathDamage = "4d6";
        else
          breathDamage = "5d6";
        features += "<b>Draconic Ancestry</b>: PHB pg. 34 </br>You are a " + dragonType + " dragonborn. </br>";
        features += "<b>Breath Weapon</b>: PHB pg. 34 </br>Once per short or long rest, you can use your breath weapon to cause each creature in a " + breathRange + " to make a DC " + breathDC + " "  + breathSave + " saving throw or take " + breathDamage + " " + breathType + " damage, taking half as much on a successful save. </br>";
        features += "<b>Damage Resistance</b>: PHB pg. 34 </br>You have resistance to " + breathType + " damage. </br>";
        languages[10] = 1;
        break;
      case "Gnome":
        features += "<b>Darkvision</b>: PHB pg. 37 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Gnome Cunning</b>: PHB pg. 37 </br>You have adavantage on Intelligence, Wisdom, and Charisma saving throws against magic. </br>";
        switch (subrace) {
          case "Forest ":
            features += "<b>Natural Illusionist</b>: PHB pg. 37 </br>You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it. </br>";
            features += "<b>Speak with Small Beasts</b>: PHB pg. 37 </br>You can communicate simple ideas with Small or smaller beasts. </br>";
            break;
          case "Rock ":
            features += "<b>Artificer's Lore</b>: PHB pg. 37 </br>Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, and your proficiency bonus applies, you can apply double your proficiency bonus to the check. </br>";
            features += "<b>Tinker</b>: PHB pg. 37 </br>You have proficiency with tinker's tools. Using these tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (choose from those in the PHB) which functions for 24 hours, unless you spend an hour to repair it to keep it functioning. You can have up to three devices at a time. </br>";
            toolProficiencies[20] = 1;
            break;
        }
        languages[4] = 1;
        break;
      case "Half-Elf":
        features += "<b>Darkvision</b>: PHB pg. 39 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Fey Ancestry</b>: PHB pg. 39 </br>You have advantage on saving throws against being charmed, and magic can't put you to sleep. </br>";
        features += "<b>Skill Versatility</b>: PHB pg. 39 </br>You have proficiency in two extra skills. </br>";
        var choice = Math.floor(Math.random() * 18);
        while (skillProficiencies[choice] == 1)
          choice = Math.floor(Math.random() * 18);
        skillProficiencies[choice] = 1;
        choice = Math.floor(Math.random() * 18);
        while (skillProficiencies[choice] == 1)
          choice = Math.floor(Math.random() * 18);
        skillProficiencies[choice] = 1;
        languages[2] = 1;
        choice = Math.floor(Math.random() * 18);
        while (languages[choice] == 1)
          choice = Math.floor(Math.random() * 18);
        languages[choice] = 1;
        break;
      case "Half-Orc":
        features += "<b>Darkvision</b>: PHB pg. 41 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Menacing</b>: PHB pg. 41 </br>You have proficiency in the Intimidation skill. </br>";
        skillProficiencies[15] = 1;
        features += "<b>Relentless Endurance</b>: PHB pg. 41 </br>Once per long rest, when you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. </br>";
        features += "<b>Savage Attacks</b>: PHB pg. 41 </br>When you score a critical hit with a melee weapon attack, you can roll one the weapon's damage dice an additional time and add it to the extra damage of the critical hit. </br>";
        languages[7] = 1;
        break;
      case "Tiefling":
        features += "<b>Darkvision</b>: PHB pg. 43 </br>You have superior vision in dim and dark conditions, within 60 feet of you. </br>";
        features += "<b>Hellish Resistance</b>: PHB pg. 43 </br>You have resistance to fire damage. </br>";
        features += "<b>Infernal Legacy</b>: PHB pg. 43 </br>You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd-level spell once per day. When you reach 5th level, you can also cast the Darkness spell once per day. Charisma is your spellcasting ability for these spells. </br>";
        languages[12] = 1;
        break;
    }
    //Features by Class
    features += "<u>Class Features</u></br>";
    switch (classChoice) {
        case "Barbarian":
          //Rages
          if (level < 3)
            rages = 2;
          else if (level < 6)
            rages = 3;
          else if (level < 12)
            rages = 4;
          else if (level < 17)
            rages = 5;
          else if (level < 20)
            rages = 6;
          else
            rages = 100;
          //Rage Damage
          if (level < 9)
            rageDamage = 2;
          else if (level < 16)
            rageDamage = 3;
          else
            rageDamage = 4;
          //Level 1
          if (level >= 1) {
            if (rages == 100)
              features += "<b>Rage</b>: PHB pg. 48 </br>You have unlimited uses of Rage per long rest and you have a +" + rageDamage + " to damage rolls using Strength while raging. </br>";
            else
              features += "<b>Rage</b>: PHB pg. 48 </br>You have " + rages + " uses of Rage per long rest and you have a +" + rageDamage + " to damage rolls using Strength while raging. </br>";
            features += "<b>Unarmored Defense</b>: PHB pg. 48 </br>Your armor class is equal to 10 + your Dexterity modifier + your Constitution modifier while you are not wearing armor. </br>";
          }
          break;
        case "Bard":
          //Inspiration
          if (level < 5)
            inspiration = "d6";
          else if (level < 10)
            inspiration = "d8";
          else if (level < 15)
            inspiration = "d10";
          else
            inspiration = "d12";
          //Song of Rest
          if (level == 1)
            songOfRest = undefined;
          else if (level < 9)
            songOfRest = "d6";
          else if (level < 13)
            songOfRest = "d8";
          else if (level < 17)
            songOfRest = "d10";
          else
            songOfRest = "d12";
          //Level 1
          if (level >= 1) {
            if (level < 5)
              features += "<b>Bardic Inspiration</b>: PHB pg. 53-54 </br>Your Inspiration die is a " + inspiration + ". You can use this feature " + chaMod + " times per long rest. </br>";
            else
              features += "<b>Bardic Inspiration</b>: PHB pg. 53-54 </br>Your Inspiration die is a " + inspiration + ". You can use this feature " + chaMod + " times per short or long rest. </br>";
          }
          break;
        case "Cleric":
          //Level 1
          if (level >= 1) {
            switch (subclass) {
              case "Knowledge Domain Cleric":
                features += "<b>Blessings of Knowledge</b>: PHB pg. 59 </br>You are proficient in two skills from: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for these two skills. </br>";
                break;
              case "Life Domain Cleric":
                features += "<b>Bonus Proficiency</b>: PHB pg. 60 </br>You are proficient with heavy armor. </br>";
                features += "<b>Disciple of Life</b>: PHB pg. 60 </br>Your healing spells heal additional hit points equal to 2 + the spell's level. </br>";
                break;
              case "Light Domain Cleric":
                features += "<b>Bonus Cantrip</b>: PHB pg. 61 </br>You know the Light cantrip.";
                features += "<b>Warding Flare</b>: PHB pg. 61 </br>When a creature within 30 feet of you attacks you, you can use your reaction to impose disadvantage on the attack. You can use this feature " + wisMod + " times per long rest. </br>";
                break;
              case "Nature Domain Cleric":
                features += "<b>Acolyte of Nature</b>: PHB pg. 62 </br>You gain one druid cantrip of your choice. You also gain proficiency in one skill from: Animal Handling, Nature, or Survival. </br>";
                features += "<b>Bonus Proficiency</b>: PHB pg. 62 </br>You are proficient with heavy armor. </br>";
                break;
              case "Tempest Domain Cleric":
                features += "<b>Bonus Proficiencies</b>: PHB pg. 62 </br>You are proficient with martial weapons and heavy armor. </br>";
                features += "<b>Wrath of the Storm</b>: PHB pg. 62 </br>When a creature within 5 feet of you hits you with an attack, you can use your reaction to deal 2d8 lightning or thunder damage to the attacker. You can use this feature " + wisMod + " times per long rest. </br>";
                break;
              case "Trickery Domain Cleric":
                features += "<b>Blessing of the Trickster</b>: PHB pg. 63 </br>You can use your action to grant a willing creature advantage on Dexterity (Stealth) checks. This lasts for 1 hour or until you use this feature again. </br>";
                break;
              case "War Domain Cleric":
                features += "<b>Bonus Proficiencies</b>: PHB pg. 63 </br>You are proficient with martial weapons and heavy armor. </br>";
                features += "<b>War Priest</b>: PHB pg. 63 </br>When you use the attack action, you can make one weapon attack as a bonus action. You can use this feature " + wisMod + " times per long rest. </br>";
                break;
            }
          }
          break;
        case "Druid":
          //Level 1
          if (level >= 1) {
            features += "<b>Druidic</b>: PHB pg. 66 </br>You know the Druidic language. </br>";
            languages[16] = 1;
          }
          break;
        case "Fighter":
          //Fighting Style
          switch (fightingStyle) {
            case "":
              var choice = Math.floor(Math.random() * 6);
              switch (choice) {
                case 0:
                  fightingStyle = "Archery";
                  break;
                case 1:
                  fightingStyle = "Defense";
                  break;
                case 2:
                  fightingStyle = "Dueling";
                  break;
                case 3:
                  fightingStyle = "Great Weapon Fighting";
                  break;
                case 4:
                  fightingStyle = "Protection";
                  break;
                case 5:
                  fightingStyle = "Two-Weapon Fighting";
                  break;
              }
              break;
          }
          //Level 1
          if (level >= 1) {
            features += "<b>Fighting Style (" + fightingStyle + ")</b>: PHB pg. 72 </br>";
            switch (fightingStyle) {
              case "Archery":
                features += "You have a +2 bonus to attack rolls with ranged weapons. </br>";
                break;
              case "Defense":
                features += "While wearing armor, you have a +1 bonus to your armor class. </br>";
                break;
              case "Dueling":
                features += "While you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. </br>";
                break;
              case "Great Weapon Fighting":
                features += "When you roll a 1 or 2 on a damage die for an attack you make a with a melee weapon you are wielding with two hands, you can reroll the die and must use the new roll. </br>";
                break;
              case "Protection":
                features += "While you are wielding a shield, when a creature you can see attacks a target other than you within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. </br>";
                break;
              case "Two-Weapon Fighting":
                features += "When wielding two weapons, you can add your ability modifier to the damage of the second attack. </br>";
                break;
            }
            features += "<b>Second Wind</b>: PHB pg. 72 </br>You can use a bonus action to regain hit points equal to 1d10 + your fighter level, once per short or long rest. </br>";
          }
          break;
        case "Monk":
          //Martial Arts
          if (level < 5)
            martialArts = "d4";
          else if (level < 11)
            martialArts = "d6";
          else if (level < 17)
            martialArts = "d8";
          else
            martialArts = "d10";
          //Level 1
          if (level >= 1) {
            features += "<b>Unarmored Defense</b>: PHB pg. 78 </br>Your armor class is equal to 10 + your Dexterity modifier + your Wisdom modifier while you are not wearing armor or wielding a shield. </br>";
            features += "<b>Martial Arts</b>: PHB pg. 78 </br>Your Martial Arts die is a " + martialArts + ". </br>";
          }
          break;
        case "Paladin":
          //Level 1
          if (level >= 1) {
            features += "<b>Divine Sense</b>: PHB pg. 84 </br>As an action, you can detect celestials, fiends, and undead within 60 feet of you and are not behind total cover until the end of your next turn. You can use this feature " + (1 + chaMod) + " times per long rest. </br>";
            features += "<b>Lay on Hands</b>: PHB pg. 84 </br>As an action, you can touch a creature and restore any amount of hit points, up to " + (5 * level) + " hit points per long rest. </br>";
          }
          break;
        case "Ranger":
          //Favored Enemy
          var enemies = ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"];
          var humanoids = ["Dwarves", "Elves", "Gnolls", "Gnomes", "Goblinoids", "Grimlocks", "Humans", "Kobolds", "Lizardfolk", "Merfolk", "Orcs", "Sahuagin"];
          if (level >= 1) {
            var choice = Math.floor(Math.random() * (enemies.length + 1));
            if (choice < enemies.length) {
              favoredEnemies[0] = enemies[choice];
              switch (choice) {
                case 2:
                  languages[9] = 1;
                  break;
                case 4:
                  languages[10] = 1;
                  break;
                case 5:
                  languages[13] = 1;
                  break;
                case 6:
                  languages[14] = 1;
                  break;
                case 7:
                  languages[12] = 1;
                  break;
                case 8:
                  languages[3] = 1;
                  break;
              }
              enemies.splice(choice);
            }
            else {
              var humanoid1 = Math.floor(Math.random() * humanoids.length);
              var humanoid2 = Math.floor(Math.random() * humanoids.length);
              while (humanoid1 == humanoid2)
                humanoid2 = Math.floor(Math.random() * humanoids.length);
              favoredEnemies[0] = humanoid1 + " and " + humanoid2;
              var choice = Math.floor(Math.random() * 18);
              while (languages[choice] == 1)
                choice = Math.floor(Math.random() * 18);
              languages[choice] = 1;
              humanoids.splice(humanoid1);
              humanoids.splice(humanoid2);
            }
          }
          if (level >= 6) {
            var choice = Math.floor(Math.random() * (enemies.length) + 1);
            if (choice < enemies.length) {
              favoredEnemies[1] = enemies[choice];
              switch (choice) {
                case 2:
                  languages[9] = 1;
                  break;
                case 4:
                  languages[10] = 1;
                  break;
                case 5:
                  languages[13] = 1;
                  break;
                case 6:
                  languages[14] = 1;
                  break;
                case 7:
                  languages[12] = 1;
                  break;
                case 8:
                  languages[3] = 1;
                  break;
              }
              enemies.splice(choice);
            }
            else {
              var humanoid1 = Math.floor(Math.random() * humanoids.length);
              var humanoid2 = Math.floor(Math.random() * humanoids.length);
              while (humanoid1 == humanoid2)
                humanoid2 = Math.floor(Math.random() * humanoids.length);
              favoredEnemies[1] = humanoid1 + " and " + humanoid2;
              var choice = Math.floor(Math.random() * 18);
              while (languages[choice] == 1)
                choice = Math.floor(Math.random() * 18);
              languages[choice] = 1;
              humanoids.splice(humanoid1);
              humanoids.splice(humanoid2);
            }
          }
          if (level >= 14) {
            var choice = Math.floor(Math.random() * (enemies.length) + 1);
            if (choice < enemies.length) {
              favoredEnemies[2] = enemies[choice];
              switch (choice) {
                case 2:
                  languages[9] = 1;
                  break;
                case 4:
                  languages[10] = 1;
                  break;
                case 5:
                  languages[13] = 1;
                  break;
                case 6:
                  languages[14] = 1;
                  break;
                case 7:
                  languages[12] = 1;
                  break;
                case 8:
                  languages[3] = 1;
                  break;
              }
              enemies.splice(choice);
            }
            else {
              var humanoid1 = Math.floor(Math.random() * humanoids.length);
              var humanoid2 = Math.floor(Math.random() * humanoids.length);
              while (humanoid1 == humanoid2)
                humanoid2 = Math.floor(Math.random() * humanoids.length);
              favoredEnemies[2] = humanoid1 + " and " + humanoid2;
              var choice = Math.floor(Math.random() * 18);
              while (languages[choice] == 1)
                choice = Math.floor(Math.random() * 18);
              languages[choice] = 1;
              humanoids.splice(humanoid1);
              humanoids.splice(humanoid2);
            }
          }
          //Natural Explorer
          var terrains = ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp", "Underdark"];
          if (level >= 1) {
            var choice = Math.floor(Math.random() * terrains.length);
            naturalExplorer[0] = terrains[choice];
            terrains.splice(choice);
          }
          if (level >= 6) {
            var choice = Math.floor(Math.random() * terrains.length);
            naturalExplorer[1] = terrains[choice];
            terrains.splice(choice);
          }
          if (level >= 14) {
            var choice = Math.floor(Math.random() * terrains.length);
            naturalExplorer[2] = terrains[choice];
            terrains.splice(choice);
          }
          //Level 1
          if (level >= 1) {
            if (level >= 14) {
              features += "<b>Favored Enemy</b>: PHB pg. 91 </br>Your favored enemies are: " + favoredEnemies[0] + ", " + favoredEnemies[1] + " and " + favoredEnemies[2] + "</br>";
              features += "<b>Natural Explorer</b>: PHB pg. 91 </br>Your favored terrains are: " + naturalExplorer[0] + ", " + naturalExplorer[1] + " and " + naturalExplorer[2] + "</br>";
            }
            else if (level >= 6) {
              features += "<b>Favored Enemy</b>: PHB pg. 91 </br>Your favored enemies are: " + favoredEnemies[0] + " and " + favoredEnemies[1] + "</br>";
              features += "<b>Natural Explorer</b>: PHB pg. 91 </br>Your favored terrains are: " + naturalExplorer[0] + " and " + naturalExplorer[1] + "</br>";
            }
            else {
              features += "<b>Favored Enemy</b>: PHB pg. 91 </br>Your favored enemies are: " + favoredEnemies[0] + "</br>";
              features += "<b>Natural Explorer</b>: PHB pg. 91 </br>Your favored terrains are: " + naturalExplorer[0] + "</br>";
            }
          }
          break;
        case "Rogue":
          //Sneak Attack
          if (level < 3)
            sneakAttack = "1d6";
          else if (level < 5)
            sneakAttack = "2d6";
          else if (level < 7)
            sneakAttack = "3d6";
          else if (level < 9)
            sneakAttack = "4d6";
          else if (level < 11)
            sneakAttack = "5d6";
          else if (level < 13)
            sneakAttack = "6d6";
          else if (level < 15)
            sneakAttack = "7d6";
          else if (level < 17)
            sneakAttack = "8d6";
          else if (level < 19)
            sneakAttack = "9d6";
          else
            sneakAttack = "10d6";
          //Level 1
          if (level >= 1) {
            features += "<b>Sneak Attack</b>: PHB pg. 96 </br>Your Sneak Attack damage is " + sneakAttack + ". </br>";
            features += "<b>Expertise</b>: PHB pg. 96 </br>Choose two of your proficiencies or one of your proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for these proficiencies. </br>";
            features += "<b>Thieves' Cant</b>: PHB pg. 96 </br>You know the Thieves' Cant language. </br>";
            languages[17] = 1;
          }
          break;
        case "Sorcerer":
          //Dragon Ancestor
          if (subclass == "Draconic Bloodline Sorcerer") {
            var dragons = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];
            dragonAncestor = dragons[Math.floor(Math.random() * 10)];
          }
          //Level 1
          if (level >= 1) {
            switch (subclass) {
              case "Draconic Bloodline Sorcerer":
                features += "<b>Dragon Ancestor</b>: PHB pg. 102 </br>Your dragon ancestor type is " + dragonAncestor + ". You can speak, read, and write Draconic and when you make a Charisma check when interacting with dragons, and your proficiency bonus applies, it is doubled. </br>";
                languages[10] = 1;
                features += "<b>Draconic Resilience</b>: PHB pg. 102 </br>Your hit point maximum increases by 1 for each sorcerer level. Also, when you aren't wearing armor, your AC equals 13 + your Dexterity modifier. </br>";
                maxHP += level;
                break;
              case "Wild Magic Sorcerer":
                features += "<b>Wild Magic Surge</b>: PHB pg. 103 </br>When you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. On a 1, roll on the Wild Magic Surge table. </br>";
                features += "<b>Tides of Chaos</b>: PHB pg. 103 </br>Once per long rest, you can gain advantage on one attack roll, ability check, or saving throw. However, the DM can have you roll on the Wild Magic Surge table when you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature. </br>";
                break;
            }
          }
          break;
        case "Warlock":
          //Level 1
          if (level >= 1) {
            switch (subclass) {
              case "Warlock of the Archfey":
                features += "<b>Expanded Spell List</b>: PHB pg. 108 </br>The Archfey spells listed in the PHB are added to the warlock spell list for you. </br>";
                features += "<b>Fey Presence</b>: PHB pg. 109 </br>As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. On a failure, choose whether they are charmed by or frightened of you until the end of your next turn. You can use this feature once per short or long rest. </br>";
                break;
              case "Warlock of the Fiend":
                features += "<b>Expanded Spell List</b>: PHB pg. 109 </br>The Fiend spells listed in the PHB are added to the warlock spell list for you. </br>";
                features += "<b>Dark One's Blessing</b>: PHB pg. 109 </br>When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level. </br>";
                break;
              case "Warlock of the Great Old One":
                features += "<b>Expanded Spell List</b>: PHB pg. 110 </br>The Great Old One spells listed in the PHB are added to the warlock spell list for you. </br>";
                features += "<b>Awakened Mind</b>: PHB pg. 110 </br>You can communicate telepathically with any creature you can see within 30 feet of you, even without sharing a language with the creature. </br>";
                break;
            }
          }
          break;
        case "Wizard":
          //Level 1
          if (level >= 1) {
            features += "<b>Arcane Recovery</b>: PHB pg. 115 </br>Once per day, when you finish a short rest, you can recover expended spell slots with a combined level of up to half your wizard level, rounded up. None of the slots can be 6th level or higher. </br>";
          }
          break;
    }
    return features;
}
