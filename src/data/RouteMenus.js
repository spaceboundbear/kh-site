const RouteMenus = [
  {
    town: 'Traverse Town',
    notes:
      'After Equipping Dodge Roll, Get Blue Trinity (1) at World Entrance and Blue Trinity (2) at Cafe (Contains Postcard 1)',
    menus: [
      {
        id: 1,
        when: 'After You Get Dodge Roll',
        list: [
          {
            option: 'Items',
            instr: "Give Goofy's Ether to Sora",
          },
          {
            option: 'Equipment',
            instr: 'Sora: Equip Brave Warrior over Ribbon',
          },
        ],
      },
    ],
  },
  {
    town: 'Traverse Town II',
    menus: [
      {
        id: 1,
        when: 'After You Get Dodge Roll',
        list: [
          {
            option: 'Items',
            instr: "Give Goofy's Ether to Sora",
          },
          {
            option: 'Equipment',
            instr: 'Sora: Equip Brave Warrior over Ribbon',
          },
        ],
      },
    ],
  },
];
