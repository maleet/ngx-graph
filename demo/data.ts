import {id} from '../src/utils/id';
import {Graph, Node, Edge} from '../src';

export const countries = [
  'Abkhazia',
  'Afghanistan',
  'Akrotiri and Dhekelia',
  'Aland',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Ascension Island',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas, The',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central Africa Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote d\'lvoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'Gabon',
  'Cambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guemsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, N',
  'Korea, S',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Nagorno-Karabakh',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Cyprus',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcaim Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Sahrawi Arab Democratic Republic',
  'Saint-Barthelemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and Grenadines',
  'Samos',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'Somaliland',
  'South Africa',
  'South Ossetia',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Transnistria',
  'Trinidad and Tobago',
  'Tristan da Cunha',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Virgin Islands, British',
  'Virgin Islands, U.S.',
  'Wallis and Futuna',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

export function generateGraph(nodeCount: number): Graph {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  for (let i = 0; i < nodeCount; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    nodes.push({
      id: id(),
      label: country,
      data: {
        value: country
      }
    });
    for (let j = 0; j < nodes.length - 1; j++) {
      if (Math.random() < 0.7) {
        edges.push({
          id: id(),
          source: nodes[i].id,
          target: nodes[j].id,
          label: 'on success'
        });
      }
    }
  }
  return {edges, nodes};
}

const response = {
  Errors: [], Warnings: [], Informations: [], data: {
    Nodes: [{
      Label: 'Finished Item',
      Type: 7,
      Data: null,
      Id: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623'
    }, {
      Label: '3 MIN Rassolnik 500 g LÄTI X',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': '3MIN'}},
      Id: '371eeec6-ee96-42af-a0e5-004859f462c0'
    }, {
      Label: '3 MIN Rassolnik 500 g',
      Type: 3,
      Data: {
        Specs: {
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Supid',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.500,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 2.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '131',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2380.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 30.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 45.0
        }
      },
      Id: '78876d67-f390-4ce9-829f-aa72d0b54c96'
    }, {
      Label: 'R15150',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 500.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 13.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 1000.0
        }
      },
      Id: 'de00745f-7afc-462e-875d-391d1a635fcc'
    }, {
      Label: 'Muuti Öko Pirni-vaarikasmuuti 90 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31'
    }, {
      Label: 'MUUTI FANTTI Pirni-vaarikasmuuti 90 g',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 91.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.090,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '822'
        }
      },
      Id: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d'
    }, {
      Label: 'R5607',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 6667.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0
        }
      },
      Id: '1c03a972-3e36-48de-ab20-2650844258e6'
    }, {
      Label: 'Mangopüree hirsiga 130 g 4+',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '2542c730-4581-46c7-bbcd-005754048321'
    }, {
      Label: 'Mangopüree hirsiga 130 g 4+',
      Type: 3,
      Data: {
        Specs: {
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.130,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 8008.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, klaas',
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 35.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '617',
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.6,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 110.0
        }
      },
      Id: 'd32bef1f-5212-429d-a8fa-69547765b401'
    }, {
      Label: 'R5611',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 6154.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0
        }
      },
      Id: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87'
    }, {
      Label: 'Mustikamehu 240 ml 4+',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '35a77f94-6eb7-4290-a23c-00f2940c8b2d'
    }, {
      Label: 'Mustikamehu 240 ml 4+',
      Type: 3,
      Data: {
        Specs: {
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 100.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '602',
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 15.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.249,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 4060.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 10.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, klaas',
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.4
        }
      },
      Id: 'c8c681ff-2d41-4280-9316-e8b80a8994d8'
    }, {
      Label: 'R5547',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 3213.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0
        }
      },
      Id: '7531c872-2e16-4fec-8bb9-151aba4e08b0'
    }, {
      Label: 'Puuviljapuder 200 g 6+ GHANA',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4'
    }, {
      Label: 'Puuviljapuder 200 g 6+',
      Type: 3,
      Data: {
        Specs: {
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.6,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, klaas',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.200,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 45.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 5824.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 110.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '615'
        }
      },
      Id: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741'
    }, {
      Label: 'R5626',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 4000.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 40.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0
        }
      },
      Id: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b'
    }, {
      Label: 'Mustika-jogurtismuuti kinoahelvestega 170 g SMUSHIE SOOME',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Smuuti'}},
      Id: '2bae5113-7816-4d0a-84ee-0386d39c83b4'
    }, {
      Label: 'Mustika-jogurtismuuti kinoahelvestega 170 g SMUSHIE',
      Type: 3,
      Data: {
        Specs: {
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 101.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Täiskasvanutele vahepala',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.170,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.4,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '894-2',
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 1840.0
        }
      },
      Id: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea'
    }, {
      Label: 'R76022',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 40.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 4706.0
        }
      },
      Id: '42a45389-fa58-4b66-b696-3999999dbbb3'
    }, {
      Label: 'Mustasõstra-kookosesmuuti chia seemnetega 170 g SMUSHIE LÄTI',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Smuuti'}},
      Id: '71525f6f-bc47-4e96-a112-039485c3a83d'
    }, {
      Label: 'Mustasõstra-kookosesmuuti chia seemnetega 170 g SMUSHIE',
      Type: 3,
      Data: {
        Specs: {
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 101.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.170,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Täiskasvanutele vahepala',
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '894-1',
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 1840.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.4
        }
      },
      Id: '534b02aa-550a-4ed0-9c6d-a65f685f48a7'
    }, {
      Label: 'R76012',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 40.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 4706.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0
        }
      },
      Id: '96f77b88-9598-44be-9051-5215ef98148e'
    }, {
      Label: 'Öko Neljaviljapuder banaani ja mustikaga 110 g LÄTI',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '19908c58-b737-49c9-954e-0461d9a9ea74'
    }, {
      Label: 'Öko Neljaviljapuder banaani ja mustikaga 110 g (6 kuud)',
      Type: 3,
      Data: {
        Specs: {
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '855',
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 110.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.4,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.110,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 35.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0
        }
      },
      Id: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186'
    }, {
      Label: 'R55781',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 5455.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 70.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0
        }
      },
      Id: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5'
    }, {
      Label: 'Külmsupp "Suvi" 530 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Supid'}},
      Id: '9a4b3715-a481-4943-bb73-05cdb7fb10e8'
    }, {
      Label: 'Külmsupp "Suvi" 530 g',
      Type: 3,
      Data: {
        Specs: {
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '114',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.530,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 2.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Supid',
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 45.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 35.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2100.0
        }
      },
      Id: 'be0c1887-3906-42f1-b159-ec2e22e712fe'
    }, {
      Label: 'R1017',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 12.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 400.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 755.0
        }
      },
      Id: 'b22da52f-db32-4748-81cc-88f3f6aef0d9'
    }, {
      Label: 'Pirni-kiivismuuti spirulinaga 170 g SMUSHIE UKRAINA',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Smuuti'}},
      Id: '9977947e-9e5d-4598-a82c-05de27bf420b'
    }, {
      Label: 'Pirni-kiivismuuti spirulinaga 170 g SMUSHIE',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Täiskasvanutele vahepala',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.170,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 101.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.4,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 1840.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '894-4',
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0
        }
      },
      Id: '4db8239f-5427-4724-b168-0d17a11e2654'
    }, {
      Label: 'R7604',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 40.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 4706.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0
        }
      },
      Id: 'c17a968c-db50-4123-8e48-e70fca286d56'
    }, {
      Label: 'Öko Maasikasmuuti 110 g LÄTI',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: 'f654f353-6c58-4e9a-bd33-079bfa67196a'
    }, {
      Label: 'Öko Maasikasmuuti 110 g (6 kuud)',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.110,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '805-1',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 91.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0
        }
      },
      Id: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39'
    }, {
      Label: 'R55831',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 70.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 5455.0
        }
      },
      Id: '2b27654a-38e5-470a-86a3-6def6def6b29'
    }, {
      Label: 'MUUTI APINA Banaani-mustikasmuuti 90 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '170ce72a-5fc6-4d09-b628-084c835b7081'
    }, {
      Label: 'MUUTI APINA Banaani-mustikasmuuti 90 g',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '0',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.090,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 91.0
        }
      },
      Id: '69cf403e-b52e-411c-95ae-0bd76a709d0e'
    }, {
      Label: 'R5606',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 6667.0
        }
      },
      Id: '4271cbb7-bd18-4e30-8fb8-15629c9805a0'
    }, {
      Label: 'Pirkka Pirnipüree 90 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea'
    }, {
      Label: 'Pirkka Pirnipüree 90 g',
      Type: 3,
      Data: {
        Specs: {
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 91.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.090,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 20.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '802'
        }
      },
      Id: '8a3d72b8-38ff-490d-aba2-9b37624cfa39'
    }, {
      Label: 'R55711',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 6000.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0
        }
      },
      Id: '28a59937-e7dc-4908-8445-25f673c909cf'
    }, {
      Label: 'Ketšup 1 kg Salvest',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Ketšup'}},
      Id: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a'
    }, {
      Label: 'Ketšup 1 kg Salvest',
      Type: 3,
      Data: {
        Specs: {
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '0',
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 0.0,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Kastmed, plastpudel',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 1.000,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 0.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 0.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 0.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 0.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 0.0
        }
      },
      Id: 'ff1d099a-2284-4645-96ad-20ecd1c542ca'
    }, {
      Label: 'R4049',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 1100.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 2340.0
        }
      },
      Id: 'f0451703-79e6-4b21-ab63-a2a832b9babd'
    }, {
      Label: 'Sealihaga hapukapsaborš 530 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Supid'}},
      Id: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45'
    }, {
      Label: 'Sealihaga hapukapsaborš 530 g',
      Type: 3,
      Data: {
        Specs: {
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '107',
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 2.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 50.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 30.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.530,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Supid',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2100.0
        }
      },
      Id: 'b0257827-2a49-4259-b20c-3fbc1c826ea5'
    }, {
      Label: 'R1009',
      Type: 3,
      Data: {
        Specs: {
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 755.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 12.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 400.0
        }
      },
      Id: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7'
    }, {
      Label: 'Öko Kana-pastaroog 120 g LÄTI',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4'
    }, {
      Label: 'Öko Kana-pastaroog 120 g (8 kuud)',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, doypack',
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.6,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.120,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '859',
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 50.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 15.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 2500.0
        }
      },
      Id: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4'
    }, {
      Label: 'R55973',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 70.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 5000.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 600.0
        }
      },
      Id: '73712086-eaa5-4ac9-8a43-6b351c591df4'
    }, {
      Label: 'Aedvilja-nuudliroog kalkunilihaga 190 g 8+',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Lastetoit'}},
      Id: '2c29f766-c868-45cc-9ea3-0cefd86ec678'
    }, {
      Label: 'Aedvilja-nuudliroog kalkunilihaga 190 g 8+',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lastetoit, klaas',
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 30.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.190,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 20.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '612',
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 5824.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 2.2,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 50.0,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0
        }
      },
      Id: '47bb3c2c-6303-42b2-9530-12a7a441b3ec'
    }, {
      Label: 'R5535',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 85.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 4211.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 800.0
        }
      },
      Id: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f'
    }, {
      Label: 'Astelpajumoos (teenus) 320 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Allhange'}},
      Id: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5'
    }, {
      Label: 'Astelpajumoos (teenus) 320 g',
      Type: 3,
      Data: {
        Specs: {
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 3696.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 10.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.320,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Moosid ja püreed',
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '506',
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 90.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 15.0
        }
      },
      Id: '41617754-5e8b-4102-bea3-faa984ee8f90'
    }, {
      Label: 'R2001',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 875.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 2734.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0
        }
      },
      Id: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9'
    }, {
      Label: 'Maitselt mahe kurk 675 g',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Kurgid'}},
      Id: '73a162c2-4bf8-47c3-a675-0fa4f12b1762'
    }, {
      Label: 'Maitselt mahe kurk 675 g',
      Type: 3,
      Data: {
        Specs: {
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 1728.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 1.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 10.0,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 15.0,
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 20.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '451',
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 0.675,
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Marinaadiga tooted',
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 91.0
        }
      },
      Id: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19'
    }, {
      Label: 'R60025',
      Type: 3,
      Data: {
        Specs: {
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 35.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 1481.0,
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 1000.0
        }
      },
      Id: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d'
    }, {
      Label: 'Mulgipuder sealihaga 3.0 kg',
      Type: 3,
      Data: {Specs: {'2c442001-069d-4e77-a245-aa9959fc53d7': 'Suurköök'}},
      Id: 'dd6024a2-a449-4323-b3b3-1028c9330006'
    }, {
      Label: 'Mulgipuder sealihaga 3.0 kg',
      Type: 3,
      Data: {
        Specs: {
          '009c908f-3c2d-4dc3-af3d-02011d5771a6': 'Lõunatoidud',
          '87c66ca9-1b06-41ab-b637-ff0c6a1d6f8a': 75.0,
          '3fe2e60d-de02-4e3d-b30e-f7e642c11d4c': 100.0,
          'fe3cfa78-bed2-4874-baf1-543171ee252e': 3.000,
          '35ed98f7-fa5f-416d-8d18-a972bdab3db2': 120.0,
          'cf6626b7-aef0-4d1c-93a1-024e9ae5c21a': 400.0,
          '85fdcb26-b114-4f55-a1ca-b6706eae80be': 2.5,
          '26ed3535-72e4-444c-9fa2-370789bf4488': 40.0,
          'a5e161db-7567-4c4d-a8fb-dafb1ecae998': '728'
        }
      },
      Id: '8d685458-11f0-42c5-ba12-e25800a0a067'
    }, {
      Label: 'R3013',
      Type: 3,
      Data: {
        Specs: {
          'd11a4bf9-2a0e-438f-a228-8373ca33a2b2': 400.0,
          'd9ab5c6c-aee3-44fb-8ace-27da94f4fc50': 15.0,
          'a83b1e39-54bd-4576-a4bc-0f1550633595': 755.0
        }
      },
      Id: '1a7263df-b14d-426a-acd4-6bca2083ba7a'
    }],
    Links: [{
      SourceId: '371eeec6-ee96-42af-a0e5-004859f462c0',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '2542c730-4581-46c7-bbcd-005754048321',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '35a77f94-6eb7-4290-a23c-00f2940c8b2d',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '2bae5113-7816-4d0a-84ee-0386d39c83b4',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '71525f6f-bc47-4e96-a112-039485c3a83d',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '19908c58-b737-49c9-954e-0461d9a9ea74',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '9a4b3715-a481-4943-bb73-05cdb7fb10e8',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '9977947e-9e5d-4598-a82c-05de27bf420b',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: 'f654f353-6c58-4e9a-bd33-079bfa67196a',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '170ce72a-5fc6-4d09-b628-084c835b7081',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '2c29f766-c868-45cc-9ea3-0cefd86ec678',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '73a162c2-4bf8-47c3-a675-0fa4f12b1762',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: 'dd6024a2-a449-4323-b3b3-1028c9330006',
      TargetId: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623',
      Label: ''
    }, {
      SourceId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      TargetId: '371eeec6-ee96-42af-a0e5-004859f462c0',
      Label: ''
    }, {
      SourceId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      TargetId: '371eeec6-ee96-42af-a0e5-004859f462c0',
      Label: ''
    }, {
      SourceId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      TargetId: '371eeec6-ee96-42af-a0e5-004859f462c0',
      Label: ''
    }, {
      SourceId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      TargetId: '371eeec6-ee96-42af-a0e5-004859f462c0',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: 'de00745f-7afc-462e-875d-391d1a635fcc',
      TargetId: '78876d67-f390-4ce9-829f-aa72d0b54c96',
      Label: ''
    }, {
      SourceId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      TargetId: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31',
      Label: ''
    }, {
      SourceId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      TargetId: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31',
      Label: ''
    }, {
      SourceId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      TargetId: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31',
      Label: ''
    }, {
      SourceId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      TargetId: '86d6fd8e-e1cf-4e3b-81e7-0048eeda4b31',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: '1c03a972-3e36-48de-ab20-2650844258e6',
      TargetId: '92f74b45-71d4-4deb-bb7c-3e2d95972c2d',
      Label: ''
    }, {
      SourceId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      TargetId: '2542c730-4581-46c7-bbcd-005754048321',
      Label: ''
    }, {
      SourceId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      TargetId: '2542c730-4581-46c7-bbcd-005754048321',
      Label: ''
    }, {
      SourceId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      TargetId: '2542c730-4581-46c7-bbcd-005754048321',
      Label: ''
    }, {
      SourceId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      TargetId: '2542c730-4581-46c7-bbcd-005754048321',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: '1ae0320f-e38c-4a2d-a7e2-87b17f917c87',
      TargetId: 'd32bef1f-5212-429d-a8fa-69547765b401',
      Label: ''
    }, {
      SourceId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      TargetId: '35a77f94-6eb7-4290-a23c-00f2940c8b2d',
      Label: ''
    }, {
      SourceId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      TargetId: '35a77f94-6eb7-4290-a23c-00f2940c8b2d',
      Label: ''
    }, {
      SourceId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      TargetId: '35a77f94-6eb7-4290-a23c-00f2940c8b2d',
      Label: ''
    }, {
      SourceId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      TargetId: '35a77f94-6eb7-4290-a23c-00f2940c8b2d',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: '7531c872-2e16-4fec-8bb9-151aba4e08b0',
      TargetId: 'c8c681ff-2d41-4280-9316-e8b80a8994d8',
      Label: ''
    }, {
      SourceId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      TargetId: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4',
      Label: ''
    }, {
      SourceId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      TargetId: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4',
      Label: ''
    }, {
      SourceId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      TargetId: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4',
      Label: ''
    }, {
      SourceId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      TargetId: '28b0781a-24c5-4ecc-b1ea-01fd3ea17ea4',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '4ac41ab5-45c3-4f9f-970d-b7c0a6f2462b',
      TargetId: 'c8f3c9c4-c70e-4d2d-b7cf-532ab202d741',
      Label: ''
    }, {
      SourceId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      TargetId: '2bae5113-7816-4d0a-84ee-0386d39c83b4',
      Label: ''
    }, {
      SourceId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      TargetId: '2bae5113-7816-4d0a-84ee-0386d39c83b4',
      Label: ''
    }, {
      SourceId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      TargetId: '2bae5113-7816-4d0a-84ee-0386d39c83b4',
      Label: ''
    }, {
      SourceId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      TargetId: '2bae5113-7816-4d0a-84ee-0386d39c83b4',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '42a45389-fa58-4b66-b696-3999999dbbb3',
      TargetId: '3a1d2f8f-56ae-4b8f-bdc9-8dbb8cab4bea',
      Label: ''
    }, {
      SourceId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      TargetId: '71525f6f-bc47-4e96-a112-039485c3a83d',
      Label: ''
    }, {
      SourceId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      TargetId: '71525f6f-bc47-4e96-a112-039485c3a83d',
      Label: ''
    }, {
      SourceId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      TargetId: '71525f6f-bc47-4e96-a112-039485c3a83d',
      Label: ''
    }, {
      SourceId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      TargetId: '71525f6f-bc47-4e96-a112-039485c3a83d',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: '96f77b88-9598-44be-9051-5215ef98148e',
      TargetId: '534b02aa-550a-4ed0-9c6d-a65f685f48a7',
      Label: ''
    }, {
      SourceId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      TargetId: '19908c58-b737-49c9-954e-0461d9a9ea74',
      Label: ''
    }, {
      SourceId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      TargetId: '19908c58-b737-49c9-954e-0461d9a9ea74',
      Label: ''
    }, {
      SourceId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      TargetId: '19908c58-b737-49c9-954e-0461d9a9ea74',
      Label: ''
    }, {
      SourceId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      TargetId: '19908c58-b737-49c9-954e-0461d9a9ea74',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: '7d7211e8-3ac7-489f-b6c5-a875709fc2a5',
      TargetId: 'bf31fbf4-84f3-44a5-a104-281c7a6f8186',
      Label: ''
    }, {
      SourceId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      TargetId: '9a4b3715-a481-4943-bb73-05cdb7fb10e8',
      Label: ''
    }, {
      SourceId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      TargetId: '9a4b3715-a481-4943-bb73-05cdb7fb10e8',
      Label: ''
    }, {
      SourceId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      TargetId: '9a4b3715-a481-4943-bb73-05cdb7fb10e8',
      Label: ''
    }, {
      SourceId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      TargetId: '9a4b3715-a481-4943-bb73-05cdb7fb10e8',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: 'b22da52f-db32-4748-81cc-88f3f6aef0d9',
      TargetId: 'be0c1887-3906-42f1-b159-ec2e22e712fe',
      Label: ''
    }, {
      SourceId: '4db8239f-5427-4724-b168-0d17a11e2654',
      TargetId: '9977947e-9e5d-4598-a82c-05de27bf420b',
      Label: ''
    }, {
      SourceId: '4db8239f-5427-4724-b168-0d17a11e2654',
      TargetId: '9977947e-9e5d-4598-a82c-05de27bf420b',
      Label: ''
    }, {
      SourceId: '4db8239f-5427-4724-b168-0d17a11e2654',
      TargetId: '9977947e-9e5d-4598-a82c-05de27bf420b',
      Label: ''
    }, {
      SourceId: '4db8239f-5427-4724-b168-0d17a11e2654',
      TargetId: '9977947e-9e5d-4598-a82c-05de27bf420b',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: 'c17a968c-db50-4123-8e48-e70fca286d56',
      TargetId: '4db8239f-5427-4724-b168-0d17a11e2654',
      Label: ''
    }, {
      SourceId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      TargetId: 'f654f353-6c58-4e9a-bd33-079bfa67196a',
      Label: ''
    }, {
      SourceId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      TargetId: 'f654f353-6c58-4e9a-bd33-079bfa67196a',
      Label: ''
    }, {
      SourceId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      TargetId: 'f654f353-6c58-4e9a-bd33-079bfa67196a',
      Label: ''
    }, {
      SourceId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      TargetId: 'f654f353-6c58-4e9a-bd33-079bfa67196a',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '2b27654a-38e5-470a-86a3-6def6def6b29',
      TargetId: '0c0f3b1b-9994-47be-80e9-b0a413eb7e39',
      Label: ''
    }, {
      SourceId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      TargetId: '170ce72a-5fc6-4d09-b628-084c835b7081',
      Label: ''
    }, {
      SourceId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      TargetId: '170ce72a-5fc6-4d09-b628-084c835b7081',
      Label: ''
    }, {
      SourceId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      TargetId: '170ce72a-5fc6-4d09-b628-084c835b7081',
      Label: ''
    }, {
      SourceId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      TargetId: '170ce72a-5fc6-4d09-b628-084c835b7081',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '4271cbb7-bd18-4e30-8fb8-15629c9805a0',
      TargetId: '69cf403e-b52e-411c-95ae-0bd76a709d0e',
      Label: ''
    }, {
      SourceId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      TargetId: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea',
      Label: ''
    }, {
      SourceId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      TargetId: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea',
      Label: ''
    }, {
      SourceId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      TargetId: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea',
      Label: ''
    }, {
      SourceId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      TargetId: '21bf70aa-0faf-4d13-bac5-0a45cb0447ea',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: '28a59937-e7dc-4908-8445-25f673c909cf',
      TargetId: '8a3d72b8-38ff-490d-aba2-9b37624cfa39',
      Label: ''
    }, {
      SourceId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      TargetId: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a',
      Label: ''
    }, {
      SourceId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      TargetId: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a',
      Label: ''
    }, {
      SourceId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      TargetId: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a',
      Label: ''
    }, {
      SourceId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      TargetId: '9a2a736f-eec3-4d7c-9fc8-0afe6d75049a',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'f0451703-79e6-4b21-ab63-a2a832b9babd',
      TargetId: 'ff1d099a-2284-4645-96ad-20ecd1c542ca',
      Label: ''
    }, {
      SourceId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      TargetId: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45',
      Label: ''
    }, {
      SourceId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      TargetId: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45',
      Label: ''
    }, {
      SourceId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      TargetId: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45',
      Label: ''
    }, {
      SourceId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      TargetId: '619e6c38-0a68-4f9b-abc4-0c0a6b6b1a45',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f6842eb8-d60f-4cb4-9782-9e6ec3e9a1b7',
      TargetId: 'b0257827-2a49-4259-b20c-3fbc1c826ea5',
      Label: ''
    }, {
      SourceId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      TargetId: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4',
      Label: ''
    }, {
      SourceId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      TargetId: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4',
      Label: ''
    }, {
      SourceId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      TargetId: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4',
      Label: ''
    }, {
      SourceId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      TargetId: 'cc96ef3b-6d11-4147-9ea6-0c57138bccc4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '73712086-eaa5-4ac9-8a43-6b351c591df4',
      TargetId: 'f9cbceee-d292-47c1-9f82-43cd3963dbf4',
      Label: ''
    }, {
      SourceId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      TargetId: '2c29f766-c868-45cc-9ea3-0cefd86ec678',
      Label: ''
    }, {
      SourceId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      TargetId: '2c29f766-c868-45cc-9ea3-0cefd86ec678',
      Label: ''
    }, {
      SourceId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      TargetId: '2c29f766-c868-45cc-9ea3-0cefd86ec678',
      Label: ''
    }, {
      SourceId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      TargetId: '2c29f766-c868-45cc-9ea3-0cefd86ec678',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '8bb5c8f3-dc13-4058-9d23-7bfe8ae6ad9f',
      TargetId: '47bb3c2c-6303-42b2-9530-12a7a441b3ec',
      Label: ''
    }, {
      SourceId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      TargetId: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5',
      Label: ''
    }, {
      SourceId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      TargetId: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5',
      Label: ''
    }, {
      SourceId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      TargetId: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5',
      Label: ''
    }, {
      SourceId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      TargetId: '07de9291-1f8d-4a20-9d01-0e4fd9b89ce5',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: '1c2e796c-c034-499c-ad0b-fcc1ef5086e9',
      TargetId: '41617754-5e8b-4102-bea3-faa984ee8f90',
      Label: ''
    }, {
      SourceId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      TargetId: '73a162c2-4bf8-47c3-a675-0fa4f12b1762',
      Label: ''
    }, {
      SourceId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      TargetId: '73a162c2-4bf8-47c3-a675-0fa4f12b1762',
      Label: ''
    }, {
      SourceId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      TargetId: '73a162c2-4bf8-47c3-a675-0fa4f12b1762',
      Label: ''
    }, {
      SourceId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      TargetId: '73a162c2-4bf8-47c3-a675-0fa4f12b1762',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: 'b78cc2b7-3d8d-4796-bd78-3f15a8046d7d',
      TargetId: 'b502187f-ac0e-4dd7-ae1d-d67c3e0b2f19',
      Label: ''
    }, {
      SourceId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      TargetId: 'dd6024a2-a449-4323-b3b3-1028c9330006',
      Label: ''
    }, {
      SourceId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      TargetId: 'dd6024a2-a449-4323-b3b3-1028c9330006',
      Label: ''
    }, {
      SourceId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      TargetId: 'dd6024a2-a449-4323-b3b3-1028c9330006',
      Label: ''
    }, {
      SourceId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      TargetId: 'dd6024a2-a449-4323-b3b3-1028c9330006',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {
      SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a',
      TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067',
      Label: ''
    }, {SourceId: '1a7263df-b14d-426a-acd4-6bca2083ba7a', TargetId: '8d685458-11f0-42c5-ba12-e25800a0a067', Label: ''}],
    Id: 'fdb7f2bd-28a0-4f00-b502-8d9c1df4b623'
  }, status: 200, IsValid: true
};

export const tree = {
  Nodes: [{
    label: '4743302110751: NI 1600 Siseliide',
    Type: 3,
    id: 'd3844c66-8e9d-4b24-b636-564f3929e169'
  }, {label: '10: Joonkeevitamine', Type: 2, id: '53c0f213-7599-42ac-9ab2-014bc497e2d6'}, {
    label: '2M10',
    Type: 1,
    id: '2f8c9522-5f89-4def-89f7-5083917ecbbb'
  }, {label: '3003: Soutec VSTW HG 1270', Type: 4, id: '23e393bc-b309-4a79-bacd-919783eb2f0c'}, {
    label: '2S10',
    Type: 1,
    id: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe'
  }, {label: 'T090: Suurte põlvede koostamine', Type: 4, id: 'd6b679d7-c088-4ae8-92e0-7d5ef74616b7'}, {
    label: 'Mat1',
    Type: 0,
    id: '740b956a-f61c-45b8-a3b7-6bdaf16251fb'
  }, {
    label: 'AA7D7FD144FD73A866918E294616F50D: PL_NI 1600',
    Type: 3,
    id: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab'
  }, {label: '10: Lõikamine', Type: 2, id: '74b532c9-a43d-4358-8876-eb5c78b470a2'}, {
    label: 'M20',
    Type: 1,
    id: '3f504f88-2977-4f0b-847d-79eb3e69e34b'
  }, {label: '2865: Forstner, RM-MST-TSS 1500', Type: 4, id: '0fa9600a-ddc3-4cb0-ad2f-bc1bbfe59a58'}, {
    label: 'S20',
    Type: 1,
    id: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9'
  }, {label: 'M050: Lõikeliin', Type: 4, id: '50b2ee46-0494-478e-88fc-f0b894a06755'}, {
    label: 'Mat80',
    Type: 0,
    id: '12fc601d-638d-4e1f-a89d-e2f01ade79dc'
  }, {
    label: '4743302699447: DX51D+ Zn275 MAE 1,0x1250mm (Desired thickness 0,95mm) Galvanised steel',
    Type: 3,
    id: 'eef4d49c-c9a2-4ec4-a0a2-5b4be6691ede'
  }, {label: '20: Tihendi paigaldus', Type: 2, id: '645b5be1-c590-4782-b531-a3cc086dd8ee'}, {
    label: 'M1',
    Type: 1,
    id: '00b6923a-e854-4da2-8221-4405b671205f'
  }, {
    label: '3016: Spiro Fitting shaper 1250',
    Type: 4,
    id: '6caaef0d-34ab-4acf-9446-72cf44d65cf6'
  }, {label: '1036: Spiro Fitting shaper 5013', Type: 4, id: 'b89e33bb-e16c-413a-b1f2-8a0bc1a7074f'}, {
    label: 'S1',
    Type: 1,
    id: 'c0e7505d-58f3-4319-ba95-88412014c4d1'
  }, {label: 'T090: Suurte põlvede koostamine', Type: 4, id: 'caf17704-22fc-4641-8b46-408759a1ae39'}, {
    label: 'Mat14',
    Type: 0,
    id: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0'
  }, {
    label: '4743302660713: E-tüüpi tihend EPDM-70  Black D=1600',
    Type: 3,
    id: '7af24a49-e26e-40d9-b5d4-0f11bc60b3e1'
  }],
  Edges: [
    {
      source: 'd3844c66-8e9d-4b24-b636-564f3929e169',
      target: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
      label: ''
    },
    {
      source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
      target: '2f8c9522-5f89-4def-89f7-5083917ecbbb',
      label: ''
    },
    {
      source: '2f8c9522-5f89-4def-89f7-5083917ecbbb',
      target: '23e393bc-b309-4a79-bacd-919783eb2f0c',
      label: ''
    }, {
      source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
      target: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe',
      label: ''
    }, {
      source: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe',
      target: 'd6b679d7-c088-4ae8-92e0-7d5ef74616b7',
      label: ''
    }, {
      source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
      target: '740b956a-f61c-45b8-a3b7-6bdaf16251fb',
      label: ''
    }, {
      source: '740b956a-f61c-45b8-a3b7-6bdaf16251fb',
      target: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab',
      label: ''
    }, {
      source: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab',
      target: '74b532c9-a43d-4358-8876-eb5c78b470a2',
      label: ''
    }, {
      source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
      target: '3f504f88-2977-4f0b-847d-79eb3e69e34b',
      label: ''
    }, {
      source: '3f504f88-2977-4f0b-847d-79eb3e69e34b',
      target: '0fa9600a-ddc3-4cb0-ad2f-bc1bbfe59a58',
      label: ''
    }, {
      source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
      target: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9',
      label: ''
    }, {
      source: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9',
      target: '50b2ee46-0494-478e-88fc-f0b894a06755',
      label: ''
    }, {
      source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
      target: '12fc601d-638d-4e1f-a89d-e2f01ade79dc',
      label: ''
    }, {
      source: '12fc601d-638d-4e1f-a89d-e2f01ade79dc',
      target: 'eef4d49c-c9a2-4ec4-a0a2-5b4be6691ede',
      label: ''
    }, {
      source: 'd3844c66-8e9d-4b24-b636-564f3929e169',
      target: '645b5be1-c590-4782-b531-a3cc086dd8ee',
      label: ''
    }, {
      source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
      target: '00b6923a-e854-4da2-8221-4405b671205f',
      label: ''
    }, {
      source: '00b6923a-e854-4da2-8221-4405b671205f',
      target: '6caaef0d-34ab-4acf-9446-72cf44d65cf6',
      label: ''
    }, {
      source: '00b6923a-e854-4da2-8221-4405b671205f',
      target: 'b89e33bb-e16c-413a-b1f2-8a0bc1a7074f',
      label: ''
    }, {
      source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
      target: 'c0e7505d-58f3-4319-ba95-88412014c4d1',
      label: ''
    }, {
      source: 'c0e7505d-58f3-4319-ba95-88412014c4d1',
      target: 'caf17704-22fc-4641-8b46-408759a1ae39',
      label: ''
    }, {
      source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
      target: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0',
      label: ''
    },
    {source: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0', target: '7af24a49-e26e-40d9-b5d4-0f11bc60b3e1', label: ''}
  ],
  id: 'd3844c66-8e9d-4b24-b636-564f3929e169'
};

export function getSampleData() {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  response.data.Nodes.map(value => {
    nodes.push({
      id: value.Id,
      label: value.Label,
      data: value.Data
    });
  });

  response.data.Links.map(value => {
    edges.push({
      id: id(),
      source: value.SourceId,
      target: value.TargetId,
      label: value.Label
    });
  });

  return {
    Nodes: nodes,
    Edges: edges
  };
}