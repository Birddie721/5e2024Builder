const { PDFDocument } = PDFLib

    async function fillForm() {
    	// Fetch the PDF with form fields
      const formUrl = 'https://raw.githubusercontent.com/birddie721/5e2024Builder/main/Character-Sheet.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)

      // Get the form containing all the fields
      const form = pdfDoc.getForm()

	let proficiencyBonus = 2;

      // Get all fields in the PDF by their names
      const nameField = form.getTextField('Name')
      const backgroundField = form.getTextField('Background')
      const classField = form.getTextField('Class')
      const speciesField = form.getTextField('Species')
      const subclassField = form.getTextField('Subclass')
	  const speciesTraits = form.getTextField('SPECIES TRAITS')
	  const classFeatures1 = form.getTextField('CLASS FEATURES 1')
	  const classFeatures2 = form.getTextField('CLASS FEATURES 2')
	  
      const levelField = form.getTextField('Level')
      const xpField = form.getTextField('XP Points')

      const acField = form.getTextField('Armor Class')
	  const hpField = form.getTextField('Max HP')
	  
      const proficiencyField = form.getTextField('PROF BONUS')
	  const passivePerceptionField = form.getTextField('PASSIVE PERCEPTION')
	  
      const strScoreField = form.getTextField('STR SCORE')
      const strModField = form.getTextField('STR MOD')

      const dexScoreField = form.getTextField('DEX SCORE')
      const dexModField = form.getTextField('DEX MOD')
	  
      const conScoreField = form.getTextField('CON SCORE')
      const conModField = form.getTextField('CON MOD')
	  
      const intScoreField = form.getTextField('INT SCORE')
      const intModField = form.getTextField('INT MOD')
	  
      const wisScoreField = form.getTextField('WIS SCORE')
      const wisModField = form.getTextField('WIS MOD')
	  
      const chaScoreField = form.getTextField('CHA SCORE')
      const chaModField = form.getTextField('CHA MOD')
	  
	  const initiativeField = form.getTextField('init')
      const speedField = form.getTextField('SPEED')
	  const sizeField = form.getTextField('SIZE')
	  
	  const strChk = form.getCheckBox("Check Box18")
	  const dexChk = form.getCheckBox("Check Box11")
	  const conChk = form.getCheckBox("Check Box7")
	  const intChk = form.getCheckBox("Check Box25")
	  const wisChk = form.getCheckBox("Check Box17")
	  const chaChk = form.getCheckBox("Check Box6")
	  
	  const strSaveField = form.getTextField("STR SAVE")
	  const dexSaveField = form.getTextField("DEX SAVE")
	  const conSaveField = form.getTextField("CON SAVE")
	  const intSaveField = form.getTextField("INT SAVE")
	  const wisSaveField = form.getTextField("Text Field71")
	  const chaSaveField = form.getTextField("CHA SAVE")
	  
	  const athleticsChk = form.getCheckBox("Check Box19")
	  const acrobaticsChk = form.getCheckBox("Check Box8")
	  const slightOfHandChk = form.getCheckBox("Check Box9")
	  const stealthChk = form.getCheckBox("Check Box10")
	  const arcanaChk = form.getCheckBox("Check Box24")
	  const historyChk = form.getCheckBox("Check Box20")
	  const investigationChk = form.getCheckBox("Check Box21")
	  const natureChk = form.getCheckBox("Check Box22")
	  const religionChk = form.getCheckBox("Check Box23")
	  const animalHandlingChk = form.getCheckBox("Check Box15")
	  const insightChk = form.getCheckBox("Check Box13")
	  const medicineChk = form.getCheckBox("Check Box12")
	  const perceptionChk = form.getCheckBox("Check Box14")
	  const survivalChk = form.getCheckBox("Check Box16")
	  const deceptionChk = form.getCheckBox("Check Box5")
	  const intimidationChk = form.getCheckBox("Check Box4")
	  const performanceChk = form.getCheckBox("Check Box3")
	  const persuasionChk = form.getCheckBox("Check Box2")
	  
	  const athleticsField = form.getTextField("ATHLETICS")
	  const acrobaticsField = form.getTextField("ACROBATICS")
	  const slightOfHandField = form.getTextField("SLEIGHT OF HAND")
	  const stealthField = form.getTextField("STEALTH")
	  const arcanaField = form.getTextField("ARCANA")
	  const historyField = form.getTextField("HISTORY")
	  const investigationField = form.getTextField("INVESTIGATION")
	  const natureField = form.getTextField("NATURE")
	  const religionField = form.getTextField("RELIGION")
	  const animalHandlingField = form.getTextField("ANIMAL HANDLING")
	  const insightField = form.getTextField("INSIGHT")
	  const medicineField = form.getTextField("MEDICINE")
	  const perceptionField = form.getTextField("PERCEPTION")
	  const survivalField = form.getTextField("SURVIVAL")
	  const deceptionField = form.getTextField("DECEPTION")
	  const intimidationField = form.getTextField("INTIMIDATE")
	  const performanceField = form.getTextField("PERFORMANCE")
	  const persuasionField = form.getTextField("PERSUASION")
	  
	  
	  const lightArmor = form.getCheckBox("Check Box33")
	  const mediumArmor = form.getCheckBox("Check Box34")
	  const heavyArmor = form.getCheckBox("Check Box35")
	  const shieldProf = form.getCheckBox("Check Box36")
	  
	  const weapon1Name = form.getTextField("NAME - WEAPON 1")
	  const weapon1Bonus = form.getTextField("BONUS/DC - WEAPON 1")
	  const weapon1Damage = form.getTextField("DAMAGE/TYPE - WEAPON 1")
	  const weapon1Notes = form.getTextField("NOTES - WEAPON 1")
	  
	  const weapon2Name = form.getTextField("NAME - WEAPON 2")
	  const weapon2Bonus = form.getTextField("BONUS/DC - WEAPON 2")
	  const weapon2Damage = form.getTextField("DAMAGE/TYPE - WEAPON 2")
	  const weapon2Notes = form.getTextField("NOTES - WEAPON 2")
	  
	  const weapon3Name = form.getTextField("NAME - WEAPON 3")
	  const weapon3Bonus = form.getTextField("BONUS/DC - WEAPON 3")
	  const weapon3Damage = form.getTextField("DAMAGE/TYPE - WEAPON 3")
	  const weapon3Notes = form.getTextField("NOTES - WEAPON 3")
	  
	  const weapon4Name = form.getTextField("NAME - WEAPON 4")
	  const weapon4Bonus = form.getTextField("BONUS/DC - WEAPON 4")
	  const weapon4Damage = form.getTextField("DAMAGE/TYPE - WEAPON 4")
	  const weapon4Notes = form.getTextField("NOTES - WEAPON 4")
	  
	  const weapon5Name = form.getTextField("NAME - WEAPON 5")
	  const weapon5Bonus = form.getTextField("BONUS/DC - WEAPON 5")
	  const weapon5Damage = form.getTextField("DAMAGE/TYPE - WEAPON 5")
	  const weapon5Notes = form.getTextField("NOTES - WEAPON 5")
	  
	  const weapon6Name = form.getTextField("NAME - WEAPON 6")
	  const weapon6Bonus = form.getTextField("BONUS/DC - WEAPON 6")
	  const weapon6Damage = form.getTextField("DAMAGE/TYPE - WEAPON 6")
	  const weapon6Notes = form.getTextField("NOTES - WEAPON 6")
	  
	  const hasShieldChk = form.getCheckBox("shield chk")
	  const shieldAC = 2;
	  
	  const spellcastingAbilityField = form.getTextField("SPELLCASTING ABILITY")
	  const spellcastingModifierField = form.getTextField("SPELLCASTING MOD")
	  const spellSaveDCField = form.getTextField("SPELL SAVE DC")
	  const spellAttackBonusField = form.getTextField("SPELL ATTACK BONUS")
	  
	  const CPField = form.getTextField("CP")
	  const SPField = form.getTextField("SP")
	  const EPField = form.getTextField("EP")
	  const GPField = form.getTextField("GP")
	  const PPField = form.getTextField("PP")
	  
	  const weaponProficienciesField = form.getTextField("WEAPON PROF")
	  const toolProficienciesField = form.getTextField("TOOL PROF")
	  
	  const featsField = form.getTextField("FEATS")
	  const equipmentField = form.getTextField("EQUIPMENT")
	  
	  let goldPieces = 0;

      // Fill in the basic info fields
	  nameField.setText(document.getElementById("playerName").value)
	  let background = document.getElementById("roleSelect").value;
	  backgroundField.setText(background);
	  let selectedClass = document.getElementById("class").value
	  classField.setText(selectedClass)
	  
	  let species = document.getElementById("race").value
	  const speciesList = ["Elf", "Goliath", "Tiefling", "Gnome"]
	  let subrace = document.getElementById("subrace").value
	  if (speciesList.includes(species)) {
		  speciesField.setText(subrace + " " + species)
	  }else {
		speciesField.setText(species)
	  }
	  
	  const fastList = ["Goliath"]
	  if (fastList.includes(species)) {
		  speedField.setText("35")
	  } else {
		  if (subrace == "Wood") {
			speedField.setText("35")
		  }else {
			speedField.setText("30")
		  }
	  }
	  
	  const smallList = ["Gnome", "Halfling"]
	  const otherList = ["Aasimar", "Human", "Tiefling"]
	  if (smallList.includes(species)) {
		  sizeField.setText("Small")
	  } else if (otherList.includes(species)) {
		  sizeField.setText("")
	  }else {
		  sizeField.setText("Medium")
	  }
	  
	  levelField.setText('1')
	  proficiencyField.setText('+' + proficiencyBonus)
	  
	  const classHP = {
		"Barbarian": 12,
		"Bard": 8,
		"Cleric": 8,
		"Druid": 8,
		"Fighter": 10,
		"Monk": 8,
		"Paladin": 10,
		"Ranger": 10,
		"Rogue": 8,
		"Sorcerer": 6,
		"Warlock": 8,
		"Wizard": 6
	  }
	  
	  
	  
	  
	  strScoreField.setText(document.getElementById("total1").innerText)
	  let strMod = document.getElementById("abilityMod1").innerText;
	  if (strMod >= 0) {
		  strModField.setText("+" + strMod)
	  } else {
		  strModField.setText(strMod)
	  }
	  
	  dexScoreField.setText(document.getElementById("total2").innerText)
	  let dexMod = document.getElementById("abilityMod2").innerText;
	  if (dexMod >= 0) {
		  dexModField.setText("+" + dexMod)
	  } else {
		  dexModField.setText(dexMod)
	  }
	  
	  conScoreField.setText(document.getElementById("total3").innerText)
	  let conMod = document.getElementById("abilityMod3").innerText;
	  if (conMod >= 0) {
		  conModField.setText("+" + conMod)
	  } else {
		  conModField.setText(conMod)
	  }
	  
	  intScoreField.setText(document.getElementById("total4").innerText)
	  let intMod = document.getElementById("abilityMod4").innerText;
	  if (intMod >= 0) {
		  intModField.setText("+" + intMod)
	  } else {
		  intModField.setText(intMod)
	  }
	  
	  wisScoreField.setText(document.getElementById("total5").innerText)
	  let wisMod = document.getElementById("abilityMod5").innerText;
	  if (wisMod >= 0) {
		  wisModField.setText("+" + wisMod)
	  } else {
		  wisModField.setText(wisMod)
	  }
	  
	  chaScoreField.setText(document.getElementById("total6").innerText)
	  let chaMod = document.getElementById("abilityMod6").innerText;
	  if (chaMod >= 0) {
		  chaModField.setText("+" + chaMod)
	  } else {
		  chaModField.setText(chaMod)
	  }
	  
	  if (dexMod === "-1") {
		  initiativeField.setText(dexMod)
	  } else {
		initiativeField.setText("+" + dexMod)
	  }
	  let modifiedHP = 0
	  let hp = classHP[selectedClass]
	  if (species === "Dwarf") {
		modifiedHP = parseInt(hp) + parseInt(conMod) + 1
	  } else {
		modifiedHP = parseInt(hp) + parseInt(conMod)
	  }
	  hpField.setText(modifiedHP.toString())
	  
	  const strSave = ["Barbarian", "Fighter", "Monk", "Ranger"]
	  const dexSave = ["Bard", "Monk", "Ranger", "Rogue"]
	  const conSave = ["Barbarian", "Fighter", "Sorcerer"]
	  const intSave = ["Druid", "Rogue", "Wizard"]
	  const wisSave = ["Cleric", "Druid", "Paladin", "Warlock", "Wizard"]
	  const chaSave = ["Bard", "Cleric", "Paladin", "Sorcerer", "Warlock"]
	  
	  if (strSave.includes(selectedClass)) {
		  strChk.check();
	  }
	  if (dexSave.includes(selectedClass)) {
		  dexChk.check();
	  }
	  if (conSave.includes(selectedClass)) {
		  conChk.check();
	  }
	  if (intSave.includes(selectedClass)) {
		  intChk.check();
	  }
	  if (wisSave.includes(selectedClass)) {
		  wisChk.check();
	  }
	  if (chaSave.includes(selectedClass)) {
		  chaChk.check();
	  }
	  
	  
	  
	  const lightArmorProficiency = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Ranger", "Rogue", "Warlock"]
	  const mediumArmorProficiency = ["Barbarian", "Cleric", "Fighter", "Paladin", "Ranger"]
	  const heavyArmorProficiency = ["Fighter", "Paladin"]
	  const hasShieldProficiency = ["Barbarian", "Cleric", "Druid", "Fighter", "Paladin", "Ranger"]
	  
	  if (lightArmorProficiency.includes(selectedClass)) {
		  lightArmor.check();
	  }
	  if (mediumArmorProficiency.includes(selectedClass)) {
		  mediumArmor.check();
	  }
	  if (heavyArmorProficiency.includes(selectedClass)) {
		  heavyArmor.check();
	  }
	  if (hasShieldProficiency.includes(selectedClass)) {
		  shieldProf.check();
	  }
	  
	  if (perceptionChk.isChecked()) {
		  let passivePerception = parseInt(wisMod) + parseInt(proficiencyBonus) + 10
		  passivePerceptionField.setText(passivePerception.toString())
	  } else {
		  let passivePerception = parseInt(wisMod) + 10
		  passivePerceptionField.setText(passivePerception.toString())
	  }
	  
	  let aasimarTraits = [
		" * Celestial Resistance - Resistance to Necrotic damage and Radiant damage.",
		" * Darkvision - Range 60ft",
		" * Healing Hands - Magic Action, range touch, creature heals a number of d4s equal to your proficiency modifier. Once/Long Rest",
		" * Light Bearer - Light Cantrip"
	  ];
	  
	  let dragonbornTraits = [
		" * Draconic Ancestry - Based on your dragon color, you gain affinity with an element which impacts your Breath Weapon and Damage Resistance.",
		" * Breath Weapon - During attack action, can replace one attack with a 15-foor Cone or 30-foot Line 5-feet wide. Each creature hit makes Dex saving throw (DC 8 + Con mod + proficiency bonus). Damage type determined by Draconic Ancestry. Takes 1d10 -> 2d10 (lvl5) -> 3d10 (lvl 11) - > 4d10 (lvl 17). Can use number of times equal to your proficiency bonus/long rest.",
		" * Damage Resistance - You have resistance to the damage type determined by your Draconic Ancestry trait.",
		" * Darkvision - Range 60ft",
		" * Draconic Flight - As a bonus action, gain Fly Speed equal to your speed that lasts 10 minutes. Can use once per long rest."
	  ]
	  
	  let dwarfTraits = [
		" * Darkvision - Range 120ft",
		" * Dwarven Resilience - Resistance to Poison damage. Advantage on saving throws to avoid or end the Poisoned condition.",
		" * Dwarven Toughness - +1 Max HP per level.",
		" * Stonecunning - Bonus Action, gain Tremorsense with a range of 60ft for 10 minutes. Can only be used on stone surfaces. Can use a number of times equal to Proficiency Bonus per Long Rest."
	  ]
	  
	  let elfTraits = [
		" * Fey Ancestry - Advantage on Saving Throws to avoid or end the Charmed condition.",
		" * Keen Senses - Proficiency in the Insight, perceptopn, or Survival skill.",
		" * Trance - You don't need to skeep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness."
	  ]
	  let drowTraits = [
		" * Darkvision - Range 120ft",
		" * Drow Lineage - You know the Dancing Lights cantrip. At 3rd level you know Faerie Fire, at 5th level you know Darkness."
	  ]
	  let highElfTraits = [
		" * Darkvision - Range 60ft",
		" * High Elf Lineage - You know one Wizard cantrip and can switch it when you finish a long rest. At 3rd level you know Detect Magic, at 5th level you know Misty Step."
	  ]
	  let woodElfTraits = [
		" * Darkvision - Range  60ft",
		" * Wood Elf Lineage - Your speed increases to 35 fet. You know the Druidcraft cantrip. At 3rd level you know Longstrider, at 5th level you know Pass without Trace." 
	  ]
	  
	  let gnomeTraits = [
		" * Darkvision - Range 60ft",
		" * Gnomish Cunning - Advantage on Intelligence, Wisdom, and Charisma saving throws."
	  ]
	  let forestGnomeTraits = [
		" * Gnomish Lineage - You know the Minor Illusion cantrip. You always have the Speak with Animals spell prepared anc can cast it without a spell slot a number of times equal to your Proficiency Bonus. You regain all expended uses on a Long Rest. You can also use any spell slots you have to cast the spell."
	  ]
	  let rockGnomeTraits = [
		" * Gnomish Lineage - You know the Mending and Prestigitation cantrips. You can also spend 10 minutes casting Prestigitation to create small objects."
	  ]
	  
	  let goliathTraits = [
		" * Large Form - Starting at Level 5, you can change your size to Large as a bonus action for 10 minutes or until you end it. For that duration, you have Advantage on Strength checks, and your Speed increases by 10ft. Once per Long Rest.",
		" * Powerful Build - You have Advantage on any saving throw you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.",
		" * Giant Ancestry - You gain a supernatural boon from your ancestry. You can use the benefit a number of times equal to your Proficiency Bonus and regain all expended uses on a Long Rest."
	  ]
	  let cloudTraits = [
		" * Cloud's Jaunt - As a bonus action, you magically teleport up to 30 feet to an unoccupied space you can see."
	  ]
	  let fireTraits = [
		" * Fire's Burn - When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target."
	  ]
	  let frostTraits = [
		" * Frost's Chill - When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10ft until the start of your next turn."
	  ]
	  let hillTraits = [
		" * Hill's Tumble - When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition."
	  ]
	  let stoneTraits = [
		" * Stone's Endurance - When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total."
	  ]
	  let stormTraits = [
		" * Storm's Thunder - When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature."
	  ]
	  
	  let halflingTraits = [
		" * Brave - You have advantage on saving throws you make to avoid or end the Frightened condition.",
		" * Halfling Nimbleness - You can move through the space of any creature that is a size larger than you, but you can't stop in the same space.",
		" * Luck - When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.",
		" * Naturally Stealthy - You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
	  ]
	  
	  let humanTraits = [
		" * Resourceful - You gain Heroic Inspiration whenever you finish a Long Rest.",
		" * Skillful - You gain proficiency in one skill of your choice.",
		" * Versatile - You gain an Origin feat of your choice."
	  ]
	  
	  let orcTraits = [
		" * Adrenaline Rush - You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus and regain all uses on a Short or Long Rest.",
		" * Darkvision - Range 120ft",
		" * Relentless Endurance - When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once per Long Rest."
	  ]
	  
	  let tieflingTraits = [
		" * Darkvision - Range 60ft",
		" * Otherworldly Presence - You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiending Legacy trait.",
		" * Fiendish Legacy - At levels 3 and 5 you know a spell depending on your chosen Fiendish Legacy. You always have that spell prepared. You can cast it once without a spell slot per Long Rest. You can also cast it with a spell slot. Intelligence, Wisdom, or Charisma is your spellcasting ability for spells you cast with this trait."
	  ]
	  let abyssalTraits = [
		" * Abyssal - You know the Poison Spray cantrip. You have resistance to Poison damage. At 3rd level you know Ray of Sickness. At 5th level you know Hold person."
	  ]
	  let chthonicTraits = [
		" * Chthonic - You know the Chill Touch cantrip. You have resistance to Necrotic damage. At 3rd level you know False Life. At 5th level you know Ray of Enfeeblement."
	  ]
	  let infernalTraits = [
		" * Infernal - You know the Fire Bolt cantrip. You have resistance to Fire damage. At 3rd level you know Hellish Rebuke. At 5th level you know Darkness."
	  ]
	  
	  switch (species){
			case "Aasimar":
				speciesTraits.setText(aasimarTraits.join('\n'));
				break;
			
			case "Dragonborn":
				speciesTraits.setText(dragonbornTraits.join('\n'));
				break;
			case "Dwarf":
				speciesTraits.setText(dwarfTraits.join('\n'));
				break;
			case "Elf":
				switch(subrace) {
					case "High":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + highElfTraits.join('\n'));
						break;
					case "Wood":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + woodElfTraits.join('\n'));
						break;
					case "Dark":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + drowTraits.join('\n'));
						break;
				}
				break;
			case "Gnome":
				switch(subrace){
					case "Forest":
						speciesTraits.setText(gnomeTraits.join('\n') + '\n' + forestGnomeTraits.join('\n'));
						break;
					case "Rock":
						speciesTraits.setText(gnomeTraits.join('\n') + '\n' + rockGnomeTraits.join('\n'));
						break;
				}
				break;
			case "Goliath":
				switch (subrace) {
					case "Cloud Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + cloudTraits.join('\n'));
						break;
					case "Fire Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + fireTraits.join('\n'));
						break;
					case "Frost Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + frostTraits.join('\n'));
						break;
					case "Hill Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + hillTraits.join('\n'));
						break;
					case "Stone Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + stoneTraits.join('\n'));
						break;
					case "Storm Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + stormTraits.join('\n'));
						break;
				}
				break;
			case "Halfling":
				speciesTraits.setText(halflingTraits.join('\n'));
				break;
			case "Human":
				speciesTraits.setText(humanTraits.join('\n'));
				break;
			case "Orc":
				speciesTraits.setText(orcTraits.join('\n'));
				break;
			case "Tiefling":
				switch(subrace) {
					case "Abyssal":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + abyssalTraits.join('\n'));
						break;
					case "Chthonic":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + chthonicTraits.join('\n'));
						break;
					case "Infernal":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + infernalTraits.join('\n'));
						break;
				}
				break;
	  }
	  
	  
	  let barbarianTraits1 = [
		" * Rage - You can enter a Rage as a Bonus Action if you are not wearing Heavy armor. You can enter your Rage the number of times shown for your Barbarian level. You regain one expended use when you finish a Short Rest and all uses when you finish a Long Rest. While in your Rage, you gain Resistance to Bludgeoning, Piercing, and Slashing damage and gain Advantage on Strength checks and Strength saving throws. During your rage, when you make an attack using Strength and deal damage to the target, you deal bonus damage shown for your Barbarian level. You cannot maintain Concentration and cannot cast spells during a Rage. The Rage lasts for one turn, but can be extended by one turn if you make an attack roll against an enemy, force an enemy to make a saving throw, or take a Bonus Action to extend your rage. You can maintain a Rage for a maximmum of 10 minutes."
	  ]
	  let barbarianTraits2 = [
		" * Unarmored Defense - While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you Long Rest you can change one of those weapon choices."
	  ]
	  
	  let bardTraits1 = [
		" * Bardic Inspiration - As a Bonus Action you can inspire another creature within 60ft who can hear you. This creature gains one of your Bardic Inspiration dice. A creature can only have one Bardic Inspiration die at a time. This creature can, in the next hour, roll the Bardic Inspiration die and add the number rolled to a d20 test. The Bardic Inspiration die is expended when it's rolled. This feature can be used a number of times equal to your Charisma modifier and all uses are regained on a Long Rest."
	  ]
	  let bardTraits2 = [
		" * Spellcasting - You know two cantrips from the Bard spell list and can replace one cantrip whenever you gain a Bard level. The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots."
	  ]
	  
	  let clericTraits1 = [
		" * Divine Order - You have dedicated yourself to one of the following sacred roles of your choice:",
		"   - Protector: You gain proficiency with martial weapons and training with Heavy armor.",
		"   - Thaumaturge: You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus use of your Arcana and Religion checks equal to your Wisdom modifier."
	  ]
	  let clericTraits2 = [
		" * Spellcasting - You know three cantrips from the Cleric spell list and can replace one cantrip whenever you gain a Cleric level. The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots."
	  ]
	  
	  let druidTraits1 = [
		" * Druidic - You know Druidic, the secret language of the Druids. You also always have the Speak with Animals spell prepared.\n",
		" * Primal Order - You have dedicated yourself to one of the following savred roles of your choice:",
		"   - Magician: You know one extra cantrip. You gain a bonus to your Arcana and Nature checks equal to your Wisdom modifier.",
		"   - Warden: You gain proficiency with Martial weapons and training with Medium armor."
	  ]
	  let druidTraits2 = [
		" * Spellcasting - You know two cantrips from the Druid spell list and can replace one cantrip whenever you gain a Druid level. The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Druid spells for which you have spell slots."
	  ]
	  
	  let fighterTraits1 = [
		" * Fighting Style - You gain a Fighting Style feat. Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you Long Rest you can change one of those weapon choices."
	  ]
	  let fighterTraits2 = [
		" * Second Wind - As a Bonus Action, you can regain Hit Points equal to 1d10 plus your Fighter Level. You can use this feature twice. You regain one expended use when you finish a Short Rest, and regain all expended uses when you finish a Long Rest."
	  ]
	  
	  let monkTraits1 = [
		" * Martial Arts - You gain the following benefits when you are unarmed or wielding only Monk weapons, and not wearing armor or wielding a Shield:",
		" - You can make an Unarmed Strike as a Bonus Action",
		" - You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons.",
		" - You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shive option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC."
	  ]
	  let monkTraits2 = [
		" * Unarmored Defense - While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers.",
		"                                                                                                                                                                                                                                                                                                                                                   "
	  ]
	  
	  let paladinTraits1 = [
		" * Lay On Hands - You have a pool of healing power that replenishes when you finsh a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level. As a Bonus Action, you can touch a creature (yourself included) and restore a number of Hit Points to that creature up to the maximum amount remaining in the pool. You can also expend 5 Hit Points from the pool to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose."
	  ]
	  let paladinTraits2 = [
		" * Spellcasting - The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Paladin spell list. Whenever you Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots."
	  ]
	  
	  let rangerTraits1 = [
		" * Favored Enemy - You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and regain all expended uses when you finish a Long Rest.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose."
	  ]
	  let rangerTraits2 = [
		" * Spellcasting - The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Ranger spell list. Whenever you Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots."
	  ]
	  
	  let rogueTraits1 = [
		" * Expertise - You gain Expertise in two of your skill proficiencies of your choice.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose."
	  ]
	  let rogueTraits2 = [
		" * Sneak Attack - Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or Ranged weapon. You don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.\n",
		" * Thieves' Cant - You know Thieves' Cant and one other language of your choice."
	  ]
	  
	  let sorcererTraits1 = [
		" * Spellcasting - You know four cantrips from the Sorcerer spell list and can replace one cantrip whenever you gain a Sorcerer level. The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Sorcerer spell list. Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots."
	  ]
	  let sorcererTraits2 = [
		" * Innate Sorcery - On a Bonus Action, for one minute, you gain Advantage on the attack rolls of Sorcerer spells you cast and the spell save DC of your Sorcerer spells increases by 1. You can use this feature twice and regain all expended uses on a Long Rest."
	  ]
	  
	  let warlockTraits1 = [
		" * Eldrich Invocations - You gain one Eldrich invocation of your choice. Whenever you gain a Warlock level, you can replace onw of your invocations with another one for which you qualify. When you gain certain Warlock levels, you gain more invocations of your choice.",
		"                                                                                                                    "
	  ]
	  let warlockTraits2 = [
		" * Pact Magic - You know two cantrips from the Warlock spell list and can replace one cantrip whenever you gain a Warlock level. The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1-5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a Short or Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Warlock spell list. Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level."
	  ]
	  
	  let wizardTraits1 = [
		" * Spellcasting - You know three cantrips from the Wizard spell list and can replace one cantrip whenever you finish a Long Rest. As a Wizard, you have a spellbook. The book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. Whenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from your spellbook. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook."
	  ]
	  let wizardTraits2 = [
		" * Ritual Adept - You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way.\n",
		" * Arcane Recovery - When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level rounded up, and none of the slots can be level 6 or higher. Once you use this feature, you can't do so again until you finish a Long Rest."
	  ]
	  
	  
	  switch(selectedClass) {
			case "Barbarian":
				classFeatures1.setText(barbarianTraits1.join('\n'));
				classFeatures2.setText(barbarianTraits2.join('\n'));
				break;
			case "Bard":
				classFeatures1.setText(bardTraits1.join('\n'));
				classFeatures2.setText(bardTraits2.join('\n'));
				break;
			case "Cleric":
				classFeatures1.setText(clericTraits1.join('\n'));
				classFeatures2.setText(clericTraits2.join('\n'));
				break;
			case "Druid":
				classFeatures1.setText(druidTraits1.join('\n'));
				classFeatures2.setText(druidTraits2.join('\n'));
				break;
			case "Fighter":
				classFeatures1.setText(fighterTraits1.join('\n'));
				classFeatures2.setText(fighterTraits2.join('\n'));
				break;
			case "Monk":
				classFeatures1.setText(monkTraits1.join('\n'));
				classFeatures2.setText(monkTraits2.join('\n'));
				break;
			case "Paladin":
				classFeatures1.setText(paladinTraits1.join('\n'));
				classFeatures2.setText(paladinTraits2.join('\n'));
				break;
			case "Ranger":
				classFeatures1.setText(rangerTraits1.join('\n'));
				classFeatures2.setText(rangerTraits2.join('\n'));
				break;
			case "Rogue":
				classFeatures1.setText(rogueTraits1.join('\n'));
				classFeatures2.setText(rogueTraits2.join('\n'));
				break;
			case "Sorcerer":
				classFeatures1.setText(sorcererTraits1.join('\n'));
				classFeatures2.setText(sorcererTraits2.join('\n'));
				break;
			case "Warlock":
				classFeatures1.setText(warlockTraits1.join('\n'));
				classFeatures2.setText(warlockTraits2.join('\n'));
				break;
			case "Wizard":
				classFeatures1.setText(wizardTraits1.join('\n'));
				classFeatures2.setText(wizardTraits2.join('\n'));
				break;
	  }
	  
	  
	  
	  
	  let intSpellcasting = ["Wizard"]
	  let wisSpellcasting = ["Cleric", "Druid", "Ranger"]
	  let chaSpellcasting = ["Bard", "Paladin", "Sorcerer", "Warlock"]
	  let baseSpellSaveDC = 8
	  
	  if (intSpellcasting.includes(selectedClass)) {
		  spellcastingAbilityField.setText("Intelligence");
		  let spellcastingAbilityModifier = intMod
		  spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
		  let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellSaveDCField.setText(spellSaveDC.toString())
		  let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellAttackBonusField.setText("+" + spellAttackMod.toString())
	  }
	  if (wisSpellcasting.includes(selectedClass)) {
		  spellcastingAbilityField.setText("Wisdom");
		  let spellcastingAbilityModifier = wisMod
		  spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
		  let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellSaveDCField.setText(spellSaveDC.toString())
		  let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellAttackBonusField.setText("+" + spellAttackMod.toString())
	  }
	  if (chaSpellcasting.includes(selectedClass)) {
		  spellcastingAbilityField.setText("Charisma");
		  let spellcastingAbilityModifier = chaMod
		  spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
		  let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellSaveDCField.setText(spellSaveDC.toString())
		  let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
		  spellAttackBonusField.setText("+" + spellAttackMod.toString())
	  }
	  
	  
	  let strengthToHit = (parseInt(strMod) + parseInt(proficiencyBonus)).toString()
	  let dexterityToHit = (parseInt(dexMod) + parseInt(proficiencyBonus)).toString()
	  let finesse = false
	  let hasShield = false
	  
	  if (parseInt(dexMod) >= parseInt(strMod)){
		  finesse = true
	  } 
	  
	  let ac = 10;
	  
	  let classEquipment = ""
	  let classToolProficiencies = ""
	  let hasClassToolProficiencies = false
	  switch(selectedClass) {
			case "Barbarian":
				goldPieces = 15;
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				weapon1Name.setText("Greataxe")
				weapon1Bonus.setText("+" + strengthToHit)
				weapon1Damage.setText("1d12 + " + strMod + " S")
				weapon1Notes.setText("Heavy, Two-Handed")
				weapon2Name.setText("Handaxe")
				weapon2Bonus.setText("+" + strengthToHit)
				weapon2Damage.setText("1d6 + " + strMod + " S")
				weapon2Notes.setText("Light, Thrown (Range 20/60)")
				ac = ac + parseInt(dexMod) + parseInt(conMod)
				classEquipment = "Greataxe, 4 Handaxes, Explorer's Pack"
				break;
			case "Bard":
				goldPieces = 19;
				weaponProficienciesField.setText("Simple weapons\n\n")
				if (finesse) {
					weapon1Name.setText("Dagger")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d4 +" + dexMod + " P")
					weapon1Notes.setText("Finesse, Light, Thrown (Range 20/60")
				} else{
					weapon1Name.setText("Dagger")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d4 +" + strMod + " P")
					weapon1Notes.setText("Finesse, Light, Thrown (Range 20/60")
				}
				ac = ac + parseInt(dexMod) + 1
				classEquipment = "Leather Armor, 2 Daggers, Musical Instrument, Entertainer's Pack"
				hasClassToolProficiencies = true
				classToolProficiencies = "3 Musical Instruments"
				break;
			case "Cleric":
				goldPieces = 7;
				weaponProficienciesField.setText("Simple weapons\n\n")
				hasShield = true
				weapon1Name.setText("Mace")
				weapon1Bonus.setText("+" + strengthToHit)
				weapon1Damage.setText("1d6 +" + strMod + " B")
				weapon1Notes.setText("")
				let clerDexMod = parseInt(dexMod)
				if (clerDexMod > 2){
					clerDexMod = 2
				}
				ac = ac + clerDexMod + 3 + 2
				classEquipment = "Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack"
				break;
			case "Druid":
				goldPieces = 9;
				weaponProficienciesField.setText("Simple weapons\n\n")
				hasShield = true
				weapon1Name.setText("Quarterstaff")
				weapon1Bonus.setText("+" + strengthToHit)
				weapon1Damage.setText("1d6 +" + strMod + " B")
				weapon1Notes.setText("Versatile (1d8)")
				weapon2Name.setText("Sickle")
				weapon2Bonus.setText("+" + strengthToHit)
				weapon2Damage.setText("1d4 + " + strMod + " S")
				weapon2Notes.setText("Light")
				ac = ac + parseInt(dexMod) + 1
				classEquipment = "Leather Armor, Shield, Sickle, Druidic Focus (Quarterstaff), Explorer's Pack, Herbalism Kit"
				hasClassToolProficiencies = true
				classToolProficiencies = "Herbalism Kit"
				break;
			case "Fighter":
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				if (!finesse) {
					goldPieces = 4;
					weapon1Name.setText("Greatsword")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("2d6 + " + strMod + " S")
					weapon1Notes.setText("Heavy, Two-Handed")
					weapon2Name.setText("Flail")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d8 + " + strMod + " B")
					weapon2Notes.setText("")
					weapon3Name.setText("Javelin")
					weapon3Bonus.setText("+" + strengthToHit)
					weapon3Damage.setText("1d6 + " + strMod + " P")
					weapon3Notes.setText("Thrown (Range 30/120)")
					classEquipment = "Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack"
					ac = 16
				} else {
					goldPieces = 11;
					weapon1Name.setText("Longbow")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d8 + " + dexMod + " P")
					weapon1Notes.setText("Ammunition (Range 150/600; Arrow), Heavy, Two-Handed")
					weapon2Name.setText("Shortsword")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d6 + " + dexMod + " P")
					weapon2Notes.setText("Finesse, Light")
					weapon3Name.setText("Scimitar")
					weapon3Bonus.setText("+" + dexterityToHit)
					weapon3Damage.setText("1d6 + " + dexMod + " S")
					weapon3Notes.setText("Finesse, Light")
					classEquipment = "Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack"
					ac = ac + parseInt(dexMod) + 2
				}
				break;
			case "Monk":
				goldPieces = 11;
				weaponProficienciesField.setText("Simple weapons and Martial weapons that have the Light property")
				if (finesse) {
					weapon1Name.setText("Unarmed Strike")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d6 +" + dexMod + " B")
					weapon1Notes.setText("")
					weapon2Name.setText("Spear")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d6 +" + dexMod + " P")
					weapon2Notes.setText("Thrown (Range 20/60), Versatile (1d8)")
					weapon3Name.setText("Dagger")
					weapon3Bonus.setText("+" + dexterityToHit)
					weapon3Damage.setText("1d6 +" + dexMod + " P")
					weapon3Notes.setText("Finesse, Light, Thrown (Range 20/60)")
				} else{
					weapon1Name.setText("Unarmed Strike")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 +" + strMod + " B")
					weapon1Notes.setText("")
					weapon2Name.setText("Spear")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d6 +" + strMod + " B")
					weapon2Notes.setText("Thrown (Range 20/60), Versatile (1d8)")
					weapon3Name.setText("Dagger")
					weapon3Bonus.setText("+" + strengthToHit)
					weapon3Damage.setText("1d6 +" + strMod + " B")
					weapon3Notes.setText("Finesse, Light, Thrown (Range 20/60)")
				}
				ac = ac + parseInt(dexMod) + parseInt(wisMod)
				classEquipment = "Spear, 5 Daggers, Explorer's Pack"
				break;
			case "Paladin":
				goldPieces = 9;
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				hasShield = true
				weapon1Name.setText("Longsword")
				weapon1Bonus.setText("+" + strengthToHit)
				weapon1Damage.setText("1d8 +" + strMod + " S")
				weapon1Notes.setText("Versatile (1d10)")
				weapon2Name.setText("Javelin")
				weapon2Bonus.setText("+" + strengthToHit)
				weapon2Damage.setText("1d6 + " + strMod + " P")
				weapon2Notes.setText("Thrown (Range 30/120)")
				ac = 16 + 2
				classEquipment = "Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest's Pack"
				break;
			case "Ranger":
				goldPieces = 7;
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				if (finesse) {
					weapon1Name.setText("Longbow")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d8 + " + dexMod + " P")
					weapon1Notes.setText("Ammunition (Range 150/600; Arrow), Heavy, Two-Handed")
					weapon2Name.setText("Shortsword")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d6 + " + dexMod + " P")
					weapon2Notes.setText("Finesse, Light")
					weapon3Name.setText("Scimitar")
					weapon3Bonus.setText("+" + dexterityToHit)
					weapon3Damage.setText("1d6 + " + dexMod + " S")
					weapon3Notes.setText("Finesse, Light")
				} else {
					weapon1Name.setText("Longbow")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d8 + " + dexMod + " P")
					weapon1Notes.setText("Ammunition (Range 150/600; Arrow), Heavy, Two-Handed")
					weapon2Name.setText("Shortsword")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d6 + " + strMod + " P")
					weapon2Notes.setText("Finesse, Light")
					weapon3Name.setText("Scimitar")
					weapon3Bonus.setText("+" + strengthToHit)
					weapon3Damage.setText("1d6 + " + strMod + " S")
					weapon3Notes.setText("Finesse, Light")
				}
				ac = ac + parseInt(dexMod) + 2
				classEquipment = "Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer's Pack"
				break;
			case "Rogue":
				goldPieces = 8;
				weaponProficienciesField.setText("Simple weapons and Martial weapons that have the Finesse or Light property")
				if (finesse) {
					weapon1Name.setText("Shortsword")
					weapon1Bonus.setText("+" + dexterityToHit)
					weapon1Damage.setText("1d6 + " + dexMod + " P")
					weapon1Notes.setText("Finesse, Light")
					weapon2Name.setText("Shortbow")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d6 + " + dexMod + " P")
					weapon2Notes.setText("Ammunition (Range 80/320; Arrow), Two-Handed")
					weapon3Name.setText("Dagger")
					weapon3Bonus.setText("+" + dexterityToHit)
					weapon3Damage.setText("1d4 +" + dexMod + " P")
					weapon3Notes.setText("Finesse, Light, Thrown (Range 20/60")
				} else {
					weapon1Name.setText("Shortsword")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 + " + strMod + " P")
					weapon1Notes.setText("Finesse, Light")
					weapon2Name.setText("Shortbow")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d6 + " + dexMod + " P")
					weapon2Notes.setText("Ammunition (Range 80/320; Arrow), Two-Handed")
					weapon3Name.setText("Dagger")
					weapon3Bonus.setText("+" + strengthToHit)
					weapon3Damage.setText("1d4 +" + strMod + " P")
					weapon3Notes.setText("Finesse, Light, Thrown (Range 20/60")
				}
				ac = ac + parseInt(dexMod) + 1
				classEquipment = "Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack"
				hasClassToolProficiencies = true
				classToolProficiencies = "Thieves' Tools"
				break;
			case "Sorcerer":
				goldPieces = 28;
				weaponProficienciesField.setText("Simple weapons\n\n")
				if (finesse) {
					weapon1Name.setText("Spear")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 + " + strMod + " P")
					weapon1Notes.setText("Thrown (Range 20/60), Versatile (1d8)")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d4 +" + dexMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				} else {
					weapon1Name.setText("Spear")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 + " + strMod + " P")
					weapon1Notes.setText("Thrown (Range 20/60), Versatile (1d8)")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d4 +" + strMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				}
				ac = ac + parseInt(dexMod)
				classEquipment = "Spear, 2 Daggers, Arcane Focus (crystal), Dungeoneer's Pack"
				break;
			case "Warlock":
				goldPieces = 15;
				weaponProficienciesField.setText("Simple weapons\n\n")
				if (finesse) {
					weapon1Name.setText("Sickle")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d4 + " + strMod + " S")
					weapon1Notes.setText("Light")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d4 +" + dexMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				} else {
					weapon1Name.setText("Sickle")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d4 + " + strMod + " S")
					weapon1Notes.setText("Light")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d4 +" + strMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				}
				ac = ac + parseInt(dexMod) + 1
				classEquipment = "Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar's Pack"
				break;
			case "Wizard":
				goldPieces = 5;
				weaponProficienciesField.setText("Simple weapons\n\n")
				if (finesse) {
					weapon1Name.setText("Quarterstaff")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 + " + strMod + " B")
					weapon1Notes.setText("Versatile (1d8)")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + dexterityToHit)
					weapon2Damage.setText("1d4 +" + dexMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				} else {
					weapon1Name.setText("Quarterstaff")
					weapon1Bonus.setText("+" + strengthToHit)
					weapon1Damage.setText("1d6 + " + strMod + " B")
					weapon1Notes.setText("Versatile (1d8)")
					weapon2Name.setText("Dagger")
					weapon2Bonus.setText("+" + strengthToHit)
					weapon2Damage.setText("1d4 +" + strMod + " P")
					weapon2Notes.setText("Finesse, Light, Thrown (Range 20/60")
				}
				ac = ac + parseInt(dexMod)
				classEquipment = "2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack"
				break;
	  }
	  acField.setText(ac.toString())
	  
	  if (hasShield) {
		  hasShieldChk.check()
	  }
	  let backgroundEquipment = ""
	  switch(background){
			case "Acolyte":
				insightChk.check();
				religionChk.check();
				goldPieces = goldPieces + 8;
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Magic Initiate (Cleric):\n - You learn two cantrips of your choice from the Cleric spell list.\n - Choose a level 1 spell from the Cleric spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Cleric spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.")
				backgroundEquipment = "Calligrapher's Supplies, Book (prayers), Holy Symbol, Parchment (10 sheets), Robe"
				break;
			case "Artisan":
				investigationChk.check();
				persuasionChk.check();
				goldPieces = goldPieces + 32;
				toolProficienciesField.setText("Artisan's Tools\n")
				featsField.setText("Crafter:\n - You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.\n - Whenever you buy a nonmagical item, you receive a 20 percent discount on it.\n - When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.")
				backgroundEquipment = "Artisan's Tools, 2 Pouches, Traveler's Clothes"
				break;
			case "Charlatan":
				deceptionChk.check();
				slightOfHandChk.check();
				goldPieces = goldPieces + 15;
				toolProficienciesField.setText("Forgery Kit\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n")
				backgroundEquipment = "Forgery Kit, Costume, Fine Clothes"
				break;
			case "Criminal":
				slightOfHandChk.check();
				stealthChk.check();
				goldPieces = goldPieces + 16;
				toolProficienciesField.setText("Thieves' Tools\n")
				featsField.setText("Alert:\n - When you roll Initiative, you can add your Proficiency Bonus to the roll.\n - Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one  willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.")
				initiativeField.setText((parseInt(dexMod) + proficiencyBonus).toString())
				backgroundEquipment = "2 Daggers, Thieves' Tools, Crowbar, 2 Pouches, Traveler's Clothes"
				break;
			case "Entertainer":
				acrobaticsChk.check();
				performanceChk.check();
				goldPieces = goldPieces + 11;
				toolProficienciesField.setText("Musical Instrument\n")
				featsField.setText("Musician:\n - You gain proficiency with three Musical Instruments of your choice.\n - After you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear this song. The number of allies you can affect in this way equals your Proficiency Bonus.")
				backgroundEquipment = "Musical Instrument, 2 Costumes, Mirror, Perfume, Traveler's Clothes"
				break;
			case "Farmer":
				animalHandlingChk.check();
				natureChk.check();
				goldPieces = goldPieces + 30;
				toolProficienciesField.setText("Carpenter's Tools\n")
				featsField.setText("Tough:\n - Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maxumum increases by an additional 2 Hit Points.\n\n\n")
				modifiedHP = modifiedHP + 2;
				hpField.setText(modifiedHP.toString())
				backgroundEquipment = "Sickle, Carpenter's Tools, Healer's Kit, Iron Pot, Shovel, Traveler's Clothes"
				break;
			case "Guard":
				athleticsChk.check();
				perceptionChk.check();
				goldPieces = goldPieces + 12;
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Alert:\n - When you roll Initiative, you can add your Proficiency Bonus to the roll.\n - Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one  willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.")
				initiativeField.setText(("+" + parseInt(dexMod) + proficiencyBonus).toString())
				backgroundEquipment = "Spear, Light Crossbow, 20 Bolts, Gaming Set, Hooded Lantern, Manacles, Quiver, Traveler's Clothes"
				break;
			case "Guide":
				stealthChk.check();
				survivalChk.check();
				goldPieces = goldPieces + 3;
				toolProficienciesField.setText("Cartographer's Tools\n")
				featsField.setText("Magic Initiate (Druid):\n - You learn two cantrips of your choice from the Druid spell list.\n - Choose a level 1 spell from the Druid spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Druid spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.")
				backgroundEquipment = "Shortbow, 20 Arrows, Cartographer's Tools, Bedroll, Quiver, Tent, Traveler's Clothes"
				break;
			case "Hermit":
				medicineChk.check();
				religionChk.check();
				goldPieces = goldPieces + 16;
				toolProficienciesField.setText("Herbalism Kit\n")
				featsField.setText("Healer:\n - If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.\n - Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.")
				backgroundEquipment = "Quarterstaff, Herbalism Mit, Bedroll, Book (philosophy), Lamp, Oil (3 flasks), Traveler's Clothes"
				break;
			case "Merchant":
				animalHandlingChk.check();
				persuasionChk.check();
				goldPieces = goldPieces + 22;
				toolProficienciesField.setText("Navigator's Tools\n")
				featsField.setText("Lucky:\n - You have a number of Luck Points equal to your proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.\n - When you roll a d20 for a d20 test, you can spend 1 Luck Point to give yourself Advantage on the roll.\n - When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.")
				backgroundEquipment = "Navigator's Tools, 2 Pouches, Traveler's Clothes"
				break;
			case "Noble":
				historyChk.check();
				persuasionChk.check();
				goldPieces = goldPieces + 29;
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n")
				backgroundEquipment = "Gaming Set, Fine Clothes, Perfume"
				break;
			case "Sage":
				arcanaChk.check();
				historyChk.check();
				goldPieces = goldPieces + 8;
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Magic Initiate (Wizard):\n - You learn two cantrips of your choice from the Wizard spell list.\n - Choose a level 1 spell from the Wizard spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Wizard spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.")
				backgroundEquipment = "Quarterstaff, Calligrapher's Supplies, Book (history), Parchment (8 sheets), Robe"
				break;
			case "Sailor":
				acrobaticsChk.check();
				perceptionChk.check();
				goldPieces = goldPieces + 20;
				toolProficienciesField.setText("Navigator's Tools\n")
				featsField.setText("Tavern Brawler:\n - When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.\n - Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.\n - You have proficiency with improvised weapons.\n - When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.")
				backgroundEquipment = "Dagger, Navigator's Tools, Rope, Traveler's Clothes"
				break;
			case "Scribe":
				investigationChk.check();
				perceptionChk.check();
				goldPieces = goldPieces + 23;
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n")
				backgroundEquipment = "Calligrapher's Supplies, Fine Clothes, Lamp Oil (3 flasks), Parchment (12 sheets)"
				break;
			case "Soldier":
				athleticsChk.check();
				intimidationChk.check();
				goldPieces = goldPieces + 14;
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Savage Attacker:\n - You've trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll agains the target.\n\n\n")
				backgroundEquipment = "Spear, Shortbow, 20 Arrows, Gaming Set, Healer's Kit, Quiver, Traveler's Clothes"
				break;
			case "Wayfarer":
				insightChk.check();
				stealthChk.check();
				goldPieces = goldPieces + 16;
				toolProficienciesField.setText("Thieves' Tools\n")
				featsField.setText("Lucky:\n - You have a number of Luck Points equal to your proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.\n - When you roll a d20 for a d20 test, you can spend 1 Luck Point to give yourself Advantage on the roll.\n - When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.")
				backgroundEquipment = "2 Daggers, Thieves' Tools, Gaming Set, Bedroll, 2 Pouches, Traveler's Clothes"
				break;
	  }
	  
	  if (!((background === "Wayfarer" || background === "Criminal") && (selectedClass === "Rogue"))){
		  if (!((background === "Hermit") && (selectedClass === "Druid"))){
			  if (hasClassToolProficiencies) {
				  toolProficienciesField.setText(toolProficienciesField.getText() + classToolProficiencies)
			  }
		  }
	  }
	  
	  equipmentField.setText(classEquipment + ", " + backgroundEquipment)
	  
	  
	  CPField.setText("0")
	  SPField.setText("0")
	  EPField.setText("0")
	  GPField.setText(goldPieces.toString())
	  PPField.setText("0")
	  
	  let skill1 = document.getElementById("skill1").value;
	  let skill2 = document.getElementById("skill2").value;
	  let skill3 = document.getElementById("skill3").value;
	  let skill4 = document.getElementById("skill4").value;
	  const skills = [skill1, skill2, skill3, skill4];
	  
	  if (skills.includes("Acrobatics")) {
		  acrobaticsChk.check()
	  }
	  if (skills.includes("Animal Handling")) {
		  animalHandlingChk.check()
	  }
	  if (skills.includes("Arcana")) {
		  arcanaChk.check()
	  }
	  if (skills.includes("Athletics")) {
		  athleticsChk.check()
	  }
	  if (skills.includes("Deception")) {
		  deceptionChk.check()
	  }
	  if (skills.includes("History")) {
		  historyChk.check()
	  }
	  if (skills.includes("Insight")) {
		  insightChk.check()
	  }
	  if (skills.includes("Intimidation")) {
		  intimidationChk.check()
	  }
	  if (skills.includes("Investigation")) {
		  investigationChk.check()
	  }
	  if (skills.includes("Medicine")) {
		  medicineChk.check()
	  }
	  if (skills.includes("Nature")) {
		  natureChk.check()
	  }
	  if (skills.includes("Perception")) {
		  perceptionChk.check()
	  }
	  if (skills.includes("Performance")) {
		  performanceChk.check()
	  }
	  if (skills.includes("Persuasion")) {
		  persuasionChk.check()
	  }
	  if (skills.includes("Religion")) {
		  religionChk.check()
	  }
	  if (skills.includes("Sleight of Hand")) {
		  slightOfHandChk.check()
	  }
	  if (skills.includes("Stealth")) {
		  stealthChk.check()
	  }
	  if (skills.includes("Survival")) {
		  survivalChk.check()
	  }
	  
	  let str = parseInt(strMod)
	  if (strChk.isChecked()) {
		  str = str + proficiencyBonus
		  strSaveField.setText("+" + str.toString())
	  } else {
		  if (str < 0){
			  strSaveField.setText(str.toString())
		  } else {
			  strSaveField.setText("+" + str.toString())
		  }
	  }
	  
	  let dex = parseInt(dexMod)
	  if (dexChk.isChecked()) {
		  dex = dex + proficiencyBonus
		  dexSaveField.setText("+" + dex.toString())
	  } else {
		  if (dex < 0){
			  dexSaveField.setText(dex.toString())
		  } else {
			  dexSaveField.setText("+" + dex.toString())
		  }
	  }
	  
	  let con = parseInt(conMod)
	  if (conChk.isChecked()) {
		  con = con + proficiencyBonus
		  conSaveField.setText("+" + con.toString())
	  } else {
		  if (con < 0){
			  conSaveField.setText(con.toString())
		  } else {
			  conSaveField.setText("+" + con.toString())
		  }
	  }
	  
	  let intel = parseInt(intMod)
	  if (intChk.isChecked()) {
		  intel = intel + proficiencyBonus
		  intSaveField.setText("+" + intel.toString())
	  } else {
		  if (intel < 0){
			  intSaveField.setText(intel.toString())
		  } else {
			  intSaveField.setText("+" + intel.toString())
		  }
	  }
	  
	  let wis = parseInt(wisMod)
	  if (wisChk.isChecked()) {
		  wis = wis + proficiencyBonus
		  wisSaveField.setText("+" + wis.toString())
	  } else {
		  if (wis < 0){
			  wisSaveField.setText(wis.toString())
		  } else {
			  wisSaveField.setText("+" + wis.toString())
		  }
	  }
	  
	  let cha = parseInt(chaMod)
	  if (chaChk.isChecked()) {
		  cha = cha + proficiencyBonus
		  chaSaveField.setText("+" + cha.toString())
	  } else {
		  if (cha < 0){
			  chaSaveField.setText(cha.toString())
		  } else {
			  chaSaveField.setText("+" + cha.toString())
		  }
	  }
	  
	  str = parseInt(strMod)
	  dex = parseInt(dexMod)
	  intel = parseInt(intMod)
	  wis = parseInt(wisMod)
	  cha = parseInt(chaMod)
	  
	  if (athleticsChk.isChecked()) {
		  athleticsField.setText("+" + (str + proficiencyBonus).toString())
	  } else {
		  if (str < 0) {
			  athleticsField.setText(str.toString())
		  } else {
			  athleticsField.setText("+" + str.toString())
		  }
	  }
	  
	  if (acrobaticsChk.isChecked()) {
		  acrobaticsField.setText("+" + (dex + proficiencyBonus).toString())
	  } else {
		  if (dex < 0) {
			  acrobaticsField.setText(dex.toString())
		  } else {
			  acrobaticsField.setText("+" + dex.toString())
		  }
	  }
	  
	  if (slightOfHandChk.isChecked()) {
		  slightOfHandField.setText("+" + (dex + proficiencyBonus).toString())
	  } else {
		  if (dex < 0) {
			  slightOfHandField.setText(dex.toString())
		  } else {
			  slightOfHandField.setText("+" + dex.toString())
		  }
	  }
	  
	  if (stealthChk.isChecked()) {
		  stealthField.setText("+" + (dex + proficiencyBonus).toString())
	  } else {
		  if (dex < 0) {
			  stealthField.setText(dex.toString())
		  } else {
			  stealthField.setText("+" + dex.toString())
		  }
	  }
	  
	  if (arcanaChk.isChecked()) {
		  arcanaField.setText("+" + (intel + proficiencyBonus).toString())
	  } else {
		  if (intel < 0) {
			  arcanaField.setText(intel.toString())
		  } else {
			  arcanaField.setText("+" + intel.toString())
		  }
	  }
	  
	  if (historyChk.isChecked()) {
		  historyField.setText("+" + (intel + proficiencyBonus).toString())
	  } else {
		  if (intel < 0) {
			  historyField.setText(intel.toString())
		  } else {
			  historyField.setText("+" + intel.toString())
		  }
	  }
	  
	  if (investigationChk.isChecked()) {
		  investigationField.setText("+" + (intel + proficiencyBonus).toString())
	  } else {
		  if (intel < 0) {
			  investigationField.setText(intel.toString())
		  } else {
			  investigationField.setText("+" + intel.toString())
		  }
	  }
	  
	  if (natureChk.isChecked()) {
		  natureField.setText("+" + (intel + proficiencyBonus).toString())
	  } else {
		  if (intel < 0) {
			  natureField.setText(intel.toString())
		  } else {
			  natureField.setText("+" + intel.toString())
		  }
	  }
	  
	  if (religionChk.isChecked()) {
		  religionField.setText("+" + (intel + proficiencyBonus).toString())
	  } else {
		  if (intel < 0) {
			  religionField.setText(intel.toString())
		  } else {
			  religionField.setText("+" + intel.toString())
		  }
	  }
	  
	  if (animalHandlingChk.isChecked()) {
		  animalHandlingField.setText("+" + (wis + proficiencyBonus).toString())
	  } else {
		  if (wis < 0) {
			  animalHandlingField.setText(wis.toString())
		  } else {
			  animalHandlingField.setText("+" + wis.toString())
		  }
	  }
	  
	  if (insightChk.isChecked()) {
		  insightField.setText("+" + (wis + proficiencyBonus).toString())
	  } else {
		  if (wis < 0) {
			  insightField.setText(wis.toString())
		  } else {
			  insightField.setText("+" + wis.toString())
		  }
	  }
	  
	  if (medicineChk.isChecked()) {
		  medicineField.setText("+" + (wis + proficiencyBonus).toString())
	  } else {
		  if (wis < 0) {
			  medicineField.setText(wis.toString())
		  } else {
			  medicineField.setText("+" + wis.toString())
		  }
	  }
	  
	  if (perceptionChk.isChecked()) {
		  perceptionField.setText("+" + (wis + proficiencyBonus).toString())
	  } else {
		  if (wis < 0) {
			  perceptionField.setText(wis.toString())
		  } else {
			  perceptionField.setText("+" + wis.toString())
		  }
	  }
	  
	  if (survivalChk.isChecked()) {
		  survivalField.setText("+" + (wis + proficiencyBonus).toString())
	  } else {
		  if (wis < 0) {
			  survivalField.setText(wis.toString())
		  } else {
			  survivalField.setText("+" + wis.toString())
		  }
	  }
	  
	  if (deceptionChk.isChecked()) {
		  deceptionField.setText("+" + (cha + proficiencyBonus).toString())
	  } else {
		  if (cha < 0) {
			  deceptionField.setText(cha.toString())
		  } else {
			  deceptionField.setText("+" + cha.toString())
		  }
	  }
	  
	  if (intimidationChk.isChecked()) {
		  intimidationField.setText("+" + (cha + proficiencyBonus).toString())
	  } else {
		  if (cha < 0) {
			  intimidationField.setText(cha.toString())
		  } else {
			  intimidationField.setText("+" + cha.toString())
		  }
	  }
	  
	  if (performanceChk.isChecked()) {
		  performanceField.setText("+" + (cha + proficiencyBonus).toString())
	  } else {
		  if (cha < 0) {
			  performanceField.setText(cha.toString())
		  } else {
			  performanceField.setText("+" + cha.toString())
		  }
	  }
	  
	  if (persuasionChk.isChecked()) {
		  persuasionField.setText("+" + (cha + proficiencyBonus).toString())
	  } else {
		  if (cha < 0) {
			  persuasionField.setText(cha.toString())
		  } else {
			  persuasionField.setText("+" + cha.toString())
		  }
	  }
	  
	  
	  
	  
	  

      const pdfBytes = await pdfDoc.save()
	  const blob = new Blob([pdfBytes], { type: "application/pdf" });
	  const url = URL.createObjectURL(blob);
	  window.open(url, "_blank");
    }
	
	async function fillFormPrinter() {
    	// Fetch the PDF with form fields
      const formUrl = 'https://raw.githubusercontent.com/birddie721/5e2024Builder/main/Character-Sheet.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)

      // Get the form containing all the fields
      const form = pdfDoc.getForm()

	let proficiencyBonus = 2;

      // Get all fields in the PDF by their names
      const nameField = form.getTextField('Name')
      const backgroundField = form.getTextField('Background')
      const classField = form.getTextField('Class')
      const speciesField = form.getTextField('Species')
      const subclassField = form.getTextField('Subclass')
	  const speciesTraits = form.getTextField('SPECIES TRAITS')
	  const classFeatures1 = form.getTextField('CLASS FEATURES 1')
	  const classFeatures2 = form.getTextField('CLASS FEATURES 2')
	  
      const levelField = form.getTextField('Level')
      const xpField = form.getTextField('XP Points')

      const acField = form.getTextField('Armor Class')
	  const hpField = form.getTextField('Max HP')
	  
      const proficiencyField = form.getTextField('PROF BONUS')
	  const passivePerceptionField = form.getTextField('PASSIVE PERCEPTION')
	  
      const strScoreField = form.getTextField('STR SCORE')
      const strModField = form.getTextField('STR MOD')

      const dexScoreField = form.getTextField('DEX SCORE')
      const dexModField = form.getTextField('DEX MOD')
	  
      const conScoreField = form.getTextField('CON SCORE')
      const conModField = form.getTextField('CON MOD')
	  
      const intScoreField = form.getTextField('INT SCORE')
      const intModField = form.getTextField('INT MOD')
	  
      const wisScoreField = form.getTextField('WIS SCORE')
      const wisModField = form.getTextField('WIS MOD')
	  
      const chaScoreField = form.getTextField('CHA SCORE')
      const chaModField = form.getTextField('CHA MOD')
	  
	  const initiativeField = form.getTextField('init')
      const speedField = form.getTextField('SPEED')
	  const sizeField = form.getTextField('SIZE')
	  
	  const strChk = form.getCheckBox("Check Box18")
	  const dexChk = form.getCheckBox("Check Box11")
	  const conChk = form.getCheckBox("Check Box7")
	  const intChk = form.getCheckBox("Check Box25")
	  const wisChk = form.getCheckBox("Check Box17")
	  const chaChk = form.getCheckBox("Check Box6")
	  
	  const strSaveField = form.getTextField("STR SAVE")
	  const dexSaveField = form.getTextField("DEX SAVE")
	  const conSaveField = form.getTextField("CON SAVE")
	  const intSaveField = form.getTextField("INT SAVE")
	  const wisSaveField = form.getTextField("Text Field71")
	  const chaSaveField = form.getTextField("CHA SAVE")
	  
	  const athleticsChk = form.getCheckBox("Check Box19")
	  const acrobaticsChk = form.getCheckBox("Check Box8")
	  const slightOfHandChk = form.getCheckBox("Check Box9")
	  const stealthChk = form.getCheckBox("Check Box10")
	  const arcanaChk = form.getCheckBox("Check Box24")
	  const historyChk = form.getCheckBox("Check Box20")
	  const investigationChk = form.getCheckBox("Check Box21")
	  const natureChk = form.getCheckBox("Check Box22")
	  const religionChk = form.getCheckBox("Check Box23")
	  const animalHandlingChk = form.getCheckBox("Check Box15")
	  const insightChk = form.getCheckBox("Check Box13")
	  const medicineChk = form.getCheckBox("Check Box12")
	  const perceptionChk = form.getCheckBox("Check Box14")
	  const survivalChk = form.getCheckBox("Check Box16")
	  const deceptionChk = form.getCheckBox("Check Box5")
	  const intimidationChk = form.getCheckBox("Check Box4")
	  const performanceChk = form.getCheckBox("Check Box3")
	  const persuasionChk = form.getCheckBox("Check Box2")
	  
	  const athleticsField = form.getTextField("ATHLETICS")
	  const acrobaticsField = form.getTextField("ACROBATICS")
	  const slightOfHandField = form.getTextField("SLEIGHT OF HAND")
	  const stealthField = form.getTextField("STEALTH")
	  const arcanaField = form.getTextField("ARCANA")
	  const historyField = form.getTextField("HISTORY")
	  const investigationField = form.getTextField("INVESTIGATION")
	  const natureField = form.getTextField("NATURE")
	  const religionField = form.getTextField("RELIGION")
	  const animalHandlingField = form.getTextField("ANIMAL HANDLING")
	  const insightField = form.getTextField("INSIGHT")
	  const medicineField = form.getTextField("MEDICINE")
	  const perceptionField = form.getTextField("PERCEPTION")
	  const survivalField = form.getTextField("SURVIVAL")
	  const deceptionField = form.getTextField("DECEPTION")
	  const intimidationField = form.getTextField("INTIMIDATE")
	  const performanceField = form.getTextField("PERFORMANCE")
	  const persuasionField = form.getTextField("PERSUASION")
	  
	  
	  const lightArmor = form.getCheckBox("Check Box33")
	  const mediumArmor = form.getCheckBox("Check Box34")
	  const heavyArmor = form.getCheckBox("Check Box35")
	  const shieldProf = form.getCheckBox("Check Box36")
	  
	  const weapon1Name = form.getTextField("NAME - WEAPON 1")
	  const weapon1Bonus = form.getTextField("BONUS/DC - WEAPON 1")
	  const weapon1Damage = form.getTextField("DAMAGE/TYPE - WEAPON 1")
	  const weapon1Notes = form.getTextField("NOTES - WEAPON 1")
	  
	  const weapon2Name = form.getTextField("NAME - WEAPON 2")
	  const weapon2Bonus = form.getTextField("BONUS/DC - WEAPON 2")
	  const weapon2Damage = form.getTextField("DAMAGE/TYPE - WEAPON 2")
	  const weapon2Notes = form.getTextField("NOTES - WEAPON 2")
	  
	  const weapon3Name = form.getTextField("NAME - WEAPON 3")
	  const weapon3Bonus = form.getTextField("BONUS/DC - WEAPON 3")
	  const weapon3Damage = form.getTextField("DAMAGE/TYPE - WEAPON 3")
	  const weapon3Notes = form.getTextField("NOTES - WEAPON 3")
	  
	  const weapon4Name = form.getTextField("NAME - WEAPON 4")
	  const weapon4Bonus = form.getTextField("BONUS/DC - WEAPON 4")
	  const weapon4Damage = form.getTextField("DAMAGE/TYPE - WEAPON 4")
	  const weapon4Notes = form.getTextField("NOTES - WEAPON 4")
	  
	  const weapon5Name = form.getTextField("NAME - WEAPON 5")
	  const weapon5Bonus = form.getTextField("BONUS/DC - WEAPON 5")
	  const weapon5Damage = form.getTextField("DAMAGE/TYPE - WEAPON 5")
	  const weapon5Notes = form.getTextField("NOTES - WEAPON 5")
	  
	  const weapon6Name = form.getTextField("NAME - WEAPON 6")
	  const weapon6Bonus = form.getTextField("BONUS/DC - WEAPON 6")
	  const weapon6Damage = form.getTextField("DAMAGE/TYPE - WEAPON 6")
	  const weapon6Notes = form.getTextField("NOTES - WEAPON 6")
	  
	  const hasShieldChk = form.getCheckBox("shield chk")
	  const shieldAC = 2;
	  
	  const spellcastingAbilityField = form.getTextField("SPELLCASTING ABILITY")
	  const spellcastingModifierField = form.getTextField("SPELLCASTING MOD")
	  const spellSaveDCField = form.getTextField("SPELL SAVE DC")
	  const spellAttackBonusField = form.getTextField("SPELL ATTACK BONUS")
	  
	  const CPField = form.getTextField("CP")
	  const SPField = form.getTextField("SP")
	  const EPField = form.getTextField("EP")
	  const GPField = form.getTextField("GP")
	  const PPField = form.getTextField("PP")
	  
	  const weaponProficienciesField = form.getTextField("WEAPON PROF")
	  const toolProficienciesField = form.getTextField("TOOL PROF")
	  
	  const featsField = form.getTextField("FEATS")
	  const equipmentField = form.getTextField("EQUIPMENT")
	  

      // Fill in the basic info fields
	  nameField.setText(document.getElementById("playerName").value)
	  let background = document.getElementById("roleSelect").value;
	  backgroundField.setText(background);
	  let selectedClass = document.getElementById("class").value
	  classField.setText(selectedClass)
	  
	  let species = document.getElementById("race").value
	  const speciesList = ["Elf", "Goliath", "Tiefling", "Gnome"]
	  let subrace = document.getElementById("subrace").value
	  if (speciesList.includes(species)) {
		  speciesField.setText(subrace + " " + species)
	  }else {
		speciesField.setText(species)
	  }
	  
	  const fastList = ["Goliath"]
	  if (fastList.includes(species)) {
		  speedField.setText("35")
	  } else {
		  if (subrace == "Wood") {
			speedField.setText("35")
		  }else {
			speedField.setText("30")
		  }
	  }
	  
	  const smallList = ["Gnome", "Halfling"]
	  const otherList = ["Aasimar", "Human", "Tiefling"]
	  if (smallList.includes(species)) {
		  sizeField.setText("Small")
	  } else if (otherList.includes(species)) {
		  sizeField.setText("")
	  }else {
		  sizeField.setText("Medium")
	  }
	  
	  
	  
	  
	  
	  let strMod = document.getElementById("abilityMod1").innerText;
	  let dexMod = document.getElementById("abilityMod2").innerText;
	  let conMod = document.getElementById("abilityMod3").innerText;
	  let intMod = document.getElementById("abilityMod4").innerText;
	  let wisMod = document.getElementById("abilityMod5").innerText;
	  let chaMod = document.getElementById("abilityMod6").innerText;
	  
	  const strSave = ["Barbarian", "Fighter", "Monk", "Ranger"]
	  const dexSave = ["Bard", "Monk", "Ranger", "Rogue"]
	  const conSave = ["Barbarian", "Fighter", "Sorcerer"]
	  const intSave = ["Druid", "Rogue", "Wizard"]
	  const wisSave = ["Cleric", "Druid", "Paladin", "Warlock", "Wizard"]
	  const chaSave = ["Bard", "Cleric", "Paladin", "Sorcerer", "Warlock"]
	  
	  if (strSave.includes(selectedClass)) {
		  strChk.check();
	  }
	  if (dexSave.includes(selectedClass)) {
		  dexChk.check();
	  }
	  if (conSave.includes(selectedClass)) {
		  conChk.check();
	  }
	  if (intSave.includes(selectedClass)) {
		  intChk.check();
	  }
	  if (wisSave.includes(selectedClass)) {
		  wisChk.check();
	  }
	  if (chaSave.includes(selectedClass)) {
		  chaChk.check();
	  }
	  
	  
	  
	  const lightArmorProficiency = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Ranger", "Rogue", "Warlock"]
	  const mediumArmorProficiency = ["Barbarian", "Cleric", "Fighter", "Paladin", "Ranger"]
	  const heavyArmorProficiency = ["Fighter", "Paladin"]
	  const hasShieldProficiency = ["Barbarian", "Cleric", "Druid", "Fighter", "Paladin", "Ranger"]
	  
	  if (lightArmorProficiency.includes(selectedClass)) {
		  lightArmor.check();
	  }
	  if (mediumArmorProficiency.includes(selectedClass)) {
		  mediumArmor.check();
	  }
	  if (heavyArmorProficiency.includes(selectedClass)) {
		  heavyArmor.check();
	  }
	  if (hasShieldProficiency.includes(selectedClass)) {
		  shieldProf.check();
	  }
	  
	  
	  let aasimarTraits = [
		" * Celestial Resistance - Resistance to Necrotic damage and Radiant damage.",
		" * Darkvision - Range 60ft",
		" * Healing Hands - Magic Action, range touch, creature heals a number of d4s equal to your proficiency modifier. Once/Long Rest",
		" * Light Bearer - Light Cantrip"
	  ];
	  
	  let dragonbornTraits = [
		" * Draconic Ancestry - Based on your dragon color, you gain affinity with an element which impacts your Breath Weapon and Damage Resistance.",
		" * Breath Weapon - During attack action, can replace one attack with a 15-foor Cone or 30-foot Line 5-feet wide. Each creature hit makes Dex saving throw (DC 8 + Con mod + proficiency bonus). Damage type determined by Draconic Ancestry. Takes 1d10 -> 2d10 (lvl5) -> 3d10 (lvl 11) - > 4d10 (lvl 17). Can use number of times equal to your proficiency bonus/long rest.",
		" * Damage Resistance - You have resistance to the damage type determined by your Draconic Ancestry trait.",
		" * Darkvision - Range 60ft",
		" * Draconic Flight - As a bonus action, gain Fly Speed equal to your speed that lasts 10 minutes. Can use once per long rest."
	  ]
	  
	  let dwarfTraits = [
		" * Darkvision - Range 120ft",
		" * Dwarven Resilience - Resistance to Poison damage. Advantage on saving throws to avoid or end the Poisoned condition.",
		" * Dwarven Toughness - +1 Max HP per level.",
		" * Stonecunning - Bonus Action, gain Tremorsense with a range of 60ft for 10 minutes. Can only be used on stone surfaces. Can use a number of times equal to Proficiency Bonus per Long Rest."
	  ]
	  
	  let elfTraits = [
		" * Fey Ancestry - Advantage on Saving Throws to avoid or end the Charmed condition.",
		" * Keen Senses - Proficiency in the Insight, perceptopn, or Survival skill.",
		" * Trance - You don't need to skeep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness."
	  ]
	  let drowTraits = [
		" * Darkvision - Range 120ft",
		" * Drow Lineage - You know the Dancing Lights cantrip. At 3rd level you know Faerie Fire, at 5th level you know Darkness."
	  ]
	  let highElfTraits = [
		" * Darkvision - Range 60ft",
		" * High Elf Lineage - You know one Wizard cantrip and can switch it when you finish a long rest. At 3rd level you know Detect Magic, at 5th level you know Misty Step."
	  ]
	  let woodElfTraits = [
		" * Darkvision - Range  60ft",
		" * Wood Elf Lineage - Your speed increases to 35 fet. You know the Druidcraft cantrip. At 3rd level you know Longstrider, at 5th level you know Pass without Trace." 
	  ]
	  
	  let gnomeTraits = [
		" * Darkvision - Range 60ft",
		" * Gnomish Cunning - Advantage on Intelligence, Wisdom, and Charisma saving throws."
	  ]
	  let forestGnomeTraits = [
		" * Gnomish Lineage - You know the Minor Illusion cantrip. You always have the Speak with Animals spell prepared anc can cast it without a spell slot a number of times equal to your Proficiency Bonus. You regain all expended uses on a Long Rest. You can also use any spell slots you have to cast the spell."
	  ]
	  let rockGnomeTraits = [
		" * Gnomish Lineage - You know the Mending and Prestigitation cantrips. You can also spend 10 minutes casting Prestigitation to create small objects."
	  ]
	  
	  let goliathTraits = [
		" * Large Form - Starting at Level 5, you can change your size to Large as a bonus action for 10 minutes or until you end it. For that duration, you have Advantage on Strength checks, and your Speed increases by 10ft. Once per Long Rest.",
		" * Powerful Build - You have Advantage on any saving throw you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.",
		" * Giant Ancestry - You gain a supernatural boon from your ancestry. You can use the benefit a number of times equal to your Proficiency Bonus and regain all expended uses on a Long Rest."
	  ]
	  let cloudTraits = [
		" * Cloud's Jaunt - As a bonus action, you magically teleport up to 30 feet to an unoccupied space you can see."
	  ]
	  let fireTraits = [
		" * Fire's Burn - When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target."
	  ]
	  let frostTraits = [
		" * Frost's Chill - When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10ft until the start of your next turn."
	  ]
	  let hillTraits = [
		" * Hill's Tumble - When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition."
	  ]
	  let stoneTraits = [
		" * Stone's Endurance - When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total."
	  ]
	  let stormTraits = [
		" * Storm's Thunder - When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature."
	  ]
	  
	  let halflingTraits = [
		" * Brave - You have advantage on saving throws you make to avoid or end the Frightened condition.",
		" * Halfling Nimbleness - You can move through the space of any creature that is a size larger than you, but you can't stop in the same space.",
		" * Luck - When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.",
		" * Naturally Stealthy - You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."
	  ]
	  
	  let humanTraits = [
		" * Resourceful - You gain Heroic Inspiration whenever you finish a Long Rest.",
		" * Skillful - You gain proficiency in one skill of your choice.",
		" * Versatile - You gain an Origin feat of your choice."
	  ]
	  
	  let orcTraits = [
		" * Adrenaline Rush - You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus and regain all uses on a Short or Long Rest.",
		" * Darkvision - Range 120ft",
		" * Relentless Endurance - When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once per Long Rest."
	  ]
	  
	  let tieflingTraits = [
		" * Darkvision - Range 60ft",
		" * Otherworldly Presence - You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiending Legacy trait.",
		" * Fiendish Legacy - At levels 3 and 5 you know a spell depending on your chosen Fiendish Legacy. You always have that spell prepared. You can cast it once without a spell slot per Long Rest. You can also cast it with a spell slot. Intelligence, Wisdom, or Charisma is your spellcasting ability for spells you cast with this trait."
	  ]
	  let abyssalTraits = [
		" * Abyssal - You know the Poison Spray cantrip. You have resistance to Poison damage. At 3rd level you know Ray of Sickness. At 5th level you know Hold person."
	  ]
	  let chthonicTraits = [
		" * Chthonic - You know the Chill Touch cantrip. You have resistance to Necrotic damage. At 3rd level you know False Life. At 5th level you know Ray of Enfeeblement."
	  ]
	  let infernalTraits = [
		" * Infernal - You know the Fire Bolt cantrip. You have resistance to Fire damage. At 3rd level you know Hellish Rebuke. At 5th level you know Darkness."
	  ]
	  
	  switch (species){
			case "Aasimar":
				speciesTraits.setText(aasimarTraits.join('\n'));
				break;
			
			case "Dragonborn":
				speciesTraits.setText(dragonbornTraits.join('\n'));
				break;
			case "Dwarf":
				speciesTraits.setText(dwarfTraits.join('\n'));
				break;
			case "Elf":
				switch(subrace) {
					case "High":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + highElfTraits.join('\n'));
						break;
					case "Wood":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + woodElfTraits.join('\n'));
						break;
					case "Dark":
						speciesTraits.setText(elfTraits.join('\n') + '\n' + drowTraits.join('\n'));
						break;
				}
				break;
			case "Gnome":
				switch(subrace){
					case "Forest":
						speciesTraits.setText(gnomeTraits.join('\n') + '\n' + forestGnomeTraits.join('\n'));
						break;
					case "Rock":
						speciesTraits.setText(gnomeTraits.join('\n') + '\n' + rockGnomeTraits.join('\n'));
						break;
				}
				break;
			case "Goliath":
				switch (subrace) {
					case "Cloud Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + cloudTraits.join('\n'));
						break;
					case "Fire Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + fireTraits.join('\n'));
						break;
					case "Frost Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + frostTraits.join('\n'));
						break;
					case "Hill Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + hillTraits.join('\n'));
						break;
					case "Stone Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + stoneTraits.join('\n'));
						break;
					case "Storm Giant":
						speciesTraits.setText(goliathTraits.join('\n') + '\n' + stormTraits.join('\n'));
						break;
				}
				break;
			case "Halfling":
				speciesTraits.setText(halflingTraits.join('\n'));
				break;
			case "Human":
				speciesTraits.setText(humanTraits.join('\n'));
				break;
			case "Orc":
				speciesTraits.setText(orcTraits.join('\n'));
				break;
			case "Tiefling":
				switch(subrace) {
					case "Abyssal":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + abyssalTraits.join('\n'));
						break;
					case "Chthonic":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + chthonicTraits.join('\n'));
						break;
					case "Infernal":
						speciesTraits.setText(tieflingTraits.join('\n') + '\n' + infernalTraits.join('\n'));
						break;
				}
				break;
	  }
	  
	  
	  let barbarianTraits1 = [
		" * Rage - You can enter a Rage as a Bonus Action if you are not wearing Heavy armor. You can enter your Rage the number of times shown for your Barbarian level. You regain one expended use when you finish a Short Rest and all uses when you finish a Long Rest. While in your Rage, you gain Resistance to Bludgeoning, Piercing, and Slashing damage and gain Advantage on Strength checks and Strength saving throws. During your rage, when you make an attack using Strength and deal damage to the target, you deal bonus damage shown for your Barbarian level. You cannot maintain Concentration and cannot cast spells during a Rage. The Rage lasts for one turn, but can be extended by one turn if you make an attack roll against an enemy, force an enemy to make a saving throw, or take a Bonus Action to extend your rage. You can maintain a Rage for a maximmum of 10 minutes.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let barbarianTraits2 = [
		" * Unarmored Defense - While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you Long Rest you can change one of those weapon choices.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let bardTraits1 = [
		" * Bardic Inspiration - As a Bonus Action you can inspire another creature within 60ft who can hear you. This creature gains one of your Bardic Inspiration dice. A creature can only have one Bardic Inspiration die at a time. This creature can, in the next hour, roll the Bardic Inspiration die and add the number rolled to a d20 test. The Bardic Inspiration die is expended when it's rolled. This feature can be used a number of times equal to your Charisma modifier and all uses are regained on a Long Rest.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let bardTraits2 = [
		" * Spellcasting - You know two cantrips from the Bard spell list and can replace one cantrip whenever you gain a Bard level. The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let clericTraits1 = [
		" * Divine Order - You have dedicated yourself to one of the following sacred roles of your choice:",
		"   - Protector: You gain proficiency with martial weapons and training with Heavy armor.",
		"   - Thaumaturge: You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus use of your Arcana and Religion checks equal to your Wisdom modifier.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let clericTraits2 = [
		" * Spellcasting - You know three cantrips from the Cleric spell list and can replace one cantrip whenever you gain a Cleric level. The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let druidTraits1 = [
		" * Druidic - You know Druidic, the secret language of the Druids. You also always have the Speak with Animals spell prepared.\n",
		" * Primal Order - You have dedicated yourself to one of the following savred roles of your choice:",
		"   - Magician: You know one extra cantrip. You gain a bonus to your Arcana and Nature checks equal to your Wisdom modifier.",
		"   - Warden: You gain proficiency with Martial weapons and training with Medium armor.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let druidTraits2 = [
		" * Spellcasting - You know two cantrips from the Druid spell list and can replace one cantrip whenever you gain a Druid level. The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Druid spells for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let fighterTraits1 = [
		" * Fighting Style - You gain a Fighting Style feat. Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you Long Rest you can change one of those weapon choices.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let fighterTraits2 = [
		" * Second Wind - As a Bonus Action, you can regain Hit Points equal to 1d10 plus your Fighter Level. You can use this feature twice. You regain one expended use when you finish a Short Rest, and regain all expended uses when you finish a Long Rest.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let monkTraits1 = [
		" * Martial Arts - You gain the following benefits when you are unarmed or wielding only Monk weapons, and not wearing armor or wielding a Shield:",
		" - You can make an Unarmed Strike as a Bonus Action",
		" - You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons.",
		" - You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shive option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let monkTraits2 = [
		" * Unarmored Defense - While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers.\n\n\n\n\n\n\n\n\n\n",
		"                                                                                                                                                                                                                                                                                                                                                   "
	  ]
	  
	  let paladinTraits1 = [
		" * Lay On Hands - You have a pool of healing power that replenishes when you finsh a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level. As a Bonus Action, you can touch a creature (yourself included) and restore a number of Hit Points to that creature up to the maximum amount remaining in the pool. You can also expend 5 Hit Points from the pool to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let paladinTraits2 = [
		" * Spellcasting - The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Paladin spell list. Whenever you Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let rangerTraits1 = [
		" * Favored Enemy - You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and regain all expended uses when you finish a Long Rest.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let rangerTraits2 = [
		" * Spellcasting - The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Ranger spell list. Whenever you Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let rogueTraits1 = [
		" * Expertise - You gain Expertise in two of your skill proficiencies of your choice.\n",
		" * Weapon Mastery - You gain the mastery properties of two kinds of weapons of your choice with which you have proficiency. Whenever you Long Rest you can change the kinds of weapons you chose.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let rogueTraits2 = [
		" * Sneak Attack - Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or Ranged weapon. You don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.\n",
		" * Thieves' Cant - You know Thieves' Cant and one other language of your choice.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let sorcererTraits1 = [
		" * Spellcasting - You know four cantrips from the Sorcerer spell list and can replace one cantrip whenever you gain a Sorcerer level. The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Sorcerer spell list. Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let sorcererTraits2 = [
		" * Innate Sorcery - On a Bonus Action, for one minute, you gain Advantage on the attack rolls of Sorcerer spells you cast and the spell save DC of your Sorcerer spells increases by 1. You can use this feature twice and regain all expended uses on a Long Rest.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let warlockTraits1 = [
		" * Eldrich Invocations - You gain one Eldrich invocation of your choice. Whenever you gain a Warlock level, you can replace onw of your invocations with another one for which you qualify. When you gain certain Warlock levels, you gain more invocations of your choice.\n\n\n\n\n\n\n\n\n\n",
		"                                                                                                                    "
	  ]
	  let warlockTraits2 = [
		" * Pact Magic - You know two cantrips from the Warlock spell list and can replace one cantrip whenever you gain a Warlock level. The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1-5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a Short or Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 spells from the Warlock spell list. Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  let wizardTraits1 = [
		" * Spellcasting - You know three cantrips from the Wizard spell list and can replace one cantrip whenever you finish a Long Rest. As a Wizard, you have a spellbook. The book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. Whenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.  You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from your spellbook. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  let wizardTraits2 = [
		" * Ritual Adept - You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way.\n",
		" * Arcane Recovery - When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level rounded up, and none of the slots can be level 6 or higher. Once you use this feature, you can't do so again until you finish a Long Rest.\n\n\n\n\n\n\n\n\n\n"
	  ]
	  
	  
	  switch(selectedClass) {
			case "Barbarian":
				classFeatures1.setText(barbarianTraits1.join('\n'));
				classFeatures2.setText(barbarianTraits2.join('\n'));
				break;
			case "Bard":
				classFeatures1.setText(bardTraits1.join('\n'));
				classFeatures2.setText(bardTraits2.join('\n'));
				break;
			case "Cleric":
				classFeatures1.setText(clericTraits1.join('\n'));
				classFeatures2.setText(clericTraits2.join('\n'));
				break;
			case "Druid":
				classFeatures1.setText(druidTraits1.join('\n'));
				classFeatures2.setText(druidTraits2.join('\n'));
				break;
			case "Fighter":
				classFeatures1.setText(fighterTraits1.join('\n'));
				classFeatures2.setText(fighterTraits2.join('\n'));
				break;
			case "Monk":
				classFeatures1.setText(monkTraits1.join('\n'));
				classFeatures2.setText(monkTraits2.join('\n'));
				break;
			case "Paladin":
				classFeatures1.setText(paladinTraits1.join('\n'));
				classFeatures2.setText(paladinTraits2.join('\n'));
				break;
			case "Ranger":
				classFeatures1.setText(rangerTraits1.join('\n'));
				classFeatures2.setText(rangerTraits2.join('\n'));
				break;
			case "Rogue":
				classFeatures1.setText(rogueTraits1.join('\n'));
				classFeatures2.setText(rogueTraits2.join('\n'));
				break;
			case "Sorcerer":
				classFeatures1.setText(sorcererTraits1.join('\n'));
				classFeatures2.setText(sorcererTraits2.join('\n'));
				break;
			case "Warlock":
				classFeatures1.setText(warlockTraits1.join('\n'));
				classFeatures2.setText(warlockTraits2.join('\n'));
				break;
			case "Wizard":
				classFeatures1.setText(wizardTraits1.join('\n'));
				classFeatures2.setText(wizardTraits2.join('\n'));
				break;
	  }
	  
	  
	  
	  let hasClassToolProficiencies = false
	  switch(selectedClass) {
			case "Barbarian":
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				break;
			case "Bard":
				goldPieces = 19;
				weaponProficienciesField.setText("Simple weapons\n\n")
				hasClassToolProficiencies = true
				classToolProficiencies = "3 Musical Instruments"
				break;
			case "Cleric":
				weaponProficienciesField.setText("Simple weapons\n\n")
				break;
			case "Druid":
				weaponProficienciesField.setText("Simple weapons\n\n")
				hasClassToolProficiencies = true
				classToolProficiencies = "Herbalism Kit"
				break;
			case "Fighter":
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				break;
			case "Monk":
				weaponProficienciesField.setText("Simple weapons and Martial weapons that have the Light property")
				break;
			case "Paladin":
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				break;
			case "Ranger":
				weaponProficienciesField.setText("Simple and Martial weapons\n")
				break;
			case "Rogue":
				weaponProficienciesField.setText("Simple weapons and Martial weapons that have the Finesse or Light property")
				hasClassToolProficiencies = true
				classToolProficiencies = "Thieves' Tools"
				break;
			case "Sorcerer":
				weaponProficienciesField.setText("Simple weapons\n\n")
				break;
			case "Warlock":
				weaponProficienciesField.setText("Simple weapons\n\n")
				break;
			case "Wizard":
				weaponProficienciesField.setText("Simple weapons\n\n")
				break;
	  }

	  
	  switch(background){
			case "Acolyte":
				insightChk.check();
				religionChk.check();
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Magic Initiate (Cleric):\n - You learn two cantrips of your choice from the Cleric spell list.\n - Choose a level 1 spell from the Cleric spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Cleric spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Artisan":
				investigationChk.check();
				persuasionChk.check();
				toolProficienciesField.setText("Artisan's Tools\n")
				featsField.setText("Crafter:\n - You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.\n - Whenever you buy a nonmagical item, you receive a 20 percent discount on it.\n - When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Charlatan":
				deceptionChk.check();
				slightOfHandChk.check();
				toolProficienciesField.setText("Forgery Kit\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n\\n\n\n\n\n\n\n\n\n")
				break;
			case "Criminal":
				slightOfHandChk.check();
				stealthChk.check();
				toolProficienciesField.setText("Thieves' Tools\n")
				featsField.setText("Alert:\n - When you roll Initiative, you can add your Proficiency Bonus to the roll.\n - Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one  willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Entertainer":
				acrobaticsChk.check();
				performanceChk.check();
				toolProficienciesField.setText("Musical Instrument\n")
				featsField.setText("Musician:\n - You gain proficiency with three Musical Instruments of your choice.\n - After you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear this song. The number of allies you can affect in this way equals your Proficiency Bonus.\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Farmer":
				animalHandlingChk.check();
				natureChk.check();
				toolProficienciesField.setText("Carpenter's Tools\n")
				featsField.setText("Tough:\n - Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maxumum increases by an additional 2 Hit Points.\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Guard":
				athleticsChk.check();
				perceptionChk.check();
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Alert:\n - When you roll Initiative, you can add your Proficiency Bonus to the roll.\n - Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one  willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.\n\n\n\n\n\n\n\n\n")
				break;
			case "Guide":
				stealthChk.check();
				survivalChk.check();
				toolProficienciesField.setText("Cartographer's Tools\n")
				featsField.setText("Magic Initiate (Druid):\n - You learn two cantrips of your choice from the Druid spell list.\n - Choose a level 1 spell from the Druid spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Druid spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Hermit":
				medicineChk.check();
				religionChk.check();
				toolProficienciesField.setText("Herbalism Kit\n")
				featsField.setText("Healer:\n - If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.\n - Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.\n\n\n\n\n\n\n\n")
				break;
			case "Merchant":
				animalHandlingChk.check();
				persuasionChk.check();
				toolProficienciesField.setText("Navigator's Tools\n")
				featsField.setText("Lucky:\n - You have a number of Luck Points equal to your proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.\n - When you roll a d20 for a d20 test, you can spend 1 Luck Point to give yourself Advantage on the roll.\n - When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.\n\n\n\n\n\n\n\n\n")
				break;
			case "Noble":
				historyChk.check();
				persuasionChk.check();
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Sage":
				arcanaChk.check();
				historyChk.check();
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Magic Initiate (Wizard):\n - You learn two cantrips of your choice from the Wizard spell list.\n - Choose a level 1 spell from the Wizard spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.\n - Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Wizard spell list.\n - You can take this feat more than once, but you must choose a different spell list each time.\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Sailor":
				acrobaticsChk.check();
				perceptionChk.check();
				toolProficienciesField.setText("Navigator's Tools\n")
				featsField.setText("Tavern Brawler:\n - When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.\n - Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.\n - You have proficiency with improvised weapons.\n - When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.\n\n\n\n\n\n\n\n\n")
				break;
			case "Scribe":
				investigationChk.check();
				perceptionChk.check();
				toolProficienciesField.setText("Calligrapher's Supplies\n")
				featsField.setText("Skilled:\n - You gain proficiency in any combination of three skills or tools of your choice.\n - You can take this feat more than once.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Soldier":
				athleticsChk.check();
				intimidationChk.check();
				toolProficienciesField.setText("Gaming Set\n")
				featsField.setText("Savage Attacker:\n - You've trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll agains the target.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
				break;
			case "Wayfarer":
				insightChk.check();
				stealthChk.check();
				toolProficienciesField.setText("Thieves' Tools\n")
				featsField.setText("Lucky:\n - You have a number of Luck Points equal to your proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.\n - When you roll a d20 for a d20 test, you can spend 1 Luck Point to give yourself Advantage on the roll.\n - When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.\n\n\n\n\n\n\n\n\n")
				break;
	  }
	  
	  if (!((background === "Wayfarer" || background === "Criminal") && (selectedClass === "Rogue"))){
		  if (!((background === "Hermit") && (selectedClass === "Druid"))){
			  if (hasClassToolProficiencies) {
				  toolProficienciesField.setText(toolProficienciesField.getText() + classToolProficiencies)
			  }
		  }
	  }
	  
	  
	  let skill1 = document.getElementById("skill1").value;
	  let skill2 = document.getElementById("skill2").value;
	  let skill3 = document.getElementById("skill3").value;
	  let skill4 = document.getElementById("skill4").value;
	  const skills = [skill1, skill2, skill3, skill4];
	  
	  if (skills.includes("Acrobatics")) {
		  acrobaticsChk.check()
	  }
	  if (skills.includes("Animal Handling")) {
		  animalHandlingChk.check()
	  }
	  if (skills.includes("Arcana")) {
		  arcanaChk.check()
	  }
	  if (skills.includes("Athletics")) {
		  athleticsChk.check()
	  }
	  if (skills.includes("Deception")) {
		  deceptionChk.check()
	  }
	  if (skills.includes("History")) {
		  historyChk.check()
	  }
	  if (skills.includes("Insight")) {
		  insightChk.check()
	  }
	  if (skills.includes("Intimidation")) {
		  intimidationChk.check()
	  }
	  if (skills.includes("Investigation")) {
		  investigationChk.check()
	  }
	  if (skills.includes("Medicine")) {
		  medicineChk.check()
	  }
	  if (skills.includes("Nature")) {
		  natureChk.check()
	  }
	  if (skills.includes("Perception")) {
		  perceptionChk.check()
	  }
	  if (skills.includes("Performance")) {
		  performanceChk.check()
	  }
	  if (skills.includes("Persuasion")) {
		  persuasionChk.check()
	  }
	  if (skills.includes("Religion")) {
		  religionChk.check()
	  }
	  if (skills.includes("Sleight of Hand")) {
		  slightOfHandChk.check()
	  }
	  if (skills.includes("Stealth")) {
		  stealthChk.check()
	  }
	  if (skills.includes("Survival")) {
		  survivalChk.check()
	  }
	  
	  
	  
	  
	  
	  

      const pdfBytes = await pdfDoc.save()
	  const blob = new Blob([pdfBytes], { type: "application/pdf" });
	  const url = URL.createObjectURL(blob);
	  window.open(url, "_blank");
    }