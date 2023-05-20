///////////////////

import { DevGroup } from "@sismo-core/sismo-connect-react";

// Replace with your address to become eligible for the airdrops
export const yourAddress = ""; // <--- Replace with your address

///////////////////

export const devGroups = [
  {
    // Group Safe
    groupId: "0x3497b46c5dcd30bf8ee001fe3fdd0acd",
    data: [
      // your address is added here so you can test the airdrops
      // yourAddress,
      "0x2b9b9846d7298e0272c61669a54f0e602aba6290",
      "0xb01ee322c4f028b8a6bfcd2a5d48107dc5bc99ec",
      "0x938f169352008d35e065F153be53b3D3C07Bcd90",
    ],
  },
  {
    // Gitcoin Passport group : https://factory.sismo.io/groups-explorer?search=0x1cde61966decb8600dfd0749bd371f12
    groupId: "0x1cde61966decb8600dfd0749bd371f12",
    // data can also be an object with the address as key and the score as value
    // here we give a score to 15 to all addresses to be eligible in the tutorial
    data: {
      // your address is added here so you can test the airdrops
      [yourAddress]: 15,
      "0x2b9b9846d7298e0272c61669a54f0e602aba6290": 15,
      "0xb01ee322c4f028b8a6bfcd2a5d48107dc5bc99ec": 15,
      "0x938f169352008d35e065F153be53b3D3C07Bcd90": 15,
    },
  },
] as DevGroup[];
