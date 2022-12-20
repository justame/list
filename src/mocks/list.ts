import { Node } from "../types";

const list: Node[] = [
  {
    id: "folder1",
    children: [
      {
        id: "yaron"
      },
      {
        id: "folder 2",
        children: []
      },
      {
        id: "folder 3",
        children: [
          {
            id: "moshe.txt"
          },
          {
            id: "david.mp3"
          },
          {
            id: "doron.png"
          },
          {
            id: "folder 4",
            children: [
              {
                id: "jackie.png"
              },
              {
                id: "sarah.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "zoo images folder",
    children: [
      {
        id: "cat.png"
      },
      {
        id: "dog.png"
      }
    ]
  }
];

export { list };
