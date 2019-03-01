/*For setRace*/
var race = "";
var subrace = "";
var manualRace = false;

/*For setClass*/
var classChoice = "";
var hitDie = 0;

/*For setBackground*/
var backgroundSelect = "";
var trait1 = "";
var trait2 = "";
var ideal = "";

/*For setAlignment*/
var order = "";
var moral = "";

/*For generateScores*/
var primary = 0;
var secondary = 0;

var strength = 0;
var dexterity = 0;
var constitution = 0;
var intelligence = 0;
var wisdom = 0;
var charisma = 0;

var mods = [0, 0, 0, 0, 0, 0];

var strMod = 0;
var dexMod = 0;
var conMod = 0;
var intMod = 0;
var wisMod = 0;
var chaMod = 0;

/*For setHealth*/
var maxHP = 0;

/*For setSpeed*/
var speed = 0;

/*For setProficiencies*/
//0:STR, 1:DEX, 2:CON, 3:INT, 4:WIS, 5:CHA
var saveProficiencies = [0, 0, 0, 0, 0, 0];
//[0:Athletics], [1:Acrobatics, 2:Sleight of Hand, 3:Stealth], [4:Arcana, 5:History, 6:Investigation, 7:Nature, 8:Religion],
//[9:Animal Handling, 10:Insight, 11:Medicine, 12:Perception, 13:Survival], [14: Deception, 15:Intimidation, 16: Performance, 17:Persuasion]
var skillProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Light, 1:Medium, 2:Heavy, 3:Shields
var armorProficiencies = [0, 0, 0, 0];
//0:Simple Melee, 1:Simple Ranged, 2:Martial Melee, 3:Martial Ranged
var weaponTypeProficiencies = [0, 0, 0, 0];
//Simple Melee: 0:Club, 1:Dagger, 2:Greatclub, 3:Handaxe, 4:Javelin, 5:Light Hammer, 6:Mace, 7:Quarterstaff, 8:Sickle, 9:Spear
//Simple Ranged: 10:Light Crossbow, 11:Dart, 12:Shortbow, 13:Sling
//Martial Melee: 14:Battleaxe, 15:Flail, 16:Glaive, 17:Greataxe, 18:Greatsword, 19:Halberd, 20:Lance, 21:Longsword, 22:Maul, 23:Morningstar, 24:Pike, 25:Rapier, 26:Scimitar,
//Martial Melee: 27:Shortsword, 28:Trident, 29:War Pick, 30:Warhammer, 31:Whip
//Martial Ranged: 32:Blowgun, 33:Hand Crossbow, 34:Heavy Crossbow, 35:Longbow, 36:Net
var weaponProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Alchemist's Supplies, 1:Brewer's Supplies, 2: Calligrapher's Supplies, 3:Carpenter's Tools, 4: Cartographer's Tools, 5:Cobbler's Tools, 6:Cook's Utensils, 7:Disguise Kit,
//8:Forgery Kit, 9:Glassblower's Tools, 10:Herbalism Kit, 11:Jeweler's Tools, 12:Leatherworker's Tools, 13:Mason's Tools, 14:Navigator's Tools, 15:Painter's Supplies, 16:Poisoner's Kit,
//17:Potter's Tools, 18:Smith's Tools, 19:Thieves' Tools, 20:Tinker's Tools, 21:Weaver's Tools, 22:Woodcarver's Tools, 23:Land Vehicles, 24:Water Vehicles
var toolProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Dice Set, 1:Playing Card Set, 2:Dragonchess Set
var gamingProficiencies = [0, 0, 0];
//0:Bagpipes, 1:Drum, 2:Dulcimer, 3:Flute, 4:Lute, 5:Lyre, 6:Horn, 7:Pan Flute, 8:Shawm, 9:Viol
var instrumentProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//For setLevel
var level = 1;

//For setSubclass
var subclass = "";

//For getFeatures
var features = "";

//Barbarian
var rages = 0;
var rageDamage = 0;

/*For setSpells*/
var spells = [
  //["ID", "Name", "Type", "Level", "Ritual Casting", "Casting Time", "Range", "Components", "Duration", "Concentration", "Description"]
  [0, "Acid Splash", "Conjuration", "Cantrip", false, "1 Action", "60 Feet", "V, S", "Instantaneous", false, "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet o f each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."],

  [1, "Aid", "Abjuration", "2nd-level", false, "1 Action", "30 Feet", "V, S, M (a tiny strip of white cloth)", "8 Hours", false, "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd."],

  [2, "Alarm", "Abjuration", "1st-level", true, "1 Minute", "30 Feet", "V, S, M (a tiny bell and a piece of fine silver wire)", "8 Hours", "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."],

  [3, "Alter Self", "Transmutation", "2nd-level", false, "1 Action", "Self", "V, S", "1 Hour", true, "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. <b>Aquatic Adaptation.</b> You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. <b>Change Appearance.</b> You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a m em ber of another race, though none of your statistics change. You also can’t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. <b>Natural Weapons.</b> You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."],

  [4, "Animal Friendship", "Enchantment", "1st-level", false, "1 Action", "30 Feet", "V, S, M (a morsel of food)", "24 Hours", false, "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."],

  [5, "Animal Messenger", "Enchantment", "2nd-level", true, "1 Action", "30 Feet", "V, S, M (a morsel of food)", "24 Hours", false, "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bird. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. <b>At Higher Levels.</b> If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."],

  [6, "Animal Shapes", "Transmutation", "8th-level", false, "1 Action", "30 Feet", "V, S", "24 Hours", true, "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target’s game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The target can’t activate, wield, or otherwise benefit from any of its equipment."],

  [7, "Animate Dead", "Necromancy", "3rd-level", false, "1 Minute", "10 Feet", "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)", "Instantaneous", false, "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature’s game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional Undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones."],

  // Animate objects, add table later
  [8, "Animate Objects", "Transmutation", "5th-level", false, "1 Action", "120 Feet", "V, S", "1 Minute", true, "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can’t animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. <a href=\"https://i.imgur.com/HzMsK3O.png\">Animated Object Statistics</a>. An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The GM might rule that a specific object inflicts slashing or piercing damage based on its form. <b>At Higher Levels.</b> If you cast this spell using a spell slot of 6th level or higher, you can animate two additional Objects for each slot level above 5th."],

  [9, "Antilife Shell", "Abjuration", "5th-level", false, "1 Action", "Self (10-foot radius)", "V, S", "1 Hour", true, "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends."],

  [10, "Antimagic Field", "Abjuration", "8th-level", false, "1 Action", "Self (10-foot radius)", "V, S, M (a pinch of powdered iron or iron fillings)", "1 Hour", true, "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can’t be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can’t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but the time it spends suppressed counts against its duration. <b>Targeted Effects.</b> Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. <b>Areas of Magic.</b> The area of another spell or magical effect, such as fireball, can’t extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. <b>Spells.</b> Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. <b>Magic Items.</b> The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapon’s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. <b>Magical Travel.</b> Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere. <b>Creatures and Objects.</b> A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. <b>Dispel Magic.</b> Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don’t nullify each other."],

  [11, "Antipathy/Sympathy", "Enchantment", "8th-level", false, "1 Hour", "60 Feet", "V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop or hoey for thesympathy effect)", "10 Days", false, "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.  <b>Antipathy.</b> The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. <b>Sympathy.</b> The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. <b>Ending the Effect.</b> If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. ON a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spells is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."],

  [12, "Arcane Eye", "Divination", "4th-level", false, "1 Action", "30 Feet", "V, S, M (a bit of bat fur)", "1 Hour", true, "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.   As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter."],

  [13, ],

  [14, ],

  [15, ],

  [16, ],

  [17, ],

  [18, ],

  [19, ],

  [20, ],

  [21, ],

  [22, ],

  [23, ],

  [24, ],

  [25, ],

  [26, ],

  [27, ],

  [28, ],

  [29, ],

  [30, ],

  [31, ],

  [32, ],

  [33, ],

  [34, ],

  [35, ],

  [36, ],

  [37, ],

  [38, ],

  [39, ],

  [40, ],

  [41, ],

  [42, ],

  [43, ],

  [44, ],

  [45, ],

  [46, ],

  [47, ],

  [48, ],

  [49, ],

  [50, ],

  [51, ],

  [52, ],

  [53, ],

  [54, ],

  [55, ],

  [56, ],

  [57, ],

  [58, ],

  [59, ],

  [60, ],

  [61, ],

  [62, ],

  [63, ],

  [64, ],

  [65, ],

  [66, ],

  [67, ],

  [68, ],

  [69, ],

  [70, ],

  [71, ],

  [72, ],

  [73, ],

  [74, ],

  [75, ],

  [76, ],

  [77, ],

  [78, ],

  [79, ],

  [80, ],

  [81, ],

  [82, ],

  [83, ],

  [84, ],

  [85, ],

  [86, ],

  [87, ],

  [88, ],

  [89, ],

  [90, ],

  [91, ],

  [92, ],

  [93, ],

  [94, ],

  [95, ],

  [96, ],

  [97, ],

  [98, ],

  [99, ],

  [100, ],

  [101, ],

  [102, ],

  [103, ],

  [104, ],

  [105, ],

  [106, ],

  [107, ],

  [108, ],

  [109, ],

  [110, ],

  [111, ],

  [112, ],

  [113, ],

  [114, ],

  [115, ],

  [116, ],

  [117, ],

  [118, ],

  [119, ],

  [120, ],

  [121, ],

  [122, ],

  [123, ],

  [124, ],

  [125, ],

  [126, ],

  [127, ],

  [128, ],

  [129, ],

  [130, ],

  [131, ],

  [132, ],

  [133, ],

  [134, ],

  [135, ],

  [136, ],

  [137, ],

  [138, ],

  [139, ],

  [140, ],

  [141, ],

  [142, ],

  [143, ],

  [144, ],

  [145, ],

  [146, ],

  [147, ],

  [148, ],

  [149, ],

  [150, ],

  [151, ],

  [152, ],

  [153, ],

  [154, ],

  [155, ],

  [156, ],

  [157, ],

  [158, ],

  [159, ],

  [160, ],

  [161, ],

  [162, ],

  [163, ],

  [164, ],

  [165, ],

  [166, ],

  [167, ],

  [168, ],

  [169, ],

  [170, ],

  [171, ],

  [172, ],

  [173, ],

  [174, ],

  [175, ],

  [176, ],

  [177, ],

  [178, ],

  [179, ],

  [180, ],

  [181, ],

  [182, ],

  [183, ],

  [184, ],

  [185, ],

  [186, ],

  [187, ],

  [188, ],

  [189, ],

  [190, ],

  [191, ],

  [192, ],

  [193, ],

  [194, ],

  [195, ],

  [196, ],

  [197, ],

  [198, ],

  [199, ],

  [200, ],

  [201, ],

  [202, ],

  [203, ],

  [204, ],

  [205, ],

  [206, ],

  [207, ],

  [208, ],

  [209, ],

  [210, ],

  [211, ],

  [212, ],

  [213, ],

  [214, ],

  [215, ],

  [216, ],

  [217, ],

  [218, ],

  [219, ],

  [220, ],

  [221, ],

  [223, ],

  [224, ],

  [225, ],

  [226, ],

  [227, ],

  [228, ],

  [229, ],

  [230, ],

  [231, ],

  [232, ],

  [233, ],

  [234, ],

  [235, ],

  [236, ],

  [237, ],

  [238, ],

  [239, ],

  [240, ],

  [241, ],

  [242, ],

  [243, ],

  [244, ],

  [245, ],

  [246, ],

  [247, ],

  [248, ],

  [249, ],

  [250, ],

  [251, ],

  [252, ],

  [253, ],

  [254, ],

  [255, ],

  [256, ],

  [257, ],

  [258, ],

  [259, ],

  [260, ],

  [261, ],

  [262, ],

  [263, ],

  [264, ],

  [265, ],

  [266, ],

  [267, ],

  [268, ],

  [269, ],

  [270, ],

  [271, ],

  [272, ],

  [273, ],

  [274, ],

  [275, ],

  [276, ],

  [277, ],

  [278, ],

  [279, ],

  [280, ],

  [281, ],

  [282, ],

  [283, ],

  [284, ],

  [285, ],

  [286, ],

  [287, ],

  [288, ],

  [289, ],

  [290, ],

  [291, ],

  [292, ],

  [293, ],

  [294, ],

  [295, ],

  [296, ],

  [297, ],

  [298, ],

  [299, ],

  [300, ],

  [301, ],

  [302, ],

  [303, ],

  [304, ],

  [305, ],

  [306, ],

  [307, ],

  [308, ],

  [309, ],

  [310, ],

  [311, ],

  [312, ],

  [313, ],

  [314, ],

  [315, ],

  [316, ],

  [317, ],

  [318, ],

  [319, ],

  [320, ],

  [321, ],

  [323, ],

  [324, ],

  [325, ],

  [326, ],

  [327, ],

  [328, ],

  [329, ],

  [330, ],

  [331, ],

  [332, ],

  [333, ],

  [334, ],

  [335, ],

  [336, ],

  [337, ],

  [338, ],

  [339, ],

  [340, ],

  [341, ],

  [342, ],

  [343, ],

  [344, ],

  [345, ],

  [346, ],

  [347, ],

  [348, ],

  [349, ],

  [350, ],

  [351, ],

  [352, ],

  [353, ],

  [354, ],

  [355, ],

  [356, ],

  [357, ],

  [358, ],

  [359, ],

  [360, ],

  [361, ]
];

//For all of the saving and loading functions: getCharacter, getPreviousCharacter, saveCharacter, loadCharacter, deleteCharacter
var racePrevious = race;
var subracePrevious = subrace;

var classChoicePrevious = classChoice;

var backgroundPrevious = backgroundSelect;
var trait1Previous = trait1;
var trait2Previous = trait2;
var idealPrevious = ideal;

var orderPrevious = order;
var moralPrevious = moral;

var strengthPrevious = strength;
var dexterityPrevious = dexterity;
var constitutionPrevious = constitution;
var intelligencePrevious = intelligence;
var wisdomPrevious = wisdom;
var charismaPrevious = charisma;

var modsPrevious = mods;

var maxHPPrevious = maxHP;

var speedPrevious = speed;

var charactersCreated = 0;

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
    var index = Math.floor(Math.random() * 11);
    classChoice = classes[index];
    hitDie = hitDice[index];
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
                    subclass = " of The Archfey";
                    break;
                case 1:
                    subclass = " of The Fiend";
                    break;
                case 2:
                    subclass = " of The Great Old One";
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
                        subclass = "School of Divination";
                        break;
                    case 3:
                        subclass = "School of Enchantment";
                        break;
                    case 4:
                        subclass = "School of Evocation";
                        break;
                    case 5:
                        subclass = "School of Illusion";
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

function setBackground() {
    var backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin"];
    backgroundSelect = backgrounds[Math.floor(Math.random() * 18)];

        //Personality Traits

        var personalityTraitsAcolyte = [
            "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.",
            "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            "I am tolerant (or intolerant) of other faiths and respect or condemn) the worship of other gods.",
            "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
            "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."];

        var personalityTraitsCharlatan = [
            "I fall in and out of love easily, and am always pursuing someone.",
            "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            "Flattery is my preferred trick for getting what I want.",
            "I’m a born gambler who can't resist taking a risk for a potential payoff.",
            "I lie about almost everything, even when there’s no good reason to.",
            "Sarcasm and insults are my weapons of choice.",
            "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
            "I pocket anything I see that might have some value."];

        var personalityTraitsCriminal = [
            "I always have a plan for what to do when things go wrong.",
            "I am calm. no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."];

        var personalityTraitsEntertainer = [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I’m a hopeless romantic, always searching for that \"special someone.\"",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I’m not the center of attention.",
            "I’ll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."];

        var personalityTraitsFolkHero = [
            "I judge people by their actions, not their words.",
            "If someone is in trouble, I’m always ready to lend help.",
            "When I set my mind to something, I follow through no matter what gets in my way",
            "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
            "I’m confident in my own abilities and do what I can to instill confidence in others.",
            "Thinking is for other people. I prefer action.",
            "I misuse long words in an attempt to sound smarter",
            "I get bored easily. When am I going to get on with my destiny?"];

        var personalityTraitsGladiator = [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I’m a hopeless romantic, always searching for that \"special someone.\"",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I’m not the center of attention.",
            "I’ll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."];

        var personalityTraitsGuildArtisan = [
            "I believe that anything worth doing is worth doing right. I can’t help it—I’m a perfectionist.",
            "I’m a snob who looks down on those who can’t appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I’m full of witty aphorisms and have a proverb for every occasion.",
            "I’m rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don’t part with my money easily and will haggle tirelessly to get the best deal possible",
            "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me."];

        var personalityTraitsGuildMerchant = [
            "I believe that anything worth doing is worth doing right. I can’t help it—I’m a perfectionist.",
            "I’m a snob who looks down on those who can’t appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I’m full of witty aphorisms and have a proverb for every occasion.",
            "I’m rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don’t part with my money easily and will haggle tirelessly to get the best deal possible",
            "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me."];

        var personalityTraitsHermit = [
            "I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
            "I am utterly serene, even in the face of disaster.",
            "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
            "I feel tremendous empathy for all who suffer.",
            "I’m oblivious to etiquette and social expectations.",
            "I connect everything that happens to me to a grand, cosmic plan.",
            "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
            "I am working on a grand philosophical theory and love sharing my ideas."];

        var personalityTraitsKnight = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions",
            "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."];

        var personalityTraitsNoble = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions",
            "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."];

        var personalityTraitsOutlander = [
            "I’m driven by a wanderlust that led me away from home.",
            "I watch over my friends as if they were a litter of newborn pups.",
            "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I’d do it again if I had to.",
            "I have a lesson for every situation, drawn from observing nature",
            "I place no stock in wealthy or well-mannered folk. Money and manners won’t save you from a hungry owlbear.",
            "I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
            "I feel far more comfortable around animals than people.",
            "I was, in fact, raised by wolves."];

        var personalityTraitsPirate = [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."];

        var personalityTraitsSage = [
            "I use polysyllabic words that convey the impression of great erudition.",
            "I've read every book in the world’s greatest libraries—or I like to boast that I have.",
            "I'm used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.",
            "There’s nothing I like more than a good mystery.",
            "I’m willing to listen to every side of an argument before I make my own judgment.",
            "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.",
            "I am horribly, horribly awkward in social situations.",
            "I’m convinced that people are always trying to steal my secrets."];

        var personalityTraitsSailor = [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."];

        var personalityTraitsSoldier = [
            "I'm always polite and respectful.",
            "I’m haunted by memories o f war. I can’t get the images of violence out of my mind.",
            "I’ve lost too many friends, and I’m slow to make new ones.",
            "I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."];

        var personalityTraitsSpy = [
            "I always have a plan for what to do when things go wrong.",
            "I am calm. no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."];

        var personalityTraitsUrchin = [
            "I hide scraps of food and trinkets away in my pockets.",
            "I ask a lot of questions.",
            "I like to squeeze into small places where no one else can get to me.",
            "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
            "I eat like a pig and have bad manners.",
            "I think anyone who’s nice to me is hiding evil intent.",
            "I don’t like to bathe.",
            "I bluntly say what other people are hinting at or hiding."];

        //Ideals

        var idealsAcolyte = [
            "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)",
            "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)"];

        var idealsCharlatan = [
            "Independence. I am a free spirit— no one tells me what to do. (Chaotic)",
            "Fairness. I never target people who can’t afford to lose a few coins. (Lawful)",
            "Charity. I distribute the money I acquire to the people who really need it. (Good)",
            "Creativity. I never run the same con twice. (Chaotic)",
            "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
            "Aspiration. I’m determined to make something of myself. (Any)"];

        var idealsCriminal = [
            "Honor. I don’t steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There’s a spark of good in everyone. (Good)"];

        var idealsEntertainer = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I’m only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];

        var idealsFolkHero = [
            "Respect. People deserve to be treated with dignity and respect. (Good)",
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
            "Might. If I become strong, I can take what I want—what I deserve. (Evil)",
            "Sincerity. There’s no good in pretending to be something I’m not. (Neutral)",
            "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"];

        var idealsGladiator = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I’m only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];

        var idealsGuildArtisan = [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I’m only in it for the money. (Evil)",
            "People. I’m committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"];

        var idealsGuildMerchant = [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I’m only in it for the money. (Evil)",
            "People. I’m committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"];

        var idealsHermit = [
            "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
            "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
            "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
            "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
            "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
            "Self-Knowledge. If you know yourself, there’s nothing left to know. (Any)"];

        var idealsKnight = [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"];

        var idealsNoble = [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"];

        var idealsOutlander = [
            "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
            "Greater Good. It is each person’s responsibility to make the most happiness for the whole tribe. (Good)",
            "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
            "Might. The strongest are meant to rule. (Evil)",
            "Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
            "Glory. I must earn glory in battle, for myself and my clan. (Any)"];

        var idealsPirate = [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I’m committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any"];

        var idealsSage = [
            "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
            "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
            "Logic. Emotions must not cloud our logical thinking. (Lawful)",
            "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            "Power. Knowledge is the path to power and domination. (Evil)",
            "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"];

        var idealsSailor = [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I’m committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any"];

        var idealsSoldier = [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"];

        var idealsSpy = [
            "Honor. I don’t steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There’s a spark of good in everyone. (Good)"];

        var idealsUrchin = [
            "Respect. All people, rich or poor, deserve respect. (Good)",
            "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
            "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
            "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
            "People. I help the people who help me— that’s what keeps us alive. (Neutral)",
            "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)"];


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
    maxHP = hitDie + conMod;
    if (maxHP <= 0)
        maxHP = 1;
    return "Max HP: " + maxHP;
}

function setSpeed() {
    var baseSpeed = 25;
    var raceMod = 0;
    if (race !== "Gnome" && race !== "Halfling" && race !== "Dwarf")
        raceMod += 5;
    if (subrace + race == "Wood Elf")
        raceMod += 5;
    speed = baseSpeed + raceMod;
    return "Speed: " + speed;
}

function setProficiencies() {
    //Proficiencies based on class
    switch(classChoice) {
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
                    //New York City
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
                    //Class of 2019
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
        case "College of Lore ":
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
        case "College of Valor ":
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            break;
        case "Knowledge Domain ":
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
        case "Life Domain ":
            armorProficiencies[2] = 1;
            break;
        case "Nature Domain ":
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
        case "Tempest Domain ":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case "War Domain ":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case " (Battle Master)":
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case " (Assassin)":
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
  var skill = ["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];

}

function setFeatures() {
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
            if (level == 1) {
                features += "Rage: PHB pg. 48 </br>    You have " + rages + " uses of Rage and you have a +" + rageDamage + " to damage rolls using Strength while raging.";
                features += "Unarmored Defense: PHB pg. 48 </br>";
            }
            //Level 2
            if (level == 2) {
                //insert features
            }

            break;
        case "Bard":
            break;
        case "Cleric":
            break;
        case "Druid":
            break;
        case "Fighter":
            break;
        case "Monk":
            break;
        case "Paladin":
            break;
        case "Ranger":
            break;
        case "Rogue":
            break;
        case "Sorcerer":
            break;
        case "Warlock":
            break;
        case "Wizard":
            break;
    }
}

//Why did we decide to do this</a>
function setSpells() {
  return "<a data-toggle=\"collapse\" href=\"#collapseSpells\" aria-expanded=\"false\" aria-controls=\"collapseExample\">" + spells[0][1] + "</a><div class=\"collapse\" id=\"collapseSpells\"><div class=\"card card-body\">Spell Type: " + spells[0][2] + "</br>Spell Level: " + spells[0][3] + "</div></div>";
}

var save = localStorage.getItem("save");

if (save == null) {
    save = undefined;
}

function getCharacter() {
        saveProficiencies = [0, 0, 0, 0, 0, 0];
        skillProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        armorProficiencies = [0, 0, 0, 0];
        weaponTypeProficiencies = [0, 0, 0, 0];
        weaponProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        toolProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        gamingProficiencies = [0, 0, 0];
        instrumentProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        racePrevious = race;
        subracePrevious = subrace;

        classChoicePrevious = classChoice;
        subclassPrevious = subclass;

        backgroundPrevious = backgroundSelect;
        trait1Previous = trait1;
        trait2Previous = trait2;
        idealPrevious = ideal;

        orderPrevious = order;
        moralPrevious = moral;

        strengthPrevious = strength;
        dexterityPrevious = dexterity;
        constitutionPrevious = constitution;
        intelligencePrevious = intelligence;
        wisdomPrevious = wisdom;
        charismaPrevious = charisma;

        modsPrevious = mods;
        strModPrevious = strMod;
        dexModPrevious = dexMod;
        conModPrevious = conMod;
        intModPrevious = intMod;
        wisModPrevious = wisMod;
        chaModPrevious = chaMod;

        maxHPPrevious = maxHP;

        speedPrevious = speed;

        charactersCreated ++;

        document.getElementById("consoleDescriptions").innerHTML = setRace() + "</br>" + setClass() + "</br>" + setBackground() + "</br>" + setAlignment(race, ideal);
        document.getElementById("consoleStatistics").innerHTML = generateScores(primary, secondary, race, subrace, classChoice) + "</br>" + setHealth() + "</br>" + setSpeed();
        document.getElementById("consoleProficiencies").innerHTML = displayProficiencies();
        document.getElementById("consoleSpells").innerHTML = setSpells();
}

function getPreviousCharacter() {
    if (charactersCreated >= 2) {
      document.getElementById("consoleDescriptions").innerHTML = "Race: " + subracePrevious + racePrevious +
          "</br> Class: " + subclassPrevious +
          "</br> Background: " + backgroundPrevious +
          "</br> Personality Trait One: " + trait1Previous + "</br> Personality Trait Two: " + trait2Previous + "</br>" + "Ideal: " + idealPrevious +
          "</br> Alignment: " + orderPrevious + " " + moralPrevious;
      document.getElementById("consoleStatistics").innerHTML = "Strength: " + strengthPrevious + " (" + modsPrevious[0] + ")</br> Dexterity: " + dexterityPrevious + " (" + modsPrevious[1] + ")</br> Constitution: " + constitutionPrevious + " (" + modsPrevious[2] + ")</br> Intelligence: " + intelligencePrevious + " (" + modsPrevious[3] + ")</br> Wisdom: " + wisdomPrevious + " (" + modsPrevious[4] + ")</br> Charisma: " + charismaPrevious + " (" + modsPrevious[5] + ")" +
          "</br> Max HP: " + maxHPPrevious +
          "</br> Speed: " + speedPrevious;
    }
}

function saveCharacter() {
    save = {
        race: race,
        subrace: subrace,
        classChoice: classChoice,
        subclass: subclass,
        backgroundSelect: backgroundSelect,
        trait1: trait1,
        trait2: trait2,
        ideal: ideal,
        order: order,
        moral: moral,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma,
        maxHP: maxHP,
        speed: speed,
        strMod: strMod,
        dexMod: dexMod,
        conMod: conMod,
        intMod: intMod,
        wisMod: wisMod,
        chaMod: chaMod,
        mods: mods,
        racePrevious: racePrevious,
        subracePrevious: subracePrevious,
        classChoicePrevious: classChoicePrevious,
        subclassPrevious: subclassPrevious,
        backgroundPrevious: backgroundPrevious,
        trait1Previous: trait1Previous,
        trait2Previous: trait2Previous,
        idealPrevious: idealPrevious,
        orderPrevious: orderPrevious,
        moralPrevious: moralPrevious,
        strengthPrevious: strengthPrevious,
        dexterityPrevious: dexterityPrevious,
        constitutionPrevious: constitutionPrevious,
        intelligencePrevious: intelligencePrevious,
        wisdomPrevious: wisdomPrevious,
        charismaPrevious: charismaPrevious,
        maxHPPrevious: maxHPPrevious,
        modsPrevious: modsPrevious,
        speedPrevious: speedPrevious,
        strModPrevious: strModPrevious,
        dexModPrevious: dexModPrevious,
        conModPrevious: conModPrevious,
        intModPrevious: intModPrevious,
        wisModPrevious: wisModPrevious,
        chaModPrevious: chaModPrevious,
        charactersCreated: charactersCreated
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function loadCharacter() {
    if (save !== undefined) {
        var saveinfo = JSON.parse(localStorage.getItem("save"));
        if (typeof saveinfo.race !== "undefined") race = saveinfo.race;
        if (typeof saveinfo.subrace !== "undefined") subrace = saveinfo.subrace;
        if (typeof saveinfo.classChoice !== "undefined") classChoice = saveinfo.classChoice;
        if (typeof saveinfo.subclass !== "undefined") subclass = saveinfo.subclass;
        if (typeof saveinfo.backgroundSelect !== "undefined") backgroundSelect = saveinfo.backgroundSelect;
        if (typeof saveinfo.trait1 !== "undefined") trait1 = saveinfo.trait1;
        if (typeof saveinfo.trait2 !== "undefined") trait2 = saveinfo.trait2;
        if (typeof saveinfo.ideal !== "undefined") ideal = saveinfo.ideal;
        if (typeof saveinfo.order !== "undefined") order = saveinfo.order;
        if (typeof saveinfo.moral !== "undefined") moral = saveinfo.moral;
        if (typeof saveinfo.strength !== "undefined") strength = saveinfo.strength;
        if (typeof saveinfo.dexterity !== "undefined") dexterity = saveinfo.dexterity;
        if (typeof saveinfo.constitution !== "undefined") constitution = saveinfo.constitution;
        if (typeof saveinfo.intelligence !== "undefined") intelligence = saveinfo.intelligence;
        if (typeof saveinfo.wisdom !== "undefined") wisdom = saveinfo.wisdom;
        if (typeof saveinfo.charisma !== "undefined") charisma = saveinfo.charisma;
        if (typeof saveinfo.maxHP !== "undefined") maxHP = saveinfo.maxHP;
        if (typeof saveinfo.speed !== "undefined") speed = saveinfo.speed;
        if (typeof saveinfo.mods !== "undefined") mods = saveinfo.mods;
        if (typeof saveinfo.strMod !== "undefined") strMod = saveinfo.strMod;
        if (typeof saveinfo.dexMod !== "undefined") dexMod = saveinfo.dexMod;
        if (typeof saveinfo.conMod !== "undefined") conMod = saveinfo.conMod;
        if (typeof saveinfo.intMod !== "undefined") intMod = saveinfo.intMod;
        if (typeof saveinfo.wisMod !== "undefined") wisMod = saveinfo.wisMod;
        if (typeof saveinfo.chaMod !== "undefined") chaMod = saveinfo.chaMod;
        if (typeof saveinfo.racePrevious !== "undefined") racePrevious = saveinfo.racePrevious;
        if (typeof saveinfo.subracePrevious !== "undefined") subracePrevious = saveinfo.subracePrevious;
        if (typeof saveinfo.classChoicePrevious !== "undefined") classChoicePrevious = saveinfo.classChoicePrevious;
        if (typeof saveinfo.subclassPrevious !== "undefined") subclassPrevious = saveinfo.subclassPrevious;
        if (typeof saveinfo.backgroundPrevious !== "undefined") backgroundPrevious = saveinfo.backgroundPrevious;
        if (typeof saveinfo.trait1Previous !== "undefined") trait1Previous = saveinfo.trait1Previous;
        if (typeof saveinfo.trait2Previous !== "undefined") trait2Previous = saveinfo.trait2Previous;
        if (typeof saveinfo.idealPrevious !== "undefined") idealPrevious = saveinfo.idealPrevious;
        if (typeof saveinfo.orderPrevious !== "undefined") orderPrevious = saveinfo.orderPrevious;
        if (typeof saveinfo.moralPrevious !== "undefined") moralPrevious = saveinfo.moralPrevious;
        if (typeof saveinfo.strengthPrevious !== "undefined") strengthPrevious = saveinfo.strengthPrevious;
        if (typeof saveinfo.dexterityPrevious !== "undefined") dexterityPrevious = saveinfo.dexterityPrevious;
        if (typeof saveinfo.constitutionPrevious !== "undefined") constitutionPrevious = saveinfo.constitutionPrevious;
        if (typeof saveinfo.intelligencePrevious !== "undefined") intelligencePrevious = saveinfo.intelligencePrevious;
        if (typeof saveinfo.wisdomPrevious !== "undefined") wisdomPrevious = saveinfo.wisdomPrevious;
        if (typeof saveinfo.charismaPrevious !== "undefined") charismaPrevious = saveinfo.charismaPrevious;
        if (typeof saveinfo.maxHPPrevious !== "undefined") maxHPPrevious = saveinfo.maxHPPrevious;
        if (typeof saveinfo.speedPrevious !== "undefined") speedPrevious = saveinfo.speedPrevious;
        if (typeof saveinfo.modsPrevious !== "undefined") modsPrevious = saveinfo.modsPrevious;
        if (typeof saveinfo.strModPrevious !== "undefined") strModPrevious = saveinfo.strModPrevious;
        if (typeof saveinfo.dexModPrevious !== "undefined") dexModPrevious = saveinfo.dexModPrevious;
        if (typeof saveinfo.conModPrevious !== "undefined") conModPrevious = saveinfo.conModPrevious;
        if (typeof saveinfo.intModPrevious !== "undefined") intModPrevious = saveinfo.intModPrevious;
        if (typeof saveinfo.wisModPrevious !== "undefined") wisModPrevious = saveinfo.wisModPrevious;
        if (typeof saveinfo.chaModPrevious !== "undefined") chaModPrevious = saveinfo.chaModPrevious;
        if (typeof saveinfo.charactersCreated !== "undefined") charactersCreated = saveinfo.charactersCreated;
        document.getElementById("consoleDescriptions").innerHTML = "Race: " + subrace + race +
                "</br> Class: " + subclass +
                "</br> Background: " + backgroundSelect +
                "</br> Personality Trait One: " + trait1 + "</br> Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal +
                "</br> Alignment: " + order + " " + moral;
        document.getElementById("consoleStatistics").innerHTML = "Strength: " + strength + " (" + mods[0] + ")</br> Dexterity: " + dexterity + " (" + mods[1] + ")</br> Constitution: " + constitution + " (" + mods[2] + ")</br> Intelligence: " + intelligence + " (" + mods[3] + ")</br> Wisdom: " + wisdom + " (" + mods[4] + ")</br> Charisma: " + charisma + " (" + mods[5] + ")" +
                "</br> Max HP: " + maxHP +
                "</br> Speed: " + speed;
    }
}

function deleteCharacter() {
    location.reload();
    localStorage.removeItem("save");
}
