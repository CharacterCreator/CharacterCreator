function addEquipment(item, quantity) {
  if (quantity == 0) {
    switch (item) {
      case "Burglar's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment(adventuringGear[14], 1000);
        addEquipment("feet of String", 10);
        addEquipment(adventuringGear[18], 1);
        addEquipment(adventuringGear[25], 5);
        addEquipment(adventuringGear[36], 1);
        addEquipment(adventuringGear[44], 1);
        addEquipment(adventuringGear[75], 10);
        addEquipment(adventuringGear[65], 1);
        addEquipment(adventuringGear[70], 2);
        addEquipment(adventuringGear[83], 5);
        addEquipment(adventuringGear[98], 1);
        addEquipment(adventuringGear[101], 1);
        addEquipment(adventuringGear[85], 50);
        break;
      case "Diplomat's Pack":
        addEquipment(adventuringGear[30], 1);
        addEquipment(adventuringGear[27], 2);
        addEquipment(adventuringGear[33], 1);
        addEquipment(adventuringGear[52], 1);
        addEquipment(adventuringGear[53], 1);
        addEquipment(adventuringGear[63], 1);
        addEquipment(adventuringGear[70], 2);
        addEquipment(adventuringGear[71], 5);
        addEquipment(adventuringGear[73], 1);
        addEquipment(adventuringGear[89], 1);
        addEquipment(adventuringGear[93], 1);
        break;
      case "Dungeoneer's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment(adventuringGear[36], 1);
        addEquipment(adventuringGear[44], 1);
        addEquipment(adventuringGear[75], 10);
        addEquipment(adventuringGear[99], 10);
        addEquipment(adventuringGear[98], 1);
        addEquipment(adventuringGear[83], 10);
        addEquipment(adventuringGear[101], 1);
        addEquipment(adventuringGear[85], 50);
        break;
      case "Entertainer's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment(adventuringGear[17], 1);
        addEquipment(adventuringGear[32], 2);
        addEquipment(adventuringGear[25], 5);
        addEquipment(adventuringGear[83], 5);
        addEquipment(adventuringGear[101], 1);
        addEquipment(artisansTools[7], 1);
        break;
      case "Explorer's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment(adventuringGear[17], 1);
        addEquipment(adventuringGear[60], 1);
        addEquipment(adventuringGear[98], 1);
        addEquipment(adventuringGear[99], 10);
        addEquipment(adventuringGear[83], 10);
        addEquipment(adventuringGear[101], 1);
        addEquipment(adventuringGear[85], 50);
        break;
      case "Priest's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment(adventuringGear[19], 1);
        addEquipment(adventuringGear[25], 10);
        addEquipment(adventuringGear[98], 1);
        addEquipment("Alms Box (es)", 1);
        addEquipment("Block (s) of Incense", 2);
        addEquipment("Censer (s)", 1);
        addEquipment("Vestments", 1);
        addEquipment(adventuringGear[83], 2);
        addEquipment(adventuringGear[101], 1);
        break;
      case "Scholar's Pack":
        addEquipment(adventuringGear[13], 1);
        addEquipment("Book (s) of Lore", 1);
        addEquipment(adventuringGear[52], 1);
        addEquipment(adventuringGear[53], 1);
        addEquipment(adventuringGear[72], 1);
        break;
    }
  }
  else {
    if (item.includes("(")) {
      if (quantity == 1) {
        if (item.charAt(item.indexOf("(") - 1) == ' ')
          item = item.substring(0, item.indexOf("(") - 1) + item.substring(item.indexOf(")") + 1);
        else
          item = item.substring(0, item.indexOf("(")) + item.substring(item.indexOf(")") + 1);
      }
      else
        item = item.substring(0, item.indexOf("(") - 1) + item.substring(item.indexOf("(") + 1, item.indexOf(")")) + item.substring(item.indexOf(")") + 1);
    }
    equipment.push([item, quantity]);
  }
}

function setEquipment() {
    switch (classChoice) {
      case "Barbarian":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[3], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleMeleeWeapons[3], 2);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        addEquipment("Explorer's Pack", 0);
        addEquipment(simpleMeleeWeapons[4], 4);
        setAC(-1);
        break;
      case "Bard":
        var item = Math.floor(Math.random() * 3);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[11], 1);
            break;
          case 1:
            addEquipment(martialMeleeWeapons[7], 1);
            break;
          case 2:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Diplomat's Pack", 0);
            break;
          case 1:
            addEquipment("Entertainer's Pack", 0);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(instruments[4], 1);
            break;
          case 1:
            addEquipment(instruments[Math.floor(Math.random() * instruments.length)], 1);
            break;
        }
        addEquipment(armor[1], 1);
        setAC(1);
        addEquipment(simpleMeleeWeapons[1], 1);
        break;
      case "Cleric":
        var item = Math.floor(Math.random() * 2);
        if (weaponProficiencies[30] == 1 || weaponTypeProficiencies[2] == 1) {
          switch (item) {
            case 0:
              addEquipment(simpleMeleeWeapons[6], 1);
              break;
            case 1:
              addEquipment(martialMeleeWeapons[16], 1);
              break;
          }
        }
        else
          addEquipment(simpleMeleeWeapons[6], 1);
        if (armorProficiencies[2] == 1) {
          item = Math.floor(Math.random() * 3);
          switch (item) {
            case 0:
              addEquipment(armor[5], 1);
              setAC(5);
              break;
            case 1:
              addEquipment(armor[1], 1);
              setAC(1);
              break;
            case 2:
              addEquipment(armor[9], 1);
              setAC(9);
              break;
          }
        }
        else {
          item = Math.floor(Math.random() * 2);
          switch (item) {
            case 0:
              addEquipment(simpleRangedWeapons[0], 1);
              addEquipment(adventuringGear[5], 20);
              break;
            case 1:
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                case 0:
                  addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                  break;
                case 1:
                  addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                  break;
              }
              break;
          }
          item = Math.floor(Math.random() * 2);
          switch (item) {
            case 0:
              addEquipment("Priest's Pack", 0);
              break;
            case 1:
              addEquipment("Explorer's Pack", 0);
              break;
          }
          item = Math.floor(Math.random() * 3);
          switch (item) {
            case 0:
              addEquipment(adventuringGear[46], 1);
              break;
            case 1:
              addEquipment(adventuringGear[47], 1);
              break;
            case 2:
              addEquipment(adventuringGear[48], 1);
              break;
          }
          item = Math.floor(Math.random() * 2);
          switch (item) {
            case 0:
              addEquipment(armor[5], 1);
              setAC(5);
              break;
            case 1:
              addEquipment(armor[1], 1);
              setAC(1);
              break;
          }
          addEquipment(armor[12], 1);
        }
        break;
      case "Druid":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(armor[12], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[12], 1);
            break;
          case 1:
            addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
            break;
        }
        addEquipment(armor[1], 1);
        setAC(1);
        addEquipment("Explorer's Pack", 0);
        item = Math.floor(Math.random() * 4);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[37], 1);
            break;
          case 1:
            addEquipment(adventuringGear[38], 1);
            break;
          case 2:
            addEquipment(adventuringGear[39], 1);
            break;
          case 3:
            addEquipment(adventuringGear[40], 1);
            break;
        }
        break;
      case "Fighter":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(armor[9], 1);
            setAC(9);
            break;
          case 1:
            addEquipment(armor[1], 1);
            setAC(1);
            addEquipment(martialRangedWeapons[3], 1);
            addEquipment(adventuringGear[3], 20);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            addEquipment(armor[12], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleRangedWeapons[0], 1);
            addEquipment(adventuringGear[5], 20);
            break;
          case 1:
            addEquipment(simpleMeleeWeapons[3], 1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Dungeoneer's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        break;
      case "Monk":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[13], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Dungeoneer's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(simpleRangedWeapons[1], 10);
        setAC(-1);
        break;
      case "Paladin":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            addEquipment(armor[12], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(martialRangedWeapons[Math.floor(Math.random() * martialRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleMeleeWeapons[4], 5);
            break;
          case 1:
            addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Priest's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(armor[9], 1);
        setAC(9);
        item = Math.floor(Math.random() * 3);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[46], 1);
            break;
          case 1:
            addEquipment(adventuringGear[47], 1);
            break;
          case 2:
            addEquipment(adventuringGear[48], 1);
            break;
        }
        break;
      case "Ranger":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(armor[5], 1);
            setAC(5);
            break;
          case 1:
            addEquipment(armor[1], 1);
            setAC(1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[13], 2);
            break;
          case 1:
            addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
            addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Dungeoneer's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(martialRangedWeapons[3], 1);
        addEquipment(adventuringGear[3], 20);
        break;
      case "Rogue":
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(martialMeleeWeapons[11], 1);
            break;
          case 1:
            addEquipment(martialMeleeWeapons[13], 1);
            break;
        }
        switch (item) {
          case 0:
            addEquipment(simpleRangedWeapons[2], 1);
            addEquipment(adventuringGear[81], 1);
            addEquipment(adventuringGear[3], 20);
            break;
          case 1:
            addEquipment(martialMeleeWeapons[13], 1);
        }
        item = Math.floor(Math.random() * 3);
        switch (item) {
          case 0:
            addEquipment("Burglar's Pack", 0);
            break;
          case 1:
            addEquipment("Dungeoneer's Pack", 0);
            break;
          case 2:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(armor[1], 1);
        setAC(1);
        addEquipment(simpleMeleeWeapons[1], 2);
        addEquipment(artisansTools[19], 1);
        break;
      case "Sorcerer":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleRangedWeapons[0], 1);
            addEquipment(adventuringGear[5], 20);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[35], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 5);
            switch (choice) {
              case 0:
                addEquipment(adventuringGear[8], 1);
                break;
              case 1:
                addEquipment(adventuringGear[9], 1);
                break;
              case 2:
                addEquipment(adventuringGear[10], 1);
                break;
              case 3:
                addEquipment(adventuringGear[11], 1);
                break;
              case 4:
                addEquipment(adventuringGear[12], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Dungeoneer's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(simpleMeleeWeapons[1], 2);
        setAC(-1);
        break;
      case "Warlock":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleRangedWeapons[0], 1);
            addEquipment(adventuringGear[5], 20);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
              case 0:
                addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
                break;
              case 1:
                addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[35], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 5);
            switch (choice) {
              case 0:
                addEquipment(adventuringGear[8], 1);
                break;
              case 1:
                addEquipment(adventuringGear[9], 1);
                break;
              case 2:
                addEquipment(adventuringGear[10], 1);
                break;
              case 3:
                addEquipment(adventuringGear[11], 1);
                break;
              case 4:
                addEquipment(adventuringGear[12], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Scholar's Pack", 0);
            break;
          case 1:
            addEquipment("Dungeoneer's Pack", 0);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)], 1);
            break;
          case 1:
            addEquipment(simpleRangedWeapons[Math.floor(Math.random() * simpleRangedWeapons.length)], 1);
            break;
        }
        addEquipment(armor[1], 1);
        setAC(1);
        addEquipment(simpleMeleeWeapons[1], 2);
        break;
      case "Wizard":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(simpleMeleeWeapons[7], 1);
            break;
          case 1:
            addEquipment(simpleMeleeWeapons[1], 1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[35], 1);
            break;
          case 1:
            var choice = Math.floor(Math.random() * 5);
            switch (choice) {
              case 0:
                addEquipment(adventuringGear[8], 1);
                break;
              case 1:
                addEquipment(adventuringGear[9], 1);
                break;
              case 2:
                addEquipment(adventuringGear[10], 1);
                break;
              case 3:
                addEquipment(adventuringGear[11], 1);
                break;
              case 4:
                addEquipment(adventuringGear[12], 1);
                break;
            }
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Scholar's Pack", 0);
            break;
          case 1:
            addEquipment("Explorer's Pack", 0);
            break;
        }
        addEquipment(adventuringGear[94], 1);
        setAC(-1);
        break;
    }
    switch (backgroundSelect) {
      case "Acolyte":
        var item = Math.floor(Math.random() * 3);
        switch (item) {
          case 0:
            addEquipment(adventuringGear[46], 1);
            break;
          case 1:
            addEquipment(adventuringGear[47], 1);
            break;
          case 2:
            addEquipment(adventuringGear[48], 1);
            break;
        }
        item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment("Prayer Book (s)", 1);
            break;
          case 1:
            addEquipment("Prayer Wheel (s)", 1);
            break;
        }
        addEquipment("Stick (s) of Incense", 5);
        addEquipment("Vestments", 1);
        addEquipment(adventuringGear[31], 1);
        //15 gp
        break;
      case "Charlatan":
        addEquipment(adventuringGear[33], 1);
        addEquipment(artisansTools[7], 1);
        //15 gp
        break;
      case "Criminal":
        addEquipment(adventuringGear[36], 1);
        addEquipment(adventuringGear[31], 1);
        //15 gp
        break;
      case "Entertainer":
        addEquipment(instruments[Math.floor(Math.random() * instruments.length)], 1);
        addEquipment(adventuringGear[32], 1);
        //15 gp
        break;
      case "Folk Hero":
        addEquipment(artisansTools[Math.floor(Math.random() * artisansTools.length)], 1);
        addEquipment(adventuringGear[90], 1);
        addEquipment(adventuringGear[78], 1);
        addEquipment(adventuringGear[31], 1);
        //10 gp
        break;
      case "Gladiator":
        addEquipment(instruments[Math.floor(Math.random() * instruments.length)], 1);
        addEquipment(adventuringGear[32], 1);
        //15 gp
        break;
      case "Guild Artisan":
        addEquipment(artisansTools[Math.floor(Math.random() * artisansTools.length)], 1);
        addEquipment(adventuringGear[34], 1);
        //15 gp
        break;
      case "Guild Merchant":
        addEquipment(artisansTools[Math.floor(Math.random() * artisansTools.length)], 1);
        addEquipment(adventuringGear[34], 1);
        //15 gp
        break;
      case "Hermit":
        addEquipment(adventuringGear[27], 1);
        addEquipment(adventuringGear[19], 1);
        addEquipment(adventuringGear[31], 1);
        addEquipment(artisansTools[57], 1);
        //5 gp
        break;
      case "Knight":
        addEquipment(adventuringGear[33], 1);
        addEquipment(adventuringGear[92], 1);
        //25 gp
        break;
      case "Noble":
        addEquipment(adventuringGear[33], 1);
        addEquipment(adventuringGear[92], 1);
        //25 gp
        break;
      case "Outlander":
        addEquipment(adventuringGear[11], 1);
        addEquipment(adventuringGear[51], 1);
        addEquipment(adventuringGear[34], 1);
        //10 gp
        break;
      case "Pirate":
        addEquipment(adventuringGear[86], 50);
        addEquipment(adventuringGear[31], 1);
        //10 gp
        break;
      case "Sage":
        addEquipment(adventuringGear[52], 1);
        addEquipment("Quill (s)", 1);
        addEquipment("Small Knife", 1);
        addEquipment(adventuringGear[31], 1);
        break;
      case "Sailor":
        addEquipment(adventuringGear[86], 50);
        addEquipment(adventuringGear[31], 1);
        //10 gp
        break;
      case "Soldier":
        var item = Math.floor(Math.random() * 2);
        switch (item) {
          case 0:
            addEquipment(gamingSets[0], 1);
            break;
          case 1:
            addEquipment(gamingSets[2], 1);
            break;
        }
        addEquipment(adventuringGear[31], 1);
        //10 gp
        break;
      case "Spy":
        addEquipment(adventuringGear[36], 1);
        addEquipment(adventuringGear[31], 1);
        //15 gp
        break;
      case "Urchin":
        addEquipment("Small Knife", 1);
        addEquipment("Map (s)", 1);
        addEquipment("Pet Mouse", 1);
        addEquipment(adventuringGear[31], 1);
        //10 gp
        break;
    }
    eq = "";
    for (var e = 1; e < equipment.length; e++)
      eq += equipment[e][1] + " " + equipment[e][0] + "</br>";
    return eq;
}
