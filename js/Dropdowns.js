class Dropdowns extends HTMLElement {

	constructor() {

		// Always call super first in constructor
		super();
		this.shadow = this.attachShadow({mode: 'open'});
	}
	get color() {
		return this.getAttribute('color');
	}
	set color(val) {
		this.setAttribute('color', val);
	}
	get nationality() {
		return this.getAttribute('nationality');
	}
	set nationality(val) {
		this.setAttribute('nationality', val);
	}
	get drink() {
		return this.getAttribute('drink');
	}
	set drink(val) {
		this.setAttribute('drink', val);
	}
	get cigarettes() {
		return this.getAttribute('cigarettes');
	}
	set cigarettes(val) {
		this.setAttribute('cigarettes', val);
	}
	get pets() {
		return this.getAttribute('pets');
	}
	set pets(val) {
		this.setAttribute('pets', val);
	}
	
	connectedCallback() {
        this.render();
        let colorInput = this.shadow.querySelector('#color');
        colorInput.addEventListener('change', this.changeColor.bind(this));
        let nationalityInput = this.shadow.querySelector('#nationality');
        nationalityInput.addEventListener('change', this.changeNationality.bind(this));
		let drinkInput = this.shadow.querySelector('#drink');
        drinkInput.addEventListener('change', this.changeDrink.bind(this));
		let cigarettesInput = this.shadow.querySelector('#cigarettes');
        cigarettesInput.addEventListener('change', this.changeCigarettes.bind(this));
		let petsInput = this.shadow.querySelector('#pets');
        petsInput.addEventListener('change', this.changePets.bind(this));
   }
	render() {
        this.shadow.innerHTML = `
		<style>
		ul.no-bullets {
            list-style-type: none; 
            padding: 5; 
            margin: 0; 
        }
		</style>
		<ul  class="no-bullets">
	<li>
	<select id="color">
	<option value="-1"></option>
	<option value="0">Blue</option>
	<option value="1">Green</option>
	<option value="2">Red</option>
	<option value="3">White</option>
	<option value="4">Yellow</option>
	</select>
	</li>
	</ul>
	<ul  class="no-bullets">
	<li>
	<select id="nationality">
	<option value="-1"></option>
	<option value="0">Brit</option>
	<option value="1">Dane</option>
	<option value="2">German</option>
	<option value="3">Norwegian</option>
	<option value="4">Swede</option>
	</select>
	</li>
	</ul>
	<ul  class="no-bullets">
	<li>
	<select id="drink">
	<option value="-1"></option>
	<option value="0">Beer</option>
	<option value="1">Coffee</option>
	<option value="2">Milk</option>
	<option value="3">Tea</option>
	<option value="4">Water</option>
	</select>
	</li>
	</ul>
	<ul  class="no-bullets">
	<li>
	<select id="cigarettes">
	<option value="-1"></option>
	<option value="0">Blends</option>
	<option value="1">Blue Master</option>
	<option value="2">Dunhill</option>
	<option value="3">Pall Mall</option>
	<option value="4">Prince</option>
	</select>
	</li>
	</ul>
	<ul  class="no-bullets">
	<li>
	<select id="pets">
	<option value="-1"></option>
	<option value="0">Birds</option>
	<option value="1">Cats</option>
	<option value="2">Dogs</option>
	<option value="3">Horses</option>
	<option value="4">Fish</option>
	</select>
	</li>
	</ul>`;
	}
	
	static get observedAttributes() {
        return ['color','nationality','drink','cigarettes','pets'];
    }
	
	changeColor(e) {
        this.setAttribute('color', e.target.value);
	   }
	
	changeNationality(e) {
	this.setAttribute('nationality', e.target.value);
	}

	changeDrink(e) {
		this.setAttribute('drink', e.target.value);
	}
	
	changeCigarettes(e) {
		this.setAttribute('cigarettes', e.target.value);
	}
	changePets(e) {
		this.setAttribute('pets', e.target.value);
	}
	
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
     }
}

if ('customElements' in window) {
	customElements.define('dropdown-list', Dropdowns);
}