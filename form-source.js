	

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