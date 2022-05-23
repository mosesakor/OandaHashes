import icon05 from "@/assets/icon05.svg";
import icon06 from "@/assets/icon06.svg";
import icon07 from "@/assets/icon07.svg";

export interface PackageInfo {
  type: string;
  img: string;
  level: string;
  duration: string;
  profit: string;
  hashes: string;
  price: number;
  btc: number;
}

const PackageData = [
  {
    type: "Silver 1",
    img: icon05,
    level: "Silver",
    duration: "2 months",
    profit: "≈9.00$",
    hashes: "53684 GH/s",
    price: 490,
    btc: 0.012334,
  } as PackageInfo,
  {
    type: "Silver 2",
    img: icon05,
    level: "Silver",
    duration: "2 months",
    profit: "≈27.28$",
    hashes: "162669 GH/s",
    price: 1550,
    btc: 0.038993,
  } as PackageInfo,
  {
    type: "Gold 1",
    img: icon05,
    level: "Gold",
    duration: "2 months",
    profit: "≈45.46$",
    hashes: "262369 GH/s",
    price: 2500,
    btc: 0.062892,
  } as PackageInfo,
  {
    type: "Gold 2",
    img: icon05,
    level: "Gold",
    duration: "2 months",
    profit: "≈81.00$",
    hashes: "483159 GH/s",
    price: 4700,
    btc: 0.118236,
  } as PackageInfo,
  {
    type: "Platinum 1",
    img: icon06,
    level: "Platinum",
    duration: "4 months",
    profit: "≈80.47$",
    hashes: "480000 GH/s",
    price: 6200,
    btc: 0.156289,
  } as PackageInfo,
  {
    type: "Platinum 2",
    img: icon06,
    level: "Platinum",
    duration: "4 months",
    profit: "≈120.71$",
    hashes: "720000 GH/s",
    price: 9400,
  } as PackageInfo,
  {
    type: "Diamond 1",
    img: icon07,
    level: "Diamond",
    duration: "4 months",
    profit: "≈161.80$",
    hashes: "965106 GH/s",
    price: 12600,
  } as PackageInfo,
  {
    type: "Diamond 2",
    img: icon07,
    level: "Diamond",
    duration: "4 monthd",
    profit: "≈241.41$",
    hashes: "1440000 GH/s",
    price: 18800,
    btc: 0.473575,
  } as PackageInfo,
];

export default PackageData;
