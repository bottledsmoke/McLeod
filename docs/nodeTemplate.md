S T A R T &nbsp; U P

Test
- **Name:** Get initial state.
- **Test:** Fetch state from localStorage. If fails, try a database.
- **Result:** No state in either. Set App to Initial State.


# C R E A T E &nbsp; I N I T I A L &nbsp;  S T A T E

1. Add Potential Node

**Test**
  Name: No Overlaps
  Test: No active node in columns[0][DI - 1, DI, DI + 1]
  Result: There are no nodes. Set to Initial State.

**Data**
columns: [
  [N1]
]

1C - Clean Up Surrounding Area
columns: [
  ['N1L0',  null,   'N1',   null,  'N1L4'],
  [ null,  'N1L1', 'N1L2', 'N1L3',  null ]
]

2A
columns: [
  [ 'N2',  null,   'N1',   null,  'N1L4'],
  [ null, 'N1L1', 'N1L2', 'N1L3',  null ]
]

2B
columns: [
  ['N2L0', null,   'N2',   null,   'N1',   null, 'N1L4'],
  [ null, 'N2L1', 'N2L2', 'N1L1', 'N1L2', 'N1L3', null ]
]

3A
columns: [
  ['N2L0', null, 'N2', null,  'N1',   null, 'N1L4' ],
  [ null,  null, 'N3', null, 'N1L2', 'N1L3', null  ],
]

3B
columns: [
  ['N2L0', null,   'N2',   null,   'N1',   null, 'N1L4'],
  ['N3L0', null,   'N3',   null,  'N1L2', 'N1L3', null ],
  [ null, 'N3L1', 'N3L2', 'N3L3',  null,   null,  null ],
]

4A
columns: [
  ['N2L0', null,   'N2',   null,   'N1',   null, 'N1L4'],
  ['N3L0', null,   'N3',   null,  'N1L2', 'N1L3', null ],
  [ null, 'N3L1',  null,  'N4',   null,   null,  null ],
]

4B
columns: [
  ['N2L0', null,   'N2',   null,   'N1',   null, 'N1L4'],
  ['N3L0', null,   'N3',   null,  'N1L2', 'N1L3', null ],
  [ null, 'N3L0',  null,   'N4',   null,  'N4L4', null ],
  [ null,  null,  'N4L1', 'N4L2', 'N4L3',  null,  null ]
]

5A


5B

--------------------------------------------------------------------------------

1st columns = [[N1]]

2nd columns = [['N1L0', null,   'N1',   null, 'N1L4'],
               [ null, 'N1L1', 'N1L2', 'N1L3', null ]]

3rd columns = [['N2L0', null,   'N2',   null,   'N1',   null, 'N1L4' ],
               [ null, 'N2L1', 'N2L2', 'N1L1', 'N1L2', 'N1L3', null ]]

4TH COLUMNS = [
  ['N2L0', null,   'N2',   null,   'N1',   null,   'N3',   null, 'N3L4'],
  [ null, 'N2L1', 'N2L2', 'N1L1', 'N1L2', 'N1L3', 'N3L2', 'N3L3', null ]
];

5TH COLUMNS = [
  ['N2L0', null,   'N2',  null,   'N1',   null,  'N3',   null, 'N3L4'],
  [ null, 'N2L1', 'N2L2', null,   'N4',   null, 'N3L2', 'N3L3', null ],
  [ null,  null,   null, 'N4L1', 'N4L2', 'N4L3', null,   null,  null ]
];
