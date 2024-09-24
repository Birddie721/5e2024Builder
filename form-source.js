	

	const pricePoolElement = document.getElementById("pricePool");
	let pricePool = 27;
	const values = [8, 8, 8, 8, 8, 8];
	const mods = [0, 0, 0, 0, 0, 0];
	let modifiableBoxes = [];
	let modifierPool = 3;
	let initialPricePool = pricePool;
	
	const roles = {
		"Acolyte": [4, 5, 6], // Intelligence, Wisdom, Charisma
		"Artisan": [1, 2, 4], // Strength, Dexterity, Intelligence
		"Charlatan": [2, 3, 6], // Dexterity, Constitution, Charisma
		"Criminal": [2, 3, 4], // Dexterity, Constitution, Intelligence
		"Entertainer": [1, 2, 6], // Strength, Dexterity, Charisma
		"Farmer": [1, 3, 5], // Strength, Constitution, Wisdom
		"Guard": [1, 4, 5], // Strength, Intelligence, Wisdom
		"Guide": [2, 3, 5], // Dexterity, Constitution, Wisdom
		"Hermit": [3, 5, 6], // Constitution, Wisdom, Charisma
		"Merchant": [3, 4, 6], // Constitution, Intelligence, Charisma
		"Noble": [1, 4, 6], // Strength, Intelligence, Charisma
		"Sage": [3, 4, 5], // Constitution, Intelligence, Wisdom
		"Sailor": [1, 2, 5], // Strength, Dexterity, Wisdom
		"Scribe": [2, 4, 5], // Dexterity, Intelligence, Wisdom
		"Soldier": [1, 2, 3], // Strength, Dexterity, Constitution
		"Wayfarer": [2, 5, 6] // Dexterity, Wisdom, Charisma
	};
	
	const classDefault = {
		"Barbarian": [15, 13, 14, 10, 12, 8],
		"Bard": [8, 14, 12, 13, 10, 15],
		"Cleric": [14, 8, 13, 10, 15, 12],
		"Druid": [8, 12, 14, 13, 15, 10],
		"Fighter": [15, 14, 13, 8, 10, 12],
		"Monk": [12, 15, 13, 10, 14, 8],
		"Paladin": [15, 10, 13, 8, 12, 14],
		"Ranger": [12, 15, 13, 8, 14, 10],
		"Rogue": [12, 15, 13, 14, 10, 8],
		"Sorcerer": [10, 13, 14, 8, 12, 15],
		"Warlock": [8, 14, 13, 12, 10, 15],
		"Wizard": [8, 12, 13, 15, 14, 10]
	}
	
	const allSkills = [
      "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"
    ];
	
	const classSkills = {
      Barbarian: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
      Bard: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
      Cleric: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
      Druid: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
	  Fighter: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Persuasion", "Perception", "Survival"],
	  Monk: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
	  Paladin: ["Athletics", "Insight", "Intimidation", "medicine", "Persuasion", "Religion"],
	  Ranger: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stelth", "Survival"],
	  Rogue: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Persuasion", "Sleight of Hand", "Stealth"],
	  Sorcerer: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
	  Warlock: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
	  Wizard: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Religion"]
    };

    const backgroundSkills = {
		Acolyte: ["Insight", "Religion"],
		Artisan: ["Investigation", "Persuasion"],
		Charlatan: ["Deception", "Sleight of Hand"],
		Criminal: ["Sleight of Hand", "Stealth"],
		Entertainer: ["Acrobatics", "Performance"],
		Farmer: ["Animal Handling", "Nature"],
		Guard: ["Athletics", "Perception"],
		Guide: ["Stealth", "Survival"],
		Hermit: ["Medicine", "Religion"],
		Merchant: ["Animal Handling", "Persuasion"],
		Noble: ["History", "Persuasion"],
		Soldier: ["Athletics", "Intimidation"],
		Sailor: ["Perception", "Acrobatics"],
		Sage: ["Arcana", "History"],
		Scribe: ["Investigation", "Perception"],
		Wayfarer: ["Insight", "Stelth"]
    };

    const costMap = {
      8: 0,
      9: 1,
      10: 2,
      11: 3,
      12: 4,
      13: 5,
      14: 7,
      15: 9
    };
	
	const modifierMap = {
		8: -1,
		9: -1,
		10: 0,
		11: 0,
		12: 1,
		13: 1,
		14: 2,
		15: 2,
		16: 3,
		17: 3
	};

    function updateDisplay(id) {
      document.getElementById("value" + id).innerText = values[id - 1];
      document.getElementById("total" + id).innerText = values[id - 1] + mods[id - 1];
      document.getElementById("pricePool").innerText = pricePool + " / 27";
    }

    function increment(id) {
      const currentValue = values[id - 1];
      const nextValue = currentValue + 1;

      if (nextValue <= 15) {
        const currentCost = costMap[currentValue];
        const nextCost = costMap[nextValue];
        const costDifference = nextCost - currentCost;

        if (pricePool >= costDifference) {
          values[id - 1] = nextValue;
          pricePool -= costDifference;
          updateDisplay(id);
		  updateTotals();
        }
      }
    }

    function decrement(id) {
      const currentValue = values[id - 1];
      const previousValue = currentValue - 1;

      if (previousValue >= 8) {
        const currentCost = costMap[currentValue];
        const previousCost = costMap[previousValue];
        const costDifference = currentCost - previousCost;

        values[id - 1] = previousValue;
        pricePool += costDifference;
        updateDisplay(id);
		updateTotals();
      }
    }
	
	function modIncrement(id) {
		if (modifiableBoxes.includes(id) && modifierPool > 0 && mods[id - 1] < 2) {
			mods[id - 1]++;
			modifierPool--;
			document.getElementById("mod" + id).innerText = mods[id - 1];
			document.getElementById("modifierPool").innerText = modifierPool + " / 3";
			updateTotals();
		}
	}

    function modDecrement(id) {
		if (modifiableBoxes.includes(id) && mods[id - 1] > 0) {
			mods[id - 1]--;
			modifierPool++;
			document.getElementById("mod" + id).innerText = mods[id - 1];
			document.getElementById("modifierPool").innerText = modifierPool;
			updateTotals();
		}
	}
	
	function updateRole() {
		const selectedRole = document.getElementById("roleSelect").value;
		modifiableBoxes = roles[selectedRole] || [];

		// Reset modifier pool and box colors
		for (let i = 1; i <= 6; i++) {
			document.getElementById("modBox" + i).classList.remove("modifiable");
			mods[i - 1] = 0;
			document.getElementById("mod" + i).innerText = "0";
		}
		modifierPool = 3;
		document.getElementById("modifierPool").innerText = modifierPool;

		// Highlight modifiable boxes
		modifiableBoxes.forEach(boxId => {
			document.getElementById("modBox" + boxId).classList.add("modifiable");
		});

		updateTotals();
		updateSkillOptions();
	}
	
	function updateTotals(){
		for (let i = 1; i <= 6; i++) {
			document.getElementById("total" + i).innerText = values[i - 1] + mods[i - 1];
			document.getElementById("abilityMod" + i).innerText = modifierMap[values[i - 1] + mods[i - 1]];
		}
	}
	
	function classStats() {
		const selectedClass = document.getElementById("class").value;
		let scores = [];
		scores = classDefault[selectedClass] || [];
		if (scores.length > 0) {
			pricePool = 0;
			for (let i = 1; i <= 6; i++) {
				values[i - 1] = scores[i-1];
				updateDisplay(i);
			}
			updateTotals();
		}
	}
	
	function clearStats() {
		pricePool = initialPricePool;
		modifierPool = 3;
		for (let i = 1; i <= 6; i++) {
			values[i - 1] = 8
			mods[i - 1] = 0;
			document.getElementById("mod" + i).innerText = "0";
			updateDisplay(i);
		}
		updateTotals();
	}
	
	function handleRaceChange() {
  const race = document.getElementById("race").value;
  const subraceContainer = document.getElementById("subrace-container");
  const subraceSelect = document.getElementById("subrace");

  // Clear existing options in subrace select
  subraceSelect.innerHTML = '';

  // Determine which subrace options to show
  if (race === "Elf") {
    subraceContainer.style.display = "block";
    addSubraceOptions(["High", "Wood", "Dark"]);
  } else if (race === "Goliath") {
    subraceContainer.style.display = "block";
    addSubraceOptions(["Cloud Giant", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant"]);
  } else if (race === "Tiefling") {
    subraceContainer.style.display = "block";
    addSubraceOptions(["Abyssal", "Chthonic", "Infernal"]);
  } else if (race === "Gnome") {
	subraceContainer.style.display = "block";
	addSubraceOptions(["Forest", "Rock"])
  } else {
    // Hide subrace dropdown if the race doesn't have subraces
    subraceContainer.style.display = "none";
  }
}

function addSubraceOptions(subraceList) {
  const subraceSelect = document.getElementById("subrace");
  subraceSelect.innerHTML = '<option value="" disabled selected>Select your subrace</option>'; // Default option
  subraceList.forEach(subrace => {
    const option = document.createElement("option");
    option.value = subrace;
    option.text = subrace;
    subraceSelect.appendChild(option);
  });
}

function updateClassFeatures() {
  const classFeaturesDiv = document.getElementById('class-features');
  const selectedClass = document.getElementById('class').value;

  // Clear previous content
  classFeaturesDiv.innerHTML = '';

  // Class features data
  const classFeaturesData = {
    Barbarian: `
      <h3>Class: Barbarian</h3>
      <p><strong>Primary Ability:</strong> Strength</p>
      <p><strong>Hit Point Die:</strong> D12 per Barbarian level</p>
      <p><strong>Saving Throw Proficiencies:</strong> Strength and Constitution</p>
      <p><strong>Skill Proficiencies:</strong> Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival</p>
      <p><strong>Weapon Proficiencies:</strong> Simple and Martial Weapons</p>
      <p><strong>Armor Training:</strong> Light and Medium armor, Shields</p>
      <p><strong>Starting Equipment:</strong> Greataxe, 4 Handaxes, Explorer's Pack, and 15 GP</p>
      <p><strong>Class Features:</strong></p>
      <ul>
        <li><strong>Rage:</strong> You can enter a Rage as a Bonus Action if you are not wearing Heavy armor. You can enter your Rage the number of times shown for your Barbarian level. You regain one expended use when you finish a Short Rest and all uses when you finish a Long Rest. While in your Rage, you gain Resistance to Bludgeoning, Piercing, and Slashing damage and gain Advantage on Strength checks and Strength saving throws. During your rage, when you make an attack using Strength and deal damage to the target, you deal bonus damage shown for your Barbarian level. You cannot maintain Concentration and cannot cast spells during a Rage. The Rage lasts for one turn, but can be extended by one turn if you make an attack roll against an enemy, force an enemy to make a saving throw, or take a Bonus Action to extend your rage. You can maintain a Rage for a maximum of 10 minutes.</li>
        <li><strong>Unarmored Defense:</strong> While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.</li>
        <li><strong>Weapon Mastery:</strong> You gain the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you Long Rest you can change one of those weapon choices.</li>
      </ul>
    `,
    Bard: `
		<h3>Class: Bard</h3>
		<p><strong>Primary Ability:</strong> Charisma</p>
		<p><strong>Hit Point Die:</strong> D8 per Bard level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Dexterity and Charisma</p>
		<p><strong>Skill Proficiencies:</strong> Choose 3: Any skill</p>
		<p><strong>Weapon Proficiencies:</strong> Simple Weapons</p>
		<p><string>Tool Proficiencies:</strong> Choose 3 Musical Instruments</p>
		<p><strong>Armor Training:</strong> Light armor</p>
		<p><strong>Starting Equipment:</strong>Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer's Pack, and 19 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Bardic Inspiration:</strong> As a Bonus Action you can inspire another creature within 60ft who can hear you. This creature gains one of your Bardic Inspiration dice. A creature can only have one Bardic Inspiration die at a time. This creature can, in the next hour, roll the Bardic Inspiration die and add the number rolled to a d20 test. The Bardic Inspiration die is expended when it's rolled. This feature can be used a number of times equal to your Charisma modifier and all uses are regained on a Long Rest.</li>
			<li><strong>Spellcasting:</strong> You know two cantrips from the Bard spell list and can replace one cantrip whenever you gain a Bard level. The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.</li>
		</ul>
    `,
	Cleric: `
      <h3>Class: Cleric</h3>
		<p><strong>Primary Ability:</strong> Wisdom</p>
		<p><strong>Hit Point Die:</strong> D8 per Cleric level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Wisdom and Charisma</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: History, Insight, Medicine, Persuasion, Religion</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons</p>
		<p><strong>Armor Training:</strong> Light and Medium armor, Shields</p>
		<p><strong>Starting Equipment:</strong> Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack and 7 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Divine Order:</strong> You have dedicated yourself to one of the following sacred roles of your choice:
			<ul>
				<li>Protector: You gain proficiency with martial weapons and training with Heavy armor.</li>
				<li>Thaumaturge: You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to Arcana and Religion checks equal to your Wisdom modifier.</li>
			</ul>
			</li>
			<li><strong>Spellcasting:</strong> You know three cantrips from the Cleric spell list and can replace one cantrip whenever you gain a Cleric level. The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.</li>
		</ul>
    `,
	Druid: `
      <h3>Class: Druid</h3>
		<p><strong>Primary Ability:</strong> Wisdom</p>
		<p><strong>Hit Point Die:</strong> D8 per Druid level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Intelligence and Wisdom</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, Survival</p>
		<p><strong>Weapon Proficiencies:</strong> Simple Weapons</p>
		<p><strong>Tool Proficiencies:</strong> Herbalism Kit</p>
		<p><strong>Armor Training:</strong> Light armor and Shields</p>
		<p><strong>Starting Equipment:</strong> Leather Armor, Shield, Sickle, Druidic Focus (Quarterstaff), Explorer's Pack, Herbalism Kit, and 9 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Druidic:</strong> You know Druidic, the secret language of the Druids. You also always have the Speak with Animals spell prepared.</li>
				<li><strong>Primal Order:</strong> You have dedicated yourself to one of the following sacred roles of your choice:
				<ul>
				<li>Magician: You know one extra cantrip. You gain a bonus to your Arcana and Nature checks equal to your Wisdom modifier.</li>
				<li>Warden: You gain proficiency with Martial weapons and training with Medium armor.</li>
				</ul>
			</li>
		<li><strong>Spellcasting:</strong> You know two cantrips from the Druid spell list and can replace one cantrip whenever you gain a Druid level. The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. Whenever you Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Druid spells for which you have spell slots.</li>
		</ul>
    `,
	Fighter: `
      <h3>Class: Fighter</h3>
		<p><strong>Primary Ability:</strong> Strength or Dexterity</p>
		<p><strong>Hit Point Die:</strong> D10 per Fighter level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Strength and Constitution</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, Survival</p>
		<p><strong>Weapon Proficiencies:</strong> Simple and Martial weapons</p>
		<p><strong>Armor Training:</strong> All armor, Shields</p>
		<p><strong>Starting Equipment:</strong> Choose A or B: (A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack, and 11 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Fighting Style:</strong> Choose a Fighting Style feat. You can change it whenever you gain a Fighter level.</li>
			<li><strong>Weapon Mastery:</strong> You gain mastery over two Simple or Martial weapons. You can change one after a Long Rest.</li>
			<li><strong>Second Wind:</strong> As a Bonus Action, regain 1d10 + Fighter level in Hit Points. Can use twice, regaining expended uses after a Short or Long Rest.</li>
		</ul>
    `,
	Monk: `
      <h3>Class: Monk</h3>
		<p><strong>Primary Ability:</strong> Dexterity and Wisdom</p>
		<p><strong>Hit Point Die:</strong> D8 per Monk level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Strength and Dexterity</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Acrobatics, Athletics, History, Insight, Religion, Stealth</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons and Martial weapons that have the Light property</p>
		<p><strong>Tool Proficiencies:</strong> Choose one type of Artisan's Tools or Musical Instrument</p>
		<p><strong>Armor Training:</strong> None</p>
		<p><strong>Starting Equipment:</strong> Spear, 5 Daggers, Artisan's Tools or Musical Instrument chosen for the tool proficiency above, Explorer's Pack, and 11 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Martial Arts:</strong> While unarmed or using Monk weapons (no armor or shield), you can make an Unarmed Strike as a Bonus Action and use Dexterity for attack and damage rolls.</li>
			<li><strong>Unarmored Defense:</strong> Base Armor Class equals 10 + Dexterity modifier + Wisdom modifier while not wearing armor.</li>
		</ul>

    `,
	Paladin: `
      <h3>Class: Paladin</h3>
		<p><strong>Primary Ability:</strong> Strength and Charisma</p>
		<p><strong>Hit Point Die:</strong> D10 per Paladin level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Wisdom and Charisma</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, Religion</p>
		<p><strong>Weapon Proficiencies:</strong> Simple and Martial weapons</p>
		<p><strong>Armor Training:</strong> All armor, Shields</p>
		<p><strong>Starting Equipment:</strong> Chain Mail, Shield, longsword, 6 Javelins, Holy Symbol, Priest's Pack, and 9 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Lay On Hands:</strong> You have a healing pool equal to 5 times your Paladin level. You can heal creatures by touch or remove poison by expending 5 HP from the pool.</li>
			<li><strong>Weapon Mastery:</strong> Gain the mastery properties of two weapons of your choice. Can change one after a Long Rest.</li>
			<li><strong>Spellcasting:</strong> You can prepare and cast Paladin spells. Regain all expended spell slots after a Long Rest.</li>
		</ul>
    `,
	Ranger: `
      <h3>Class: Ranger</h3>
		<p><strong>Primary Ability:</strong> Dexterity and Wisdom</p>
		<p><strong>Hit Point Die:</strong> D10 per Ranger level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Strength and Dexterity</p>
		<p><strong>Skill Proficiencies:</strong> Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, Survival</p>
		<p><strong>Weapon Proficiencies:</strong> Simple and Martial weapons</p>
		<p><strong>Armor Training:</strong> Light and Medium armor, Shields</p>
		<p><strong>Starting Equipment:</strong> Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer's Pack, and 7GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Favored Enemy:</strong> Choose a type of favored enemy. You gain advantage on Survival checks to track them and Intelligence checks to recall information about them.</li>
			<li><strong>Spellcasting:</strong> You know two cantrips and can cast Ranger spells. Regain all expended spell slots after a Long Rest.</li>
		</ul>
    `,
	Rogue: `
      <h3>Class: Rogue</h3>
		<p><strong>Primary Ability:</strong> Dexterity</p>
		<p><strong>Hit Point Die:</strong> D8 per Rogue level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Dexterity and Intelligence</p>
		<p><strong>Skill Proficiencies:</strong> Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, Stealth</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons and Martial weapons that have the Finesse or Light property</p>
		<p><strong>Armor Training:</strong> Light armor</p>
		<p><strong>Starting Equipment:</strong> Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, and 8 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Sneak Attack:</strong> Once per turn, you can deal extra damage to one creature you hit with an attack if you have advantage or an ally is within 5ft of the target.</li>
			<li><strong>Cunning Action:</strong> You can take a Bonus Action to Dash, Disengage, or Hide.</li>
		</ul>
    `,
	Sorcerer: `
      <h3>Class: Sorcerer</h3>
		<p><strong>Primary Ability:</strong> Charisma</p>
		<p><strong>Hit Point Die:</strong> D6 per Sorcerer level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Constitution and Charisma</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Arcana, Deception, Insight, Intimidation, Persuasion, Religion</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons</p>
		<p><strong>Armor Training:</strong> None</p>
		<p><strong>Starting Equipment:</strong> Spear, 2 Daggers, Arcane Focus (crystal), Dungeoneer's Pack, and 28 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Sorcery Points:</strong> You have a pool of Sorcery Points equal to your Sorcerer level. You can use these points to fuel Metamagic abilities and recover spell slots.</li>
			<li><strong>Spellcasting:</strong> You know four cantrips and can cast Sorcerer spells using Charisma. Regain all expended spell slots after a Long Rest.</li>
		</ul>
    `,
	Warlock: `
      <h3>Class: Warlock</h3>
		<p><strong>Primary Ability:</strong> Charisma</p>
		<p><strong>Hit Point Die:</strong> D8 per Warlock level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Wisdom and Charisma</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, Religion</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons</p>
		<p><strong>Armor Training:</strong> Light armor</p>
		<p><strong>Starting Equipment:</strong> Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar's Pack, and 15 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Pact Magic:</strong> You know two cantrips and can cast Warlock spells. You have a small number of spell slots that recover after a Short or Long Rest.</li>
			<li><strong>Eldritch Invocations:</strong> You gain Eldritch Invocations, special magical abilities that enhance your powers. Choose two at level 1.</li>
		</ul>
    `,
	Wizard: `
      <h3>Class: Wizard</h3>
		<p><strong>Primary Ability:</strong> Intelligence</p>
		<p><strong>Hit Point Die:</strong> D6 per Wizard level</p>
		<p><strong>Saving Throw Proficiencies:</strong> Intelligence and Wisdom</p>
		<p><strong>Skill Proficiencies:</strong> Choose 2: Arcana, History, Insight, Investigation, Medicine, Nature, Religion</p>
		<p><strong>Weapon Proficiencies:</strong> Simple weapons</p>
		<p><strong>Armor Training:</strong> None</p>
		<p><strong>Starting Equipment:</strong> 2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack, and 5 GP</p>
		<p><strong>Class Features:</strong></p>
		<ul>
			<li><strong>Arcane Recovery:</strong> Once per day, during a Short Rest, you can recover expended spell slots with a combined level equal to half your Wizard level (rounded up).</li>
			<li><strong>Spellcasting:</strong> You know three cantrips and can prepare spells from your Spellbook. Regain all expended spell slots after a Long Rest.</li>
		</ul>
    `,
  };
	
  // Check if the selected class exists in the data and display the features
  if (classFeaturesData[selectedClass]) {
    classFeaturesDiv.innerHTML = classFeaturesData[selectedClass];
  } else {
    classFeaturesDiv.innerHTML = '<p>Please select a class to see its features.</p>';
  }
  updateSkillOptions()
}

function updateSkillBoxes(selectedClass) {
	const skillBox3 = document.getElementById('skillBox3');
	const skillBox4 = document.getElementById('skillBox4');
  if (selectedClass === 'Bard' || selectedClass === 'Ranger') {
    skillBox3.style.display = 'block';
    skillBox4.style.display = 'none';
  } else if (selectedClass === 'Rogue') {
    skillBox3.style.display = 'block';
    skillBox4.style.display = 'block';
  } else {
    skillBox3.style.display = 'none';
    skillBox4.style.display = 'none';
  }
}

function updateSkillOptions() {
      const skill1 = document.getElementById('skill1');
      const skill2 = document.getElementById('skill2');
	  const skill3 = document.getElementById('skill3');
	  const skill4 = document.getElementById('skill4');
      const background = document.getElementById('roleSelect').value;
	  const classSelect = document.getElementById('class').value;

      const selectedSkill1 = skill1.value;
      const selectedSkill2 = skill2.value;
	  const selectedSkill3 = skill3.value;
	  const selectedSkill4 = skill4.value;
	  
	  
	  const availableClassSkills = classSkills[classSelect] || [];
      const grantedBackgroundSkills = backgroundSkills[background] || [];

      const filteredSkills = availableClassSkills.filter(skill => 
        !grantedBackgroundSkills.includes(skill) && 
        skill !== selectedSkill1 && 
        skill !== selectedSkill2 && 
        skill !== selectedSkill3 && 
        skill !== selectedSkill4
      );
		updateSkillBoxes(classSelect)
      // Function to populate dropdowns
      function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
          const option = document.createElement('option');
          option.value = skill;
          option.textContent = skill;
          if (skill === selectedSkill) {
            option.selected = true;
          }
          dropdown.appendChild(option);
        });
      }

      
      populateDropdown(skill1, selectedSkill1);
      populateDropdown(skill2, selectedSkill2);
	  populateDropdown(skill3, selectedSkill3);
	  populateDropdown(skill4, selectedSkill4);
    }

    // Initialize skill options on page load
    document.addEventListener('DOMContentLoaded', updateSkillOptions);
	
	function updateSkillOptions2() {
      const skill1 = document.getElementById('skill1');
      const skill2 = document.getElementById('skill2');
	  const skill3 = document.getElementById('skill3');
	  const skill4 = document.getElementById('skill4');
      const background = document.getElementById('roleSelect').value;
	  const classSelect = document.getElementById('class').value;

      const selectedSkill1 = skill1.value;
      const selectedSkill2 = skill2.value;
	  const selectedSkill3 = skill3.value;
	  const selectedSkill4 = skill4.value;
	  
	  
	  const availableClassSkills = classSkills[classSelect] || [];
      const grantedBackgroundSkills = backgroundSkills[background] || [];

      const filteredSkills = availableClassSkills.filter(skill => 
        !grantedBackgroundSkills.includes(skill) && 
        skill !== selectedSkill1 && 
        skill !== selectedSkill2 && 
        skill !== selectedSkill3 && 
        skill !== selectedSkill4
      );

      // Function to populate dropdowns
      function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
          const option = document.createElement('option');
          option.value = skill;
          option.textContent = skill;
          if (skill === selectedSkill) {
            option.selected = true;
          }
          dropdown.appendChild(option);
        });
      }

      
      populateDropdown(skill2, selectedSkill2);
	  populateDropdown(skill3, selectedSkill3);
	  populateDropdown(skill4, selectedSkill4);
    }
	
	function updateSkillOptions3() {
      const skill1 = document.getElementById('skill1');
      const skill2 = document.getElementById('skill2');
	  const skill3 = document.getElementById('skill3');
	  const skill4 = document.getElementById('skill4');
      const background = document.getElementById('roleSelect').value;
	  const classSelect = document.getElementById('class').value;

      const selectedSkill1 = skill1.value;
      const selectedSkill2 = skill2.value;
	  const selectedSkill3 = skill3.value;
	  const selectedSkill4 = skill4.value;
	  
	  
	  const availableClassSkills = classSkills[classSelect] || [];
      const grantedBackgroundSkills = backgroundSkills[background] || [];

      const filteredSkills = availableClassSkills.filter(skill => 
        !grantedBackgroundSkills.includes(skill) && 
        skill !== selectedSkill1 && 
        skill !== selectedSkill2 && 
        skill !== selectedSkill3 && 
        skill !== selectedSkill4
      );

      // Function to populate dropdowns
      function populateDropdown(dropdown, selectedSkill) {
		  console.log("populating")
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
          const option = document.createElement('option');
          option.value = skill;
          option.textContent = skill;
          if (skill === selectedSkill) {
            option.selected = true;
          }
          dropdown.appendChild(option);
        });
      }

      
	  populateDropdown(skill3, selectedSkill3);
	  populateDropdown(skill4, selectedSkill4);
    }
	
	function updateSkillOptions4() {
      const skill1 = document.getElementById('skill1');
      const skill2 = document.getElementById('skill2');
	  const skill3 = document.getElementById('skill3');
	  const skill4 = document.getElementById('skill4');
      const background = document.getElementById('roleSelect').value;
	  const classSelect = document.getElementById('class').value;

      const selectedSkill1 = skill1.value;
      const selectedSkill2 = skill2.value;
	  const selectedSkill3 = skill3.value;
	  const selectedSkill4 = skill4.value;
	  
	  
	  const availableClassSkills = classSkills[classSelect] || [];
      const grantedBackgroundSkills = backgroundSkills[background] || [];

      const filteredSkills = availableClassSkills.filter(skill => 
        !grantedBackgroundSkills.includes(skill) && 
        skill !== selectedSkill1 && 
        skill !== selectedSkill2 && 
        skill !== selectedSkill3 && 
        skill !== selectedSkill4
      );

      // Function to populate dropdowns
      function populateDropdown(dropdown, selectedSkill) {
		  console.log("populating")
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
          const option = document.createElement('option');
          option.value = skill;
          option.textContent = skill;
          if (skill === selectedSkill) {
            option.selected = true;
          }
          dropdown.appendChild(option);
        });
      }

      
	  populateDropdown(skill4, selectedSkill4);
    }