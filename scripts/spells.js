function setSpells() {
  var index = 0;
  var spellsChosen = "";
  var cantripsAvailable = 0;
  var spellsKnown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  switch (classChoice) {
    case "Barbarian":
      switch (subclass) {
        case "Path of the Totem Warrior Barbarian":
            spellsChosen += spells[28] + "<br>" + spells[305];
          break;
      }
      break;
    case "Bard":
      var spellsBard = [
        /*Cantrips*/[spells[32][1], spells[85][1], spells[150][1], spells[202][1], spells[210][1], spells[224][1], spells[225][1], spells[228][1], spells[260][1], spells[339][1], spells[343][1]],
        /*Level One*/[spells[4][1], spells[23][1], spells[44][1], spells[58][1], spells[84][1], spells[94][1], spells[98][1], spells[102][1], spells[125][1], spells[128][1], spells[175][1], spells[179][1], spells[188][1], spells[189][1], spells[208][1], spells[299][1], spells[301][1], spells[305][1], spells[322][1], spells[331][1], spells[341][1]],
        /*Level Two*/[spells[5][1], spells[36][1], spells[42][1], spells[51][1], spells[82][1], spells[96][1], spells[115][1], spells[119][1], spells[176][1], spells[182][1], spells[194][1], spells[196][1], spells[200][1], spells[205][1], spells[207][1], spells[214][1], spells[247][1], spells[288][1], spells[293][1], spells[298][1], spells[317][1], spells[360][1]],
        /*Level Three*/[spells[29][1], spells[49][1], spells[101][1], spells[127][1], spells[130][1], spells[158][1], spells[186][1], spells[199][1], spells[216][1], spells[240][1], spells[253][1], spells[290][1], spells[306][1], spells[307][1], spells[313][1], spells[333][1]],
        /*Level Four*/[spells[59][1], spells[61][1], spells[97][1], spells[149][1], spells[162][1], spells[171][1], spells[206][1], spells[255][1]],
        /*Level Five*/[spells[8][1], spells[22][1], spells[108][1], spells[110][1], spells[153][1], spells[163][1], spells[181][1], spells[197][1], spells[217][1], spells[231][1], spells[233][1], spells[251][1], spells[270][1], spells[286][1], spells[289][1], spells[326][1]],
        /*Level Six*/[spells[123][1], spells[133][1], spells[165][1], spells[220][1], spells[244][1], spells[264][1], spells[338][1]],
        /*Level Seven*/[spells[120][1], spells[147][1], spells[229][1], spells[236][1], spells[238][1], spells[265][1], spells[275][1], spells[279][1], spells[321][1], spells[325][1]],
        /*Level Eight*/[spells[107][1], spells[129][1], spells[156][1], spells[227][1], spells[258][1]],
        /*Level Nine*/[spells[148][1], spells[256][1], spells[257][1], spells[336][1]]
      ];
      /*Selects Cantrips*/
      if (level >= 1 && level <= 3)
        cantripsAvailable = 2;
      else if (level >= 4 && level <= 9)
        cantripsAvailable = 3;
      else if (level >= 10)
        cantripsAvailable = 4;
      for (var i = cantripsAvailable; i > 0; i--) {
        index = Math.floor(Math.random() * spellsBard[0].length);
        while (spellsBard[0][index] == "e")
          index = Math.floor(Math.random() * spellsBard[0].length);
        spellsChosen += spellsBard[0][index] + "<br>";
        spellsBard[0][index] = "e";
      }
      /*Selects Spells*/
      if ((level >= 1 && level <= 9) || (level >= 12 && level <= 13) || (level >= 16 && level <= 17))
        spellsKnown[0] = level + 3;
      else if ((level >= 10 && level <= 11) || (level >= 14 && level <= 15))
        spellsKnown[0] = level + 4;
      else
        spellsKnown[0] = 22;
        /*Fix spell distribution*/
      if (level >= 1 && level <= 2) {
        spellsKnown[1] = spellsKnown[0];
      } else if (level >= 3 && level <= 4) {
        spellsKnown[1] = spellsKnown[0] / 2;
        spellsKnown[2] = spellsKnown[0] / 2;
      } else if (level >= 5 && level <= 6) {
        spellsKnown[1] = spellsKnown[0] / 3;
        spellsKnown[2] = spellsKnown[0] / 3;
        spellsKnown[3] = spellsKnown[0] / 3;
      } else if (level >= 7 && level <= 8) {
        spellsKnown[1] = spellsKnown[0] / 4;
        spellsKnown[2] = spellsKnown[0] / 4;
        spellsKnown[3] = spellsKnown[0] / 4;
        spellsKnown[4] = spellsKnown[0] / 4;
      } else if (level >= 9 && level <= 10) {
        spellsKnown[1] = spellsKnown[0] / 5;
        spellsKnown[2] = spellsKnown[0] / 5;
        spellsKnown[3] = spellsKnown[0] / 5;
        spellsKnown[4] = spellsKnown[0] / 5;
        spellsKnown[5] = spellsKnown[0] / 5;
      } else if (level >= 11 && level <= 12) {
        spellsKnown[1] = spellsKnown[0] / 6;
        spellsKnown[2] = spellsKnown[0] / 6;
        spellsKnown[3] = spellsKnown[0] / 6;
        spellsKnown[4] = spellsKnown[0] / 6;
        spellsKnown[5] = spellsKnown[0] / 6;
        spellsKnown[6] = spellsKnown[0] / 6;
      } else if (level >= 13 && level <= 14) {
        spellsKnown[1] = spellsKnown[0] / 7;
        spellsKnown[2] = spellsKnown[0] / 7;
        spellsKnown[3] = spellsKnown[0] / 7;
        spellsKnown[4] = spellsKnown[0] / 7;
        spellsKnown[5] = spellsKnown[0] / 7;
        spellsKnown[6] = spellsKnown[0] / 7;
        spellsKnown[7] = spellsKnown[0] / 7;
      } else if (level >= 15 && level <= 16) {
        spellsKnown[1] = spellsKnown[0] / 8;
        spellsKnown[2] = spellsKnown[0] / 8;
        spellsKnown[3] = spellsKnown[0] / 8;
        spellsKnown[4] = spellsKnown[0] / 8;
        spellsKnown[5] = spellsKnown[0] / 8;
        spellsKnown[6] = spellsKnown[0] / 8;
        spellsKnown[7] = spellsKnown[0] / 8;
        spellsKnown[8] = spellsKnown[0] / 8;
      } else {
        spellsKnown[1] = spellsKnown[0] / 9;
        spellsKnown[2] = spellsKnown[0] / 9;
        spellsKnown[3] = spellsKnown[0] / 9;
        spellsKnown[4] = spellsKnown[0] / 9;
        spellsKnown[5] = spellsKnown[0] / 9;
        spellsKnown[6] = spellsKnown[0] / 9;
        spellsKnown[7] = spellsKnown[0] / 9;
        spellsKnown[8] = spellsKnown[0] / 9;
        spellsKnown[9] = spellsKnown[0] / 9;
      }
      for (var i = spellsKnown[1]; i > 0; i--) {
        index = Math.floor(Math.random() * spellsBard[1].length);
        while (spellsBard[1][index] == "e")
          index = Math.floor(Math.random() * spellsBard[1].length);
        spellsChosen += spellsBard[1][index] + "<br>";
        spellsBard[1][index] = "e";
      }
      if (spellsKnown[2] !== 0) {
        for (var i = spellsKnown[2]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[2].length);
          while (spellsBard[2][index] == "e")
            index = Math.floor(Math.random() * spellsBard[2].length);
          spellsChosen += spellsBard[2][index] + "<br>";
          spellsBard[2][index] = "e";
        }
      }
      if (spellsKnown[3] !== 0) {
        for (var i = spellsKnown[3]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[3].length);
          while (spellsBard[3][index] == "e")
            index = Math.floor(Math.random() * spellsBard[3].length);
          spellsChosen += spellsBard[3][index] + "<br>";
          spellsBard[3][index] = "e";
        }
      }
      if (spellsKnown[4] !== 0) {
        for (var i = spellsKnown[4]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[4].length);
          while (spellsBard[4][index] == "e")
            index = Math.floor(Math.random() * spellsBard[4].length);
          spellsChosen += spellsBard[4][index] + "<br>";
          spellsBard[4][index] = "e";
        }
      }
      if (spellsKnown[5] !== 0) {
        for (var i = spellsKnown[5]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[5].length);
          while (spellsBard[5][index] == "e")
            index = Math.floor(Math.random() * spellsBard[5].length);
          spellsChosen += spellsBard[5][index] + "<br>";
          spellsBard[5][index] = "e";
        }
      }
      if (spellsKnown[6] !== 0) {
        for (var i = spellsKnown[6]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[6].length);
          while (spellsBard[6][index] == "e")
            index = Math.floor(Math.random() * spellsBard[6].length);
          spellsChosen += spellsBard[6][index] + "<br>";
          spellsBard[6][index] = "e";
        }
      }
      if (spellsKnown[7] !== 0) {
        for (var i = spellsKnown[7]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[7].length);
          while (spellsBard[7][index] == "e")
            index = Math.floor(Math.random() * spellsBard[7].length);
          spellsChosen += spellsBard[7][index] + "<br>";
          spellsBard[7][index] = "e";
        }
      }
      if (spellsKnown[8] !== 0) {
        for (var i = spellsKnown[8]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[8].length);
          while (spellsBard[8][index] == "e")
            index = Math.floor(Math.random() * spellsBard[8].length);
          spellsChosen += spellsBard[8][index] + "<br>";
          spellsBard[8][index] = "e";
        }
      }
      if (spellsKnown[9] !== 0) {
        for (var i = spellsKnown[9]; i > 0; i--) {
          index = Math.floor(Math.random() * spellsBard[9].length);
          while (spellsBard[9][index] == "e")
            index = Math.floor(Math.random() * spellsBard[9].length);
          spellsChosen += spellsBard[9][index] + "<br>";
          spellsBard[9][index] = "e";
        }
      }
      switch (subclass) {
        case "College of Lore Bard":
          break;
      }
      break;
    case "Cleric":
      var clericSpells = [
        /*Cantrips*/[spells[166][1], spells[202][1], spells[224][1], spells[278][1], spells[283][1], spells[304][1], spells[328][1]],
        /*Level One*/[spells[23][1], spells[33][1], spells[54][1], spells[79][1], spells[84][1], spells[93][1], spells[94][1], spells[95][1], spells[167][1], spells[175][1], spells[192][1], spells[267][1], spells[269][1], spells[284][1], spells[295][1]],
        /*Level Two*/[spells[1][1], spells[18][1], spells[36][1], spells[42][1], spells[73][1], spells[115][1], spells[134][1], spells[154][1], spells[182][1], spells[200][1], spells[207][1], spells[259][1], spells[268][1], spells[298][1], spells[311][1], spells[349][1], spells[360][1]],
        /*Level Three*/[spells[7][1], spells[27][1], spells[29][1], spells[49][1], spells[78][1], spells[88][1], spells[101][1], spells[130][1], spells[158][1], spells[211][1], spells[219][1], spells[222][1], spells[266][1], spells[277][1], spells[281][1], spells[290][1], spells[306][1], spells[310][1], spells[333][1], spells[351][1]],
        /*Level Four*/[spells[25][1], spells[74][1], spells[89][1], spells[103][1], spells[149][1], spells[164][1], spells[206][1], spells[314][1]],
        /*Level Five*/[spells[55][1], spells[71][1], spells[100][1], spells[141][1], spells[153][1], spells[163][1], spells[170][1], spells[193][1], spells[197][1], spells[217][1], spells[251][1], spells[270][1], spells[286][1]],
        /*Level Six*/[spells[31][1], spells[80][1], spells[133][1], spells[146][1], spells[172][1], spells[174][1], spells[178][1], spells[250][1], spells[338][1], spells[358][1]],
        /*Level Seven*/[spells[64][1], spells[105][1], spells[120][1], spells[139][1], spells[252][1], spells[275][1], spells[279][1], spells[321][1]],
        /*Level Eight*/[spells[10][1], spells[75][1], spells[112][1], spells[183][1]],
        /*Level Nine*/[spells[17][1], spells[152][1], spells[218][1], spells[337][1]]
      ];
      switch (subclass) {
        case "Knowledge Domain Cleric":

          break;
        case "Life Domain Cleric":

          break;
        case "Light Domain Cleric":

          break;
        case "Nature Domain Cleric":

          break;
        case "Tempest Domain Cleric":

          break;
        case "Trickery Domain Cleric":

          break;
        case "War Domain Cleric":

          break;
      }
      break;
    case "Druid":
      var druidSpells = [
        /*Cantrips*/[spells[111][1], spells[166][1], spells[224][1], spells[254][1], spells[263][1], spells[278][1], spells[296][1], spells[32][1]],
        /*Level One*/[spells[4][1], spells[44][1], spells[79][1], spells[84][1], spells[94][1], spells[95][1], spells[118][1], spells[125][1], spells[145][1], spells[159][1], spells[175][1], spells[195][1], spells[208][1], spells[269][1], spells[305][1], spells[331][1]],
        /*Level Two*/[spells[5][1], spells[26][1], spells[28][1], spells[87][1], spells[115][1], spells[134][1], spells[140][1], spells[142][1], spells[168][1], spells[176][1], spells[182][1], spells[200][1], spells[205][1], spells[207][1], spells[234][1], spells[245][1], spells[268][1], spells[309][1]],
        /*Level Three*/[spells[41][1], spells[62][1], spells[88][1], spells[101][1], spells[130][1], spells[222][1], spells[253][1], spells[266][1], spells[302][1], spells[307][1], spells[350][1], spells[351][1], spells[355][1]],
        /*Level Four*/[spells[34][1], spells[61][1], spells[67][1], spells[69][1], spells[74][1], spells[106][1], spells[149][1], spells[155][1], spells[160][1], spells[171][1], spells[187][1], spells[206][1], spells[255][1], spells[314][1], spells[315][1], spells[344][1]],
        ///*Level Five*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Six*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Seven*/[spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Eight*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Nine*/[spells[][], spells[][], spells[][], spells[][]]
      ];
      switch (subclass) {
        case "Circle of the Land (Arctic)":

          break;
        case "Circle of the Land (Coast)":

          break;
        case "Circle of the Land (Desert)":

          break;
        case "Circle of the Land (Forest)":

          break;
        case "Circle of the Land (Grassland)":

          break;
        case "Circle of the Land (Mountain)":

          break;
        case "Circle of the Land (Swamp)":

          break;
        case "Circle of the Land (Underdark)":

          break;
        case "Circle of the Moon ":

          break;
      }
      break;
    case "Fighter":
      switch (subclass) {
        case " (Eldritch Knight)":

          break;
      }
      break;
    case "Paladin":
      var paladinSpells = [
        ///*Level One*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Two*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Three*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Four*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Five*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]]
      ];
      switch (subclass) {
        case "Oath of Devotion ":

          break;
        case "Oath of the Ancients ":

          break;
        case "Oath of Vengeance ":

          break;
      }
      break;
    case "Ranger":
      //var rangerSpells = [
        ///*Level One*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Two*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Three*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Four*/[spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Five*/[spells[][], spells[][], spells[][], spells[][]]
      //];
      switch (subclass) {
        case " (Hunter)":

          break;
        case " (Beastmaster)":

          break;
      }
      break;
    case "Rogue":
      switch (subclass) {
        case " (Arcane Trickster)":

          break;
      }
      break;
    case "Sorcerer":
      //var sorcererSpells = [
        ///*Cantrips*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level One*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Two*/[spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][], spells[][]],
        ///*Level Three*/[],
        ///*Level Four*/[],
        ///*Level Five*/[],
        ///*Level Six*/[],
        ///*Level Seven*/[],
        ///*Level Eight*/[],
        ///*Level Nine*/[]
      //];
      switch (subclass) {
        case " Draconic Bloodline":

          break;
        case " Wild Magic":

          break;
      }
      break;
    case "Warlock":
      //var warlockSpells = [
        ///*Cantrips*/[],
        ///*Level One*/[],
        ///*Level Two*/[],
        ///*Level Three*/[],
        ///*Level Four*/[],
        ///*Level Five*/[],
        ///*Level Six*/[],
        ///*Level Seven*/[],
        ///*Level Eight*/[],
        ///*Level Nine*/[]
      //];
      switch (subclass) {
        case " of the Archfey":

          break;
        case " of the Fiend":

          break;
        case " of the Great Old One":

          break;
      }
      break;
    case "Wizard":
      //var wizardSpells = [
        ///*Cantrips*/[],
        ///*Level One*/[],
        ///*Level Two*/[],
        ///*Level Three*/[],
        ///*Level Four*/[],
        ///*Level Five*/[],
        ///*Level Six*/[],
        ///*Level Seven*/[],
        ///*Level Eight*/[],
        ///*Level Nine*/[]
      //];
      switch (subclass) {
        case "School of Abjuration ":

          break;
        case "School of Conjuration ":

          break;
        case "School of Diviniation ":

          break;
        case "School of Enchantment ":

          break;
        case "School of Evocation ":

          break;
        case "School of Illusion ":

          break;
        case "School of Necromancy ":

          break;
        case "School of Transmutation ":

          break;
      }
      break;
  }
  switch (race) {
    case "Elf":
      switch (subclass) {
        case "High ":

          break;
        case "Dark ":

          break;
      }
      break;
    case "Gnome":
      switch (subclass) {
        case "Forest ":

          break;
      }
      break;
    case "Tiefling":

      break;
  }
  return spellsChosen;
}
