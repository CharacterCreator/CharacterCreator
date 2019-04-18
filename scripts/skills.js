function setProficiencies() {
    //Proficiencies based on race
    switch (race) {
        case "Dwarf":
            weaponProficiencies[14] = 1;
            weaponProficiencies[3] = 1;
            weaponProficiencies[5] = 1;
            weaponProficiencies[30] = 1;
            var tool = Math.floor(Math.random() * 3);
            switch (tool) {
                case 0:
                    toolProficiencies[18] = 1;
                    break;
                case 1:
                    toolProficiencies[1] = 1;
                    break;
                case 2:
                    toolProficiencies[13] = 1;
                    break;
            }
            if (subrace == "Mountain ") {
                armorProficiencies[0] = 1;
                armorProficiencies[1] = 1;
            }
            break;
        case "Elf":
            skillProficiencies[12] = 1;
            switch (subrace) {
                case "High ":
                    weaponProficiencies[21] = 1;
                    weaponProficiencies[27] = 1;
                    weaponProficiencies[12] = 1;
                    weaponProficiencies[35] = 1;
                    break;
                case "Wood ":
                    weaponProficiencies[21] = 1;
                    weaponProficiencies[27] = 1;
                    weaponProficiencies[12] = 1;
                    weaponProficiencies[35] = 1;
                    break;
                case "Dark ":
                    weaponProficiencies[25] = 1;
                    weaponProficiencies[27] = 1;
                    weaponProficiencies[33] = 1;
                    break;
            }
    }
    //Proficiencies based on class
    switch (classChoice) {
        case "Barbarian":
            saveProficiencies[0] = 1;
            saveProficiencies[2] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[7] = 1;
                    break;
                case 4:
                    skillProficiencies[12] = 1;
                    break;
                case 5:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[7] = 1;
                    break;
                case 4:
                    skillProficiencies[12] = 1;
                    break;
                case 5:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Bard":
            saveProficiencies[1] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[25] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[33] = 1;
            var instrument1 = Math.floor(Math.random() * 10);
            var instrument2 = Math.floor(Math.random() * 10);
            var instrument3 = Math.floor(Math.random() * 10);
            while (instrument1 == instrument2 || instrument1 == instrument3)
                instrument1 = Math.floor(Math.random() * 10);
            while (instrument2 == instrument3)
                instrument3 = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument1] = 1;
            instrumentProficiencies[instrument2] = 1;
            instrumentProficiencies[instrument3] = 1;
            var skill1 = Math.floor(Math.random() * 18);
            var skill2 = Math.floor(Math.random() * 18);
            var skill3 = Math.floor(Math.random() * 18);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 18);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 18);
            skillProficiencies[skill1] = 1;
            skillProficiencies[skill2] = 1;
            skillProficiencies[skill3] = 1;
            break;
        case "Cleric":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            var skill1 = Math.floor(Math.random() * 5);
            var skill2 = Math.floor(Math.random() * 5);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 5);
            switch (skill1) {
                case 0:
                    skillProficiencies[5] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[11] = 1;
                    break;
                case 3:
                    skillProficiencies[17] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[5] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[11] = 1;
                    break;
                case 3:
                    skillProficiencies[17] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Druid":
            saveProficiencies[3] = 1;
            saveProficiencies[4] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponProficiencies[0] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[4] = 1;
            weaponProficiencies[6] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[8] = 1;
            weaponProficiencies[9] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            weaponProficiencies[26] = 1;
            toolProficiencies[10] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Fighter":
            saveProficiencies[0] = 1;
            saveProficiencies[2] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[2] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[0] = 1;
                    break;
                case 3:
                    skillProficiencies[5] = 1;
                    break;
                case 4:
                    skillProficiencies[10] = 1;
                    break;
                case 5:
                    skillProficiencies[15] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[0] = 1;
                    break;
                case 3:
                    skillProficiencies[5] = 1;
                    break;
                case 4:
                    skillProficiencies[10] = 1;
                    break;
                case 5:
                    skillProficiencies[15] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Monk":
            saveProficiencies[0] = 1;
            saveProficiencies[1] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[27] = 1;
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
                case 0:
                    toolProficiencies[Math.floor(Math.random() * 23)] = 1;
                    break;
                case 1:
                    instrumentProficiencies[Math.floor(Math.random() * 10)] = 1;
                    break;
            }
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
                case 5:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
                case 5:
                    skillProficiencies[3] = 1;
                    break;
            }
            break;
        case "Paladin":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[2] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[0] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[10] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Ranger":
            saveProficiencies[0] = 1;
            saveProficiencies[1] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            var skill3 = Math.floor(Math.random() * 8);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 8);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill3) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Rogue":
            saveProficiencies[1] = 1;
            saveProficiencies[3] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[25] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[33] = 1;
            toolProficiencies[19] = 1;
            var skill1 = Math.floor(Math.random() * 11);
            var skill2 = Math.floor(Math.random() * 11);
            var skill3 = Math.floor(Math.random() * 11);
            var skill4 = Math.floor(Math.random() * 11);
            while (skill1 == skill2 || skill1 == skill3 || skill1 == skill4)
                skill1 = Math.floor(Math.random() * 11);
            while (skill2 == skill3 || skill2 == skill4)
                skill2 = Math.floor(Math.random() * 11);
            while (skill3 == skill4)
                skill4 = Math.floor(Math.random() * 11);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill3) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill4) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            break;
        case "Sorcerer":
            saveProficiencies[2] = 1;
            saveProficiencies[5] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[10] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Warlock":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            var skill1 = Math.floor(Math.random() * 7);
            var skill2 = Math.floor(Math.random() * 7);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 7);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[6] = 1;
                    break;
                case 5:
                    skillProficiencies[7] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[6] = 1;
                    break;
                case 5:
                    skillProficiencies[7] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Wizard":
            saveProficiencies[3] = 1;
            saveProficiencies[4] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[10] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[5] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[11] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[5] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[11] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
    }
    //Proficiencies based on subclass
    switch (subclass) {
        case "College of Lore Bard":
            var skill1 = Math.floor(Math.random() * 18);
            var skill2 = Math.floor(Math.random() * 18);
            var skill3 = Math.floor(Math.random() * 18);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 18);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill1] == 1)
                skill1 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill2] == 1)
                skill2 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill3] == 1)
                skill3 = Math.floor(Math.random() * 18);
            skillProficiencies[skill1] = 1;
            skillProficiencies[skill2] = 1;
            skillProficiencies[skill3] = 1;
            break;
        case "College of Valor Bard":
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            break;
        case "Knowledge Domain Cleric":
            var skill1 = Math.floor(Math.random() * 4);
            var skill2 = Math.floor(Math.random() * 4);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 4);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 2;
                    break;
                case 1:
                    skillProficiencies[5] = 2;
                    break;
                case 2:
                    skillProficiencies[7] = 2;
                    break;
                case 3:
                    skillProficiencies[8] = 2;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 2;
                    break;
                case 1:
                    skillProficiencies[5] = 2;
                    break;
                case 2:
                    skillProficiencies[7] = 2;
                    break;
                case 3:
                    skillProficiencies[8] = 2;
                    break;
            }
            break;
        case "Life Domain Cleric":
            armorProficiencies[2] = 1;
            break;
        case "Nature Domain Cleric":
            armorProficiencies[2] = 1;
            var skill = Math.floor(Math.random() * 3);
            switch (skill) {
                case 0:
                    skillProficiencies[7] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Tempest Domain Cleric":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case "War Domain Cleric":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case "Fighter (Battle Master)":
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case "Rogue (Assassin)":
            toolProficiencies[7] = 1;
            toolProficiencies[16] = 1;
            break;
    }
    //Proficiencies based on background
    switch (backgroundSelect) {
        case "Acolyte":
            if (skillProficiencies[8] == 0)
                skillProficiencies[8] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            break;
        case "Charlatan":
            if (skillProficiencies[2] == 0)
                skillProficiencies[2] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            toolProficiencies[8] = 1;
            break;
        case "Criminal":
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[19] = 1;
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Spy":
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[19] = 1;
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Entertainer":
            if (skillProficiencies[1] == 0)
                skillProficiencies[1] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[16] == 0)
                skillProficiencies[16] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument] = 1;
            break;
        case "Gladiator":
            if (skillProficiencies[1] == 0)
                skillProficiencies[1] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[16] == 0)
                skillProficiencies[16] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument] = 1;
            break;
        case "Folk Hero":
            if (skillProficiencies[9] == 0)
                skillProficiencies[9] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[13] == 0)
                skillProficiencies[13] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            toolProficiencies[23] = 1;
            break;
        case "Guild Artisan":
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case "Guild Merchant":
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case "Hermit":
            if (skillProficiencies[8] == 0)
                skillProficiencies[8] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[11] == 0)
                skillProficiencies[11] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[10] = 1;
            break;
        case "Noble":
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Knight":
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Outlander":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[13] == 0)
                skillProficiencies[13] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            break;
        case "Sage":
            if (skillProficiencies[4] == 0)
                skillProficiencies[4] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            break;
        case "Sailor":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[12] == 0)
                skillProficiencies[12] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[14] = 1;
            toolProficiencies[24] = 1;
            break;
        case "Pirate":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[12] == 0)
                skillProficiencies[12] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[14] = 1;
            toolProficiencies[24] = 1;
            break;
        case "Soldier":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[15] == 0)
                skillProficiencies[15] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            toolProficiencies[23] = 1;
            break;
        case "Urchin":
            if (skillProficiencies[2] == 0)
                skillProficiencies[2] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            toolProficiencies[19] = 1;
            break;
    }
}

function displayProficiencies() {
  setProficiencies();
	var display = "";
	var armor = ["Light Armor", "Medium Armor", "Heavy Armor", "Shields"];
	var gaming = ["Dice", "Playing Card Set", "Dragonchess Set"];
	var instrument = ["Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan Flute", "Shawm", "Viol"];
	var tool = ["Alchemist's Supplies", "Brewer's Supplies", "Calligrapher's Supplies", "Carpenter's Tools", "Cartographer's Tools", "Cobbler's Tools", "Cook's Utensils", "Disguise Kit", "Forgery Kit",
				"Glassblower's Tools", "Herbalism Kit", "Jeweler's Tools", "Leatherworker's Tools", "Mason's Tools", "Navigator's Tools", "Painter's Supplies", "Poisoner's Kit", "Potter's Tools", "Smith's Tools",
				"Thieves' Tools", "Tinker's Tools", "Weaver's Tools", "Woodcarver's Tools", "Land Vehicles", "Water Vehicles"];
	var weaponType = ["Simple Melee Weapons", "Simple Ranged Weapons", "Martial Melee Weapons", "Martial Ranged Weapons"];
	var weapon = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling",
				"Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar",
				"Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"];
  display += "Armor: ";
  for (var e = 0; e < armorProficiencies.length; e++) {
    if (armorProficiencies[e] == 1)
      display += armor[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Weapons: ";
  for (var e = 0; e < weaponTypeProficiencies.length; e++) {
    if (e < 2 && weaponTypeProficiencies[0] == 1 && weaponTypeProficiencies[1] == 1) {
      display += "Simple Weapons, ";
      e = 2;
    }
    if (e >= 2 && weaponTypeProficiencies[2] == 1 && weaponTypeProficiencies[3] == 1) {
      display += "Martial Weapons, ";
      break;
    }
    if (weaponTypeProficiencies[e] == 1)
      display += weaponType[e] + ", ";
  }
  for (var e = 0; e < weaponProficiencies.length; e++) {
    if (weaponProficiencies[e] == 1)
      display += weapon[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Tools: ";
  for (var e = 0; e < toolProficiencies.length; e++) {
    if (toolProficiencies[e] == 1)
      display += tool[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Instruments: ";
  for (var e = 0; e < instrumentProficiencies.length; e++) {
    if (instrumentProficiencies[e] == 1)
      display += instrument[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Gaming Sets: ";
  for (var e = 0; e < gamingProficiencies.length; e++) {
    if (gamingProficiencies[e] == 1)
      display += gaming[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
	return display;
}

function displaySkills() {
  var saveDisplay = "";
  var skillDisplay = "";
  var skill = ["Athletics (STR)", "Acrobatics (DEX)", "Sleight of Hand (DEX)", "Stealth (DEX)", "Arcana (INT)", "History (INT)", "Investigation (INT)", "Nature (INT)", "Religion (INT)", "Animal Handling (WIS)", "Insight (WIS)", "Medicine (WIS)", "Perception (WIS)", "Survival (WIS)", "Deception (CHA)", "Intimidation (CHA)", "Performance (CHA)", "Persuasion (CHA)"];
  var save = ["Strength Saving Throw", "Dexterity Saving Throw", "Constitution Saving Throw", "Intelligence Saving Throw", "Wisdom Saving Throw", "Charisma Saving Throw"];
  for (var e = 0; e < save.length; e++) {
    var proficient = 0;
    if (saveProficiencies[e] == 1)
      proficient = 1;
    if (proficient == 1) {
      saveDisplay += "[<b>P</b>] ";
    }
    else {
      saveDisplay += "[ ] ";
    }
    saveDisplay += save[e] + ": ";
    switch (e) {
      case 0:
        if (proficient == 1) {
          if (strMod + profBonus >= 0)
            saveDisplay += "+" + (strMod + profBonus);
          else
            saveDisplay += (strMod + profBonus);
        }
        else
          if (strMod >= 0)
            saveDisplay += "+" + strMod;
          else
            saveDisplay += strMod;
        break;
      case 1:
        if (proficient == 1) {
          if (dexMod + profBonus >= 0)
            saveDisplay += "+" + (dexMod + profBonus);
          else
            saveDisplay += (dexMod + profBonus);
        }
        else
          if (dexMod >= 0)
            saveDisplay += "+" + dexMod;
          else
            saveDisplay += dexMod;
        break;
      case 2:
        if (proficient == 1) {
          if (conMod + profBonus >= 0)
            saveDisplay += "+" + (conMod + profBonus);
          else
            saveDisplay += (conMod + profBonus);
        }
        else
          if (conMod >= 0)
            saveDisplay += "+" + conMod;
          else
            saveDisplay += conMod;
        break;
      case 3:
        if (proficient == 1) {
          if (intMod + profBonus >= 0)
            saveDisplay += "+" + (intMod + profBonus);
          else
            saveDisplay += (intMod + profBonus);
        }
        else
          if (intMod >= 0)
            saveDisplay += "+" + intMod;
          else
            saveDisplay += intMod;
        break;
      case 4:
        if (proficient == 1) {
          if (wisMod + profBonus >= 0)
            saveDisplay += "+" + (wisMod + profBonus);
          else
            saveDisplay += (wisMod + profBonus);
        }
        else
          if (wisMod >= 0)
            saveDisplay += "+" + wisMod;
          else
            saveDisplay += wisMod;
        break;
      case 5:
        if (proficient == 1) {
          if (chaMod + profBonus >= 0)
            saveDisplay += "+" + (chaMod + profBonus);
          else
            saveDisplay += (chaMod + profBonus);
        }
        else
          if (chaMod >= 0)
            saveDisplay += "+" + chaMod;
          else
            saveDisplay += chaMod;
        break;
    }
    saveDisplay += "</br>";
  }
  for (var e = 0; e < skill.length; e++) {
    var proficient = 0;
    var expertise = 0;
    if (skillProficiencies[e] == 1)
      proficient = 1;
    if (skillProficiencies[e] == 2)
      expertise = 1;
    if (proficient == 1) {
      skillDisplay += "[<b>P</b>] ";
    }
    else if (expertise == 1) {
      skillDisplay += "[<b>E</b>] ";
    }
    else {
      skillDisplay += "[ ] ";
    }
    skillDisplay += skill[e] + ": ";
    if (e == 0) {
      if (proficient == 1) {
        if (strMod + profBonus >= 0)
          skillDisplay += "+" + (strMod + profBonus);
        else
          skillDisplay += (strMod + profBonus);
      }
      else if (expertise == 1) {
        if (strMod + (profBonus * 2) >= 0)
          skillDisplay += "+" + (strMod + (profBonus * 2));
        else
          skillDisplay += (strMod + (profBonus * 2));
      }
      else
        if (strMod >= 0)
          skillDisplay += "+" + strMod;
        else
          skillDisplay += strMod;
    }
    else if (e <= 3) {
      if (proficient == 1) {
        if (dexMod + profBonus >= 0)
          skillDisplay += "+" + (dexMod + profBonus);
        else
          skillDisplay += (dexMod + profBonus);
      }
      else if (expertise == 1) {
        if (dexMod + (profBonus * 2) >= 0)
          skillDisplay += "+" + (dexMod + (profBonus * 2));
        else
          skillDisplay += (dexMod + (profBonus * 2));
      }
      else
        if (dexMod >= 0)
          skillDisplay += "+" + dexMod;
        else
          skillDisplay += dexMod;
    }
    else if (e <= 8) {
      if (proficient == 1) {
        if (intMod + profBonus >= 0)
          skillDisplay += "+" + (intMod + profBonus);
        else
          skillDisplay += (intMod + profBonus);
      }
      else if (expertise == 1) {
        if (intMod + (profBonus * 2) >= 0)
          skillDisplay += "+" + (intMod + (profBonus * 2));
        else
          skillDisplay += (intMod + (profBonus * 2));
      }
      else
        if (intMod >= 0)
          skillDisplay += "+" + intMod;
        else
          skillDisplay += intMod;
    }
    else if (e <= 13) {
      if (proficient == 1) {
        if (wisMod + profBonus >= 0)
          skillDisplay += "+" + (wisMod + profBonus);
        else
          skillDisplay += (wisMod + profBonus);
      }
      else if (expertise == 1) {
        if (wisMod + (profBonus * 2) >= 0)
          skillDisplay += "+" + (wisMod + (profBonus * 2));
        else
          skillDisplay += (wisMod + (profBonus * 2));
      }
      else
        if (wisMod >= 0)
          skillDisplay += "+" + wisMod;
        else
          skillDisplay += wisMod;
    }
    else if (e <= 17) {
      if (proficient == 1) {
        if (chaMod + profBonus >= 0)
          skillDisplay += "+" + (chaMod + profBonus);
        else
          skillDisplay += (chaMod + profBonus);
      }
      else if (expertise == 1) {
        if (chaMod + (profBonus * 2) >= 0)
          skillDisplay += "+" + (chaMod + (profBonus * 2));
        else
          skillDisplay += (chaMod + (profBonus * 2));
      }
      else
        if (chaMod >= 0)
          skillDisplay += "+" + chaMod;
        else
          skillDisplay += chaMod;
    }
    skillDisplay += "</br>";
  }
  return "<b>Saving Throws</b></br>" + saveDisplay + "<b>Skills</b></br>" + skillDisplay;
}
