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
	  
	  
	  const lightArmor = form.getCheckBox("Check Box33")
	  const mediumArmor = form.getCheckBox("Check Box34")
	  const heavyArmor = form.getCheckBox("Check Box35")
	  const shieldProf = form.getCheckBox("Check Box36")
	  
	  const spellcastingAbilityField = form.getTextField("SPELLCASTING ABILITY")
	  const spellcastingModifierField = form.getTextField("SPELLCASTING MOD")
	  const spellSaveDCField = form.getTextField("SPELL SAVE DC")
	  const spellAttackBonusField = form.getTextField("SPELL ATTACK BONUS")
	  

      // Fill in the basic info fields
	  nameField.setText(document.getElementById("playerName").value)
	  backgroundField.setText(document.getElementById("roleSelect").value)
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
	  
	  
	  initiativeField.setText(dexMod)
	  let hp = classHP[selectedClass]
	  let modifiedHP = parseInt(hp) + parseInt(conMod)
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
						speciesTraits.setText(elfTraits.join('\n') + '\n' + darkElfTraits.join('\n'));
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


      // Fill the character image field with our Mario image
      //characterImageField.setImage(marioImage)

      // Fill in the allies field
      //alliesField.setText(
        //[
          //`Allies:`,
          //`  • Princess Daisy`,
          //`  • Princess Peach`,
          //`  • Rosalina`,
          //`  • Geno`,
          //`  • Luigi`,
          //`  • Donkey Kong`,
          //`  • Yoshi`,
          //`  • Diddy Kong`,
          //``,
          //`Organizations:`,
          //`  • Italian Plumbers Association`,
        //].join('\n'),
      //)

      // Fill in the faction name field
      //factionField.setText(`Mario's Emblem`)

      // Fill the faction image field with our emblem image
      //factionImageField.setImage(emblemImage)

      // Fill in the backstory field
      //backstoryField.setText(
        //`Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowser. His younger brother and sidekick is Luigi.`,
      //)

      // Fill in the traits field
      //traitsField.setText(
        //[
          //`Mario can use three basic three power-ups:`,
          //`  • the Super Mushroom, which causes Mario to grow larger`,
          //`  • the Fire Flower, which allows Mario to throw fireballs`,
          //`  • the Starman, which gives Mario temporary invincibility`,
        //].join('\n'),
      //)

      // Fill in the treasure field
      //treasureField.setText(['• Gold coins', '• Treasure chests'].join('\n'))

      const pdfBytes = await pdfDoc.save()
	  const blob = new Blob([pdfBytes], { type: "application/pdf" });
	  const url = URL.createObjectURL(blob);
	  window.open(url, "_blank");
    }