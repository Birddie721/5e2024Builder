const { PDFDocument } = PDFLib

    async function fillForm() {
    	// Fetch the PDF with form fields
      const formUrl = 'https://raw.githubusercontent.com/birddie721/5e2024Builder/main/Character-Sheet.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)

      // Get the form containing all the fields
      const form = pdfDoc.getForm()

      // Get all fields in the PDF by their names
      const nameField = form.getTextField('Name')
      const backgroundField = form.getTextField('Background')
      const classField = form.getTextField('Class')
      const speciesField = form.getTextField('Species')
      const subclassField = form.getTextField('Subclass')
	  
      const levelField = form.getTextField('Level')
      const xpField = form.getTextField('XP Points')

      const acField = form.getTextField('Armor Class')
	  const hpField = form.getTextField('Max HP')
	  
      const proficiencyField = form.getTextField('PROF BONUS')
	  
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

      // Fill in the basic info fields
	  nameField.setText(document.getElementById("playerName").value)
	  backgroundField.setText(document.getElementById("roleSelect").value)
	  classField.setText(document.getElementById("class").value)
	  
	  let species = document.getElementById("race").value
	  const speciesList = ["Elf", "Goliath", "Tiefling"]
	  if (speciesList.includes(species)) {
		  speciesField.setText(document.getElementById("subrace").value + " " + species)
	  }else {
		speciesField.setText(species)
	  }
	  
	  const fastList = ["Goliath"]
	  if (fastList.includes(species)) {
		  speedField.setText("35")
	  } else {
		  speedField.setText("30")
	  }
	  
	  const smallList = ["Gnome", "Halfling"]
	  const otherList = ["Aasimar", "Human", "Tiefling"]
	  if (smallList.includes(species)) {
		  sizeField.setText("Small")
	  } elif (otherList.includes(species) {
		  sizeField.setText("")
	  }else {
		  eizeField.setText("Medium")
	  }
	  
	  levelField.setText('1')
	  proficiencyField.setText('+2')
	  
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