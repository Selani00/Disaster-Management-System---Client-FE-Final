import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlinePrinter } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";


import AppStore from "../../../assets/Footer/AppStore.png"
import PlayStore from "../../../assets/Footer/Playstore.png"

export const contacts_map = [
  {
    icon: LuPhoneCall,
    link: "www.google.com",
    content: "+94 112 136 222  /+94 112 670 002",
  },
  { icon: HiOutlinePrinter, link: "www.google.com", content: "+94 11 2670079" },
  {
    icon: MdOutlineMailOutline,
    link: "www.google.com",
    content: "dmc@gmail.com",
  },
  {
    icon: IoLocationOutline,
    link: "www.google.com",
    content: "120/2,Vidya Mawatha, Colombo 07, Sri Lanka",
  },
];

export const webLinks_map = [
  {
    link: "https://www.redcross.lk/",
    content: "Sri  Lanka Red Cross Society",
  },
  {
    link: "https://www.meteo.gov.lk/index.php?option=com_content&lang=en",
    content: "Department of Meteorology",
  },
  {
    link: "https://hpb.health.gov.lk/en",
    content: "Health Promotion Bureau",
  },
  {
    link: "https://www.police.lk/",
    content: "Sri Lanka Police",
  },
  {
    link: "https://www.army.lk/",
    content: "Sri Lanka Army",
  },
];

export const store_map=[
    {
        image: PlayStore,
        content1:"GET IT ON",
        content2:"Google Play"
    },
    {
        image: AppStore,
        content1:"Download on the",
        content2:"App Store"
    }
]


