import { StaticImageData } from "next/image";

export interface CertificationItem {
  id: number;
  name: string;
  image: string | StaticImageData;
  desc: string;
  download: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 1,
    name: "Bitlearn Bootcamp",
    image: "/images/BitlearnBatch2.png",
    desc: "Bitlearn Bootcamp: Laravel & SQL Class",
    download: "/documents/BitlearnBatch2.pdf"
  },
  {
    id: 2,
    name: "Cetta Japanese",
    image: "/images/Cetta Japanese Elementary Certificate.png",
    desc: "Elementary Level Cetta Japanese Class",
    download: "/documents/Cetta Japanese Elementary Certificate.pdf"
  },
  {
    id: 3,
    name: "Sakura Fubuki",
    image: "/images/JepangBasic0SakuraFubuki.jpg",
    desc: "Basic 0 Level Sakura Fubuki Japan Course",
    download: "/documents/JepangBasic0SakuraFubuki.pdf"
  },
  {
    id: 4,
    name: "Persatuan Insinyur Indonesia",
    image: "/images/PII.jpg",
    desc: "Seminar About Usage of Machine Learning Algorithm for Network Forensics Investigation",
    download: "/documents/PII.pdf"
  },
  {
    id: 5,
    name: "HackerRank",
    image: "/images/sql_basic certificate.jpg",
    desc: "HackerRank SQL Basic Certificate",
    download: "/documents/sql_basic certificate.pdf"
  },
];