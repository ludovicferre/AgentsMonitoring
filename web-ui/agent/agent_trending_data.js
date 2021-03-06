var core_options = { title: 'Altiris Agent (7.1.15451.8460)' };
var inv_options = { title: 'Inventory Agent (7.1.7875)' };
var sua_options = { title: 'Software Update Agent (7.1.7875)' };
var swm_options = { title: 'Software Management Agent (7.1.7858)' };

var candlestick_allagents_options = {legend:'none', title:'Agents installed'}
var candlestick_outagents_options = {legend:'none', title:'Agents to upgrade'};

var agent_gauge_table = [
	['Label', 'Value'],
	['Core', 96.58],
	['Inv.', 95.85],
	['Patch', 94.17],
	['Soft.', 96.22]
];

var core_table = [
	['Date', 'Agent #', 'OK', 'NOK'],
	['2014-02-25', 13271, 12428, 443],
	['2014-02-26', 13292, 12494, 398],
	['2014-02-27', 13296, 12558, 338],
	['2014-02-28', 13289, 12586, 303],
	['2014-03-01', 13248, 12584, 264],
	['2014-03-02', 13242, 12833, 259]
];
var inv_table = [
	['Date', 'Agent #', 'OK', 'NOK'],
	['2014-02-25', 12135, 11168, 567],
	['2014-02-26', 13162, 12247, 515],
	['2014-02-27', 13178, 12308, 470],
	['2014-02-28', 13178, 12342, 436],
	['2014-03-01', 13137, 12337, 400],
	['2014-03-02', 13146, 12352, 394]
];
var sua_table = [
	['Date', 'Agent #', 'OK', 'NOK'],
	['2014-02-25',12966,11665, 801],
	['2014-02-26',12984,11729, 855],
	['2014-02-27',12968,11788, 780],
	['2014-02-28',12964,11818, 746],
	['2014-03-01',12943,11833, 710],
	['2014-03-02',12937,11833, 704]
]
var swm_table = [
	['Date', 'Agent #', 'OK', 'NOK'],
	['2014-02-25', 13130, 12184, 446],
	['2014-02-26', 13149, 12248, 401],
	['2014-02-27', 13264, 12453, 311],
	['2014-02-28', 13260, 12492, 268],
	['2014-03-01', 13219, 12486, 233],
	['2014-03-02', 13213, 12486, 227]
]

var candlestick_agent_table = [
	['Core', 13242, 13248, 13242, 13296],
	['Inv.', 12135, 13137, 13146, 13178],
	['Patch', 12937, 12943, 12937, 12984],
	['Soft.', 13130, 13219, 13213, 13264]
];
var candlestick_agent_outdated_table = [
	['Core', 659, 664, 659, 843],
	['Inv.', 794, 800, 794, 967],
	['Patch', 1104, 1110, 1104, 1301],
	['Soft.', 727, 733, 727, 946]
];
