# State = {

### Nodes: [

#### {Node}  

### ],

### EditingIndex: String
> 'id of node being edited'

# }

### Rules
- There must always be an empty node at the end of each row, and an empty node above and below each node of the longest row.
- If there is only one row, it is the longest row, so it will always have empty nodes above and below each of its nodes as well as an empty node at the end of the row.

      Node: {
        id: '18b580cf-f908-4255-8924-f28201f78287',
        text: The quick brown fox,
        links: {
          
        }
      }

      // Option 1: Array Position Determines Layout
      State: {
        Nodes: [       // All Nodes
          [null, null, null, null, null, null],
          [            // Row 1
            {          // Row 1, Node 1
              id:   '18b580cf-f908-4255-8924-f28201f78287',
              text: 'The quick brown fox',
              connections:
            },
            null,      // Empty Node
            null,      // Empty Node
            null,      // Empty Node
            {          // Row 1, Node 5
              id:   '14887133-7559-4a3b-80cd-f3fa3696dc56',
              text: 'Jumps over',
            },
            null,      // Row 1, Node 6 (Empty)
          ],
          [            // Row 2
            null,      // Row 2, Node 1 (Empty)
            null,      // Row 2, Node 2 (Empty)
            null,      // Row 2, Node 3 (Empty)
            {          // Row 2, Node 4
              id:   '367092bf-e2ba-4154-be05-e2979abe6426',
              text: 'the lazy dog',
            },
            null,      // Row 2, Node 5 (Empty)
            null,      // Row 2, Node 6 (Empty)
          ]
        ],
        EditingIndex: '367092bf-e2ba-4154-be05-e2979abe6426' // id of node being edited
      }

      // Option 2: Store Nodes in Object, Store Layout in Array.
      State: {
        Layout: [
          [
            null, '14887133-7559-4a3b-80cd-f3fa3696dc56', null
          ],
          [
            '18b580cf-f908-4255-8924-f28201f78287', null, null
          ],
          [
            null, '367092bf-e2ba-4154-be05-e2979abe6426', null
          ]
        ],
        Nodes: {
          '18b580cf-f908-4255-8924-f28201f78287': {
            text: 'The quick brown fox',
          },
          '14887133-7559-4a3b-80cd-f3fa3696dc56': {
            text: 'Jumps over',
          },
          '367092bf-e2ba-4154-be05-e2979abe6426': {
            text: 'The Lazy dog'
          }
        },
        EditingIndex: '367092bf-e2ba-4154-be05-e2979abe6426' // id of node being edited
      }
