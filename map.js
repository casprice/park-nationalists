var mymap = L.map('mapid').setView([39.8283, -98.5795], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiY2FzcHJpY2UiLCJhIjoiY2pyNXpndmVvMHkwdTQzbjU3Zjh0cG5teSJ9.XgKSr7ivPga3rKhU5UnI_A'
}).addTo(mymap);

var MarkerIcon = L.Icon.extend({
		options: {
			iconSize:     [45, 65],
			iconAnchor:   [15, 40],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});

var wIcon = new MarkerIcon({iconUrl: 'images/wcheck.png'}),
    woIcon = new MarkerIcon({iconUrl: 'images/wocheck.png'});

var Acadia = L.marker([44.376789, -68.255569]).bindPopup("<br/><img src='images/acadia.png' alt='acadia' width='300px'/>").addTo(mymap),
    American = L.marker([14.2583, -170.6833]).bindPopup("<br/><img src='images/american.png' alt='american' width='300px'/>").addTo(mymap),
    Arches = L.marker([38.733082, -109.592514]).bindPopup("<br/><img src='images/arches.png' alt='arches' width='300px'/>").addTo(mymap),
    BadLands = L.marker([43.907810, -102.332787]).bindPopup("<br/><img src='images/badlands.png' alt='badlands' width='300px'/>").addTo(mymap),
    BigBend = L.marker([29.127487, -103.242538]).bindPopup("<br/><img src='images/bigbend.png' alt='bigbend' width='300px'/>").addTo(mymap),
    Biscayne = L.marker([25.483145, -80.255321]).bindPopup("<br/><img src='images/biscayne.png' alt='biscayne' width='300px'/>").addTo(mymap),
    BlackCanyon = L.marker([32.824790, -117.071470]).bindPopup("<br/><img src='images/blackcanyon.png' alt='blackcanyon' width='300px'/>").addTo(mymap),
    BryceCanyon = L.marker([37.627360, -112.185260]).bindPopup("<br/><img src='images/brycecanyon.png' alt='brycecanyon' width='300px'/>").addTo(mymap);
    CanyonLands = L.marker([37.903360, -110.360590]).bindPopup("<br/><img src='images/canyonlands.png' alt='canyonlands' width='300px'/>").addTo(mymap),
    CapitolReef = L.marker([37.827220, -111.079720]).bindPopup("<br/><img src='images/capitolreef.png' alt='capitolreef' width='300px'/>").addTo(mymap),
    Carlsbad = L.marker([32.723800, -104.089120]).bindPopup("<br/><img src='images/carlsbad.png' alt='carlsbad' width='300px'/>").addTo(mymap),
    Channel = L.marker([30.149720, -97.785490]).bindPopup("<br/><img src='images/channel.png' alt='channel' width='300px'/>").addTo(mymap),
    Congaree = L.marker([34.023730, -80.990580]).bindPopup("<br/><img src='images/congaree.png' alt='congaree' width='300px'/>").addTo(mymap),
    CraterLake = L.marker([43.056630, -122.283640]).bindPopup("<br/><img src='images/craterlake.png' alt='craterlake' width='300px'/>").addTo(mymap),
    Cuyahoga = L.marker([41.380080, -81.606690]).bindPopup("<br/><img src='images/cuyahoga.png' alt='cuyahoga' width='300px'/>").addTo(mymap),
    DeathValley = L.marker([36.538580, -117.213950]).bindPopup("<br/><img src='images/deathvalley.png' alt='deathvalley' width='300px'/>").addTo(mymap),
    Denali = L.marker([63.114799, -151.192612]).bindPopup("<br/><img src='images/denali.png' alt='denali' width='300px'/>").addTo(mymap),
    DryTortugas = L.marker([37.067160, -86.076270]).bindPopup("<br/><img src='images/drytortugas.png' alt='drytortugas' width='300px'/>").addTo(mymap),
    Everglades = L.marker([25.180450, -80.791908]).bindPopup("<br/><img src='images/everglades.png' alt='everglades' width='300px'/>").addTo(mymap),
    Gates = L.marker([67.78, -153.30]).bindPopup("<br/><img src='images/gatesof.png' alt='gates' width='300px'/>").addTo(mymap),
    Gateway = L.marker([38.63, -90.19]).bindPopup("<br/><img src='images/gatewayarch.png' alt='gatewayarch' width='300px'/>").addTo(mymap),
    Glacier = L.marker([48.80, -114.00]).bindPopup("<br/><img src='images/glacier.png' alt='glacier' width='300px'/>").addTo(mymap),
    GlacierBay = L.marker([58.50, -137.00]).bindPopup("<br/><img src='images/glacierbay.png' alt='glacierbay' width='300px'/>").addTo(mymap),
    GrandCanyon = L.marker([36.06, -112.14]).bindPopup("<br/><img src='images/grandcanyon.png' alt='grandcanyon' width='300px'/>").addTo(mymap),
    GrandTeton = L.marker([43.73, -110.80]).bindPopup("<br/><img src='images/grandteton.png' alt='grandteton' width='300px'/>").addTo(mymap),
    GreatBasin = L.marker([38.98, -114.30]).bindPopup("<br/><img src='images/greatbasin.png' alt='greatbasin' width='300px'/>").addTo(mymap),
    GreatSand = L.marker([37.73, -105.51]).bindPopup("<br/><img src='images/greatsanddunes.png' alt='greatsanddunes' width='300px'/>").addTo(mymap),
    GreatSmoky = L.marker([35.68, -83.53]).bindPopup("<br/><img src='images/greatsmoky.png' alt='greatsmoky' width='300px'/>").addTo(mymap),
    Guadalupe = L.marker([31.92, -104.87]).bindPopup("<br/><img src='images/guadalupe.png' alt='guadalupe' width='300px'/>").addTo(mymap);
    Haleakala = L.marker([20.72, -156.17]).bindPopup("<br/><img src='images/haleakala.png' alt='haleakala' width='300px'/>").addTo(mymap),
    Hawaii = L.marker([19.38, -155.20]).bindPopup("<br/><img src='images/hawaii.png' alt='hawaii' width='300px'/>").addTo(mymap),
    HotSprings = L.marker([34.51, -93.05]).bindPopup("<br/><img src='images/hotsprings.png' alt='hotsprings' width='300px'/>").addTo(mymap),
    Isle = L.marker([48.10, -88.55]).bindPopup("<br/><img src='images/isle.png' alt='isle' width='300px'/>").addTo(mymap),
    JoshTree = L.marker([33.79, -115.90]).bindPopup("<br/><img src='images/joshtree.png' alt='joshtree' width='300px'/>").addTo(mymap),
    Katmai = L.marker([58.50, -155.00]).bindPopup("<br/><img src='images/katmai.png' alt='katmai' width='300px'/>").addTo(mymap),
    Kenalifjords = L.marker([59.92, -149.65]).bindPopup("<br/><img src='images/kenalifjords.png' alt='kenalifjords' width='300px'/>").addTo(mymap),
    KingsCanyon = L.marker([36.80, -118.55]).bindPopup("<br/><img src='images/kingscanyon.png' alt='kingscanyon' width='300px'/>").addTo(mymap),
    KobukValley = L.marker([67.55, -159.28]).bindPopup("<br/><img src='images/kobukvalley.png' alt='kobukvalley' width='300px'/>").addTo(mymap),
    LakeClark = L.marker([60.97, -153.42]).bindPopup("<br/><img src='images/lakeclark.png' alt='lakeclark' width='300px'/>").addTo(mymap),
    Lassen = L.marker([40.49, -121.51]).bindPopup("<br/><img src='images/lassen.png' alt='lassen' width='300px'/>").addTo(mymap),
    Mammoth = L.marker([37.18, -86.10]).bindPopup("<br/><img src='images/mammoth.png' alt='mammoth' width='300px'/>").addTo(mymap),
    MesaVerde = L.marker([37.18, -108.49]).bindPopup("<br/><img src='images/mesaverde.png' alt='mesaverde' width='300px'/>").addTo(mymap),
    MountRainier = L.marker([46.85, -121.75]).bindPopup("<br/><img src='images/mountrainier.png' alt='mountrainier' width='300px'/>").addTo(mymap),
    NorthCascades = L.marker([48.70, -121.20]).bindPopup("<br/><img src='images/northcascades.png' alt='northcascades' width='300px'/>").addTo(mymap),
    Olympic = L.marker([47.97, -123.50]).bindPopup("<br/><img src='images/olympic.png' alt='olympic' width='300px'/>").addTo(mymap),
    Petrified = L.marker([35.07, -109.78]).bindPopup("<br/><img src='images/petrified.png' alt='petrified' width='300px'/>").addTo(mymap),
    Pinnacles = L.marker([36.48, -121.16]).bindPopup("<br/><img src='images/pinnacles.png' alt='pinnacles' width='300px'/>").addTo(mymap),
    Redwood = L.marker([41.30, -124.00]).bindPopup("<br/><img src='images/redwood.png' alt='redwood' width='300px'/>").addTo(mymap),
    RockyMts = L.marker([40.40, -105.58]).bindPopup("<br/><img src='images/rockymts.png' alt='rockymts' width='300px'/>").addTo(mymap),
    Saguaro = L.marker([32.25, -110.50]).bindPopup("<br/><img src='images/saguaro.png' alt='saguaro' width='300px'/>").addTo(mymap),
    Sequoia = L.marker([36.43, -118.68]).bindPopup("<br/><img src='images/sequoia.png' alt='sequoia' width='300px'/>").addTo(mymap),
    Shenandoah = L.marker([38.53, -78.35]).bindPopup("<br/><img src='images/shenandoah.png' alt='shenandoah' width='300px'/>").addTo(mymap),
    TR = L.marker([46.97, -103.45]).bindPopup("<br/><img src='images/TR.png' alt='TR' width='300px'/>").addTo(mymap),
    VirginIslands = L.marker([18.33, -64.73]).bindPopup("<br/><img src='images/virginislands.png' alt='virginislands' width='300px'/>").addTo(mymap),
    Voyageurs = L.marker([48.50, -92.88]).bindPopup("<br/><img src='images/voyageurs.png' alt='voyageurs' width='300px'/>").addTo(mymap),
    WindCave = L.marker([43.57, -103.48]).bindPopup("<br/><img src='images/windcave.png' alt='windcave' width='300px'/>").addTo(mymap),
    Wrangell = L.marker([61.00, -142.00]).bindPopup("<br/><img src='images/wrangell.png' alt='wrangell' width='300px'/>").addTo(mymap),
    Yellowstone = L.marker([44.60, -110.50]).bindPopup("<br/><img src='images/yellowstone.png' alt='yellowstone' width='300px'/>").addTo(mymap),
    Yosemite = L.marker([37.83, -119.50]).bindPopup("<br/><img src='images/yosemite.png' alt='yosemite' width='300px'/>").addTo(mymap),
    Zion = L.marker([37.30, -113.05]).bindPopup("<br/><img src='images/zion.png' alt='zion' width='300px'/>").addTo(mymap);
