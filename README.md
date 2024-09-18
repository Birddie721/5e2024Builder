<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attribute Modifier with Dropdown</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .label {
      width: 100px;
      text-align: right;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 10px;
      width: 100px;
    }

    .box.modifiable {
      background-color: lightblue;
    }

    .value {
      font-size: 24px;
      margin-bottom: 10px;
    }

    button {
      width: 30px;
      height: 30px;
      font-size: 16px;
      margin: 5px;
	  cursor: pointer;
    }

    .price-pool {
      text-align: center;
      margin-top: 20px;
    }

    select {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div>
      <label for="roleSelect">Select Role: </label>
      <select id="roleSelect" onchange="updateRole()">
        <option value="">--Select a Role--</option>
        <option value="Acolyte">Acolyte (Intelligence, Wisdom, Charisma)</option>
        <option value="Artisan">Artisan (Strength, Dexterity, Intelligence)</option>
        <option value="Charlatan">Charlatan (Dexterity, Constitution, Charisma)</option>
        <option value="Criminal">Criminal (Dexterity, Constitution, Intelligence)</option>
        <option value="Entertainer">Entertainer (Strength, Dexterity, Charisma)</option>
        <option value="Farmer">Farmer (Strength, Constitution, Wisdom)</option>
        <option value="Guard">Guard (Strength, Intelligence, Wisdom)</option>
        <option value="Guide">Guide (Dexterity, Constitution, Wisdom)</option>
        <option value="Hermit">Hermit (Constitution, Wisdom, Charisma)</option>
        <option value="Merchant">Merchant (Constitution, Intelligence, Charisma)</option>
        <option value="Noble">Noble (Strength, Intelligence, Charisma)</option>
        <option value="Sage">Sage (Constitution, Intelligence, Wisdom)</option>
        <option value="Sailor">Sailor (Strength, Dexterity, Wisdom)</option>
        <option value="Scribe">Scribe (Dexterity, Intelligence, Wisdom)</option>
        <option value="Soldier">Soldier (Strength, Dexterity, Constitution)</option>
        <option value="Wayfarer">Wayfarer (Dexterity, Wisdom, Charisma)</option>
      </select>
    </div>

    <div class="row">
      <div class="label">Strength</div>
      <div class="box">
        <div class="value" id="value1">8</div>
        <button onclick="increment(1)">▲</button>
        <button onclick="decrement(1)">▼</button>
      </div>
      <div class="box" id="modBox1">
        <div class="value" id="mod1">0</div>
        <button onclick="modIncrement(1)">▲</button>
        <button onclick="modDecrement(1)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total1">8</div>
      </div>
    </div>

    <div class="row">
      <div class="label">Dexterity</div>
      <div class="box">
        <div class="value" id="value2">8</div>
        <button onclick="increment(2)">▲</button>
        <button onclick="decrement(2)">▼</button>
      </div>
      <div class="box" id="modBox2">
        <div class="value" id="mod2">0</div>
        <button onclick="modIncrement(2)">▲</button>
        <button onclick="modDecrement(2)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total2">8</div>
      </div>
    </div>

    <div class="row">
      <div class="label">Constitution</div>
      <div class="box">
        <div class="value" id="value3">8</div>
        <button onclick="increment(3)">▲</button>
        <button onclick="decrement(3)">▼</button>
      </div>
      <div class="box" id="modBox3">
        <div class="value" id="mod3">0</div>
        <button onclick="modIncrement(3)">▲</button>
        <button onclick="modDecrement(3)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total3">8</div>
      </div>
    </div>

    <div class="row">
      <div class="label">Intelligence</div>
      <div class="box">
        <div class="value" id="value4">8</div>
        <button onclick="increment(4)">▲</button>
        <button onclick="decrement(4)">▼</button>
      </div>
      <div class="box" id="modBox4">
        <div class="value" id="mod4">0</div>
        <button onclick="modIncrement(4)">▲</button>
        <button onclick="modDecrement(4)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total4">8</div>
      </div>
    </div>

    <div class="row">
      <div class="label">Wisdom</div>
      <div class="box">
        <div class="value" id="value5">8</div>
        <button onclick="increment(5)">▲</button>
        <button onclick="decrement(5)">▼</button>
      </div>
      <div class="box" id="modBox5">
        <div class="value" id="mod5">0</div>
        <button onclick="modIncrement(5)">▲</button>
        <button onclick="modDecrement(5)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total5">8</div>
      </div>
    </div>

    <div class="row">
      <div class="label">Charisma</div>
      <div class="box">
        <div class="value" id="value6">8</div>
        <button onclick="increment(6)">▲</button>
        <button onclick="decrement(6)">▼</button>
      </div>
      <div class="box" id="modBox6">
        <div class="value" id="mod6">0</div>
        <button onclick="modIncrement(6)">▲</button>
        <button onclick="modDecrement(6)">▼</button>
      </div>
      <div class="box">
        <div class="value" id="total6">8</div>
      </div>
    </div>
  </div>

  <div class="price-pool">
    <p>Price Pool: <span id="pricePool">27</span></p><br>
	<p>Modifer Pool: <span id="modifierPool">3</span></p>
  </div>
	


  <script>
    const pricePoolElement = document.getElementById("pricePool");
    let pricePool = 27;
    const values = [8, 8, 8, 8, 8, 8];
    const mods = [0, 0, 0, 0, 0, 0];
	let modifiableBoxes = [];
	let modifierPool = 3;
	
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

    function updateDisplay(id) {
      document.getElementById(`value${id}`).innerText = values[id - 1];
      document.getElementById(`total${id}`).innerText = values[id - 1] + mods[id - 1];
      pricePoolElement.innerText = pricePool;
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
      }
    }
	
	function modIncrement(id) {
		if (modifiableBoxes.includes(id) && modifierPool > 0 && mods[id - 1] < 2) {
			mods[id - 1]++;
			modifierPool--;
			document.getElementById("mod" + id).innerText = mods[id - 1];
			document.getElementById("modifierPool").innerText = modifierPool;
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
		}
	}


  </script>
</body>
</html>
