function laske_lounas() {
	var bill_input = document.getElementById("bill");
	var people_input = document.getElementById("people");
	var tax_input = document.getElementById("tax");
	var shares_output = document.getElementById("shares");

	var bill_min = document.getElementById("bill").min;
	var bill_max = document.getElementById("bill").max;
	var people_min = document.getElementById("people").min;
	var people_max = document.getElementById("people").max;

	// Convert input values to numerical format
	var bill = parseFloat(bill_input.value);
	var people = parseFloat(people_input.value);
	var tax = parseFloat(tax_input.value);
	var sum = parseFloat(bill) + (parseFloat(bill) * parseFloat(tax) / 100);

	if (bill && people && tax) {
		if (bill < bill_min || people < people_min) {
			shares_output.innerHTML = `<p>Liian vähän henkilöitä tai liian pieni laskun määrä!<p>`;
		}
		else if (bill > bill_max || people > people_max) {
			shares_output.innerHTML = `<p>Liian paljon henkilöitä tai liian suuri laskun määrä!<p>`;
		}
		else {
			var shares = sum / people;
			var list = "<ul>";
			for (var i = 1; i <= people; i++) {
				list += `<li>Henkilö ${i}: ${shares.toFixed(2)}€ kuukaudessa</li>`;
			}
			list += "</ul>";
			shares_output.innerHTML = list;
		}
	} else {
		shares_output.innerHTML = `<p>Täytä laskun määrä, henkilömäärä ja veroprosentti ensin!</p>`;
	}
}