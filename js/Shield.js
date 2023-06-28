class Shield {
	/**
	 * Creates anew a route shield.
	 * @param {string} [type="I-"] - Type of shield.
	 * @param {number} [routeNumber="1"] - Route number to display on shield.
	 * @param {boolean} [to=false] - Whether or not the shield should be signed as "TO".
	 * @param {string} [bannerType] - Directional banner to display.
	 * @param {string} [bannerPosition] - Where to place the directional banner relative to the shield.
	 */
	constructor({type = "I", routeNumber = "1", to = false, bannerType, bannerPosition} = {}) {
		if (Object.keys(this.types).includes(type)) {
			this.type = type;
		} else {
			this.type = "I";
		}
		this.type = type;
		this.routeNumber = routeNumber;
		this.to = to;
		if (this.bannerTypes.includes(bannerType)) {
			this.bannerType = bannerType;
		} else {
			this.bannerType = this.bannerTypes[0];
		}
		if (this.bannerPositions.includes(bannerPosition)) {
			this.bannerPosition = bannerPosition;
		} else {
			this.bannerPosition = this.bannerPositions[0];
		}
	}
}

Shield.prototype.bannerTypes = [
	"None",
	"Arterial",
	"North",
	"East",
	"South",
	"West",
	"Jct",
	"Begin",
	"End",
	"Spur",
	"Alt",
	"Truck",
	"Trunk",
	"Bus",
	"Byp",
	"Loop",
	"Express",
	"Local",
	"Inner",
	"Outer",
	"Future",
	"Toll",
	"City",
	"Conn",
	"To"
];
Shield.prototype.bannerPositions = ["Above", "Right", "Left"];
Shield.prototype.types = {
	"FS" : "FS",
	"Apawiland" : "Apawi",
	"Mennowa" : "Mennowa",	
	"Tempache" : "Tempache",
	"Rectangle" : "rec",
	"Rectangle 2" : "rec2",
	"Circle" : "cir",
	"Ellipse" : "elp",
	"Diamond" : "NC",
	"Triangle" : "TN2",
	"Keystone" : "PA",
	"Shield" : "US",
	"NewYork" : "NY",
	"Oregon" : "OR",
	"Virginia" : "VA",
	"Wisconsin" : "WI",
	"County" : "C"
};
