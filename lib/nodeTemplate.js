/*

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

*/

const nodeTemplate = [
  [ 'P', null, 'N', null, 'P'  ],
  [ 'A', 'P', 'P', 'P',  'A' ]
];

const cols = [
  [ '2L0', null,  'N2', null,  'N1', null,  'N3', null, '3L4' ],
  [ null, '2L1', '2L2', '1L1', '1L2', '1L3', '3L2', '3L3', null ],
];

function activateNode(columns, columnIndex, nodeIndex) {
  // if (!columns[columnIndex] || !columns[columnIndex][nodeIndex]) {
  //   throw new Error('Node does not exist at this location');
  // }

  const longestColumn = getLongestColumn(columns, nodeTemplate[0].length);
  const templateLength = nodeTemplate[0].length;
  const templateOffset = (templateLength - 1) / 2;
  const sourceColumn = columns[columnIndex];
  const nextColumn = columns[columnIndex + 1] || [...Array(longestColumn)];

  // let nodesBefore = [];
  // let nodesAfter = [];

  // number of nodes that need to be added to the beginning of all other columns
  if (nodeIndex < 2) {
    // nodesBefore = [...Array(2 - nodeIndex)];
    console.log('Column offset index is ' + (2 - nodeIndex));
  }

  // number of nodes that need to be added to the end of all other columns.
  if (longestColumn - nodeIndex - 1 < 2) {
    // nodesAfter = [...Array(templateOffset - (
    //                        longestColumn - nodeIndex - 1))];
    console.log('Column offset index is ' + (
      templateOffset - (longestColumn - nodeIndex - 1
    )));
  }

  return [
    ...columns.slice(0, columnIndex), // fix short column here

    sourceColumn.slice(0, nodeIndex - templateOffset > 0 ?
                          nodeIndex - templateOffset :
                          0).concat(
      // Factor out into addNode function
        [...Array(templateLength)].map((v, i) => {
          switch (nodeTemplate[0][i]) {
            case 'P':
              return sourceColumn[nodeIndex + i - 2] || 'P' + i;
            case 'N':
              return 'New';
            case null:
              return null;
          }
        })
      // End factoring out
    ).concat(sourceColumn.slice(nodeIndex + templateOffset + 1)),

    nextColumn.slice(0, nodeIndex - templateOffset > 0 ?
                        nodeIndex - templateOffset :
                        0).concat(
      [...Array(templateLength)].map((v, i) => {
        switch (nodeTemplate[1][i]) {
          case 'P':
            return nextColumn[nodeIndex - templateOffset + i] || 'P' + i;
          case 'N':
            return 'New';
          case 'A':
            return nextColumn[nodeIndex - templateOffset + i] || null;
          case null:
            return null;
        }
        return nodeTemplate[1][i] || nextColumn[nodeIndex + i - 2] ?
               nextColumn[nodeIndex + i - 2] || 'P' + i :
               null;
      })
    ).concat(nextColumn.slice(nodeIndex + templateOffset + 1)),

    // fix potential short column here
    ...columns.slice(columnIndex + nodeTemplate.length)
  ];
}

console.log(
  cols,
  activateNode(cols, 0, 2) // col[0] is now one node short.
);

function getLongestColumn(columns, minLength = 0) {
  let longestColumn = minLength;
  for (var i = 0; i < columns.length; i++ ) {
    longestColumn = columns[i].length > longestColumn ?
                    columns[i].length :
                    longestColumn;
  }
  return longestColumn;
}
