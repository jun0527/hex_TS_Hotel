import pc_room2_1 from "@/assets/images/desktop/room2-1.png";
import pc_room2_2 from "@/assets/images/desktop/room2-2.png";
import pc_room2_3 from "@/assets/images/desktop/room2-3.png";
import pc_room2_4 from "@/assets/images/desktop/room2-4.png";
import pc_room2_5 from "@/assets/images/desktop/room2-5.png";
import pc_room3_1 from "@/assets/images/desktop/room3-1.png";
import pc_room3_2 from "@/assets/images/desktop/room3-2.png";
import pc_room3_3 from "@/assets/images/desktop/room3-3.png";
import pc_room3_4 from "@/assets/images/desktop/room3-4.png";
import pc_room3_5 from "@/assets/images/desktop/room3-5.png";
import pc_room4_1 from "@/assets/images/desktop/room4-1.png";
import pc_room4_2 from "@/assets/images/desktop/room4-2.png";
import pc_room4_3 from "@/assets/images/desktop/room4-3.png";
import pc_room4_4 from "@/assets/images/desktop/room4-4.png";
import pc_room4_5 from "@/assets/images/desktop/room4-5.png";
import pc_room5_1 from "@/assets/images/desktop/room5-1.png";
import pc_room5_2 from "@/assets/images/desktop/room5-2.png";
import pc_room5_3 from "@/assets/images/desktop/room5-3.png";
import pc_room5_4 from "@/assets/images/desktop/room5-4.png";
import pc_room5_5 from "@/assets/images/desktop/room5-5.png";
import { ImageItem } from "@/types/image.type";

type ImageList = {
  [k: string]: ImageItem[];
};
const room2: ImageItem[] = [
  {
    desktop: pc_room2_1,
    mobile: pc_room2_1,
  },
  {
    desktop: pc_room2_2,
    mobile: pc_room2_2,
  },
  {
    desktop: pc_room2_3,
    mobile: pc_room2_3,
  },
  {
    desktop: pc_room2_4,
    mobile: pc_room2_4,
  },
  {
    desktop: pc_room2_5,
    mobile: pc_room2_5,
  },
];
const room3: ImageItem[] = [
  {
    desktop: pc_room3_1,
    mobile: pc_room3_1,
  },
  {
    desktop: pc_room3_2,
    mobile: pc_room3_2,
  },
  {
    desktop: pc_room3_3,
    mobile: pc_room3_3,
  },
  {
    desktop: pc_room3_4,
    mobile: pc_room3_4,
  },
  {
    desktop: pc_room3_5,
    mobile: pc_room3_5,
  },
];
const room4: ImageItem[] = [
  {
    desktop: pc_room4_1,
    mobile: pc_room4_1,
  },
  {
    desktop: pc_room4_2,
    mobile: pc_room4_2,
  },
  {
    desktop: pc_room4_3,
    mobile: pc_room4_3,
  },
  {
    desktop: pc_room4_4,
    mobile: pc_room4_4,
  },
  {
    desktop: pc_room4_5,
    mobile: pc_room4_5,
  },
];
const room5: ImageItem[] = [
  {
    desktop: pc_room5_1,
    mobile: pc_room5_1,
  },
  {
    desktop: pc_room5_2,
    mobile: pc_room5_2,
  },
  {
    desktop: pc_room5_3,
    mobile: pc_room5_3,
  },
  {
    desktop: pc_room5_4,
    mobile: pc_room5_4,
  },
  {
    desktop: pc_room5_5,
    mobile: pc_room5_5,
  },
];
export const roomImgList: ImageList = {
  room2,
  room3,
  room4,
  room5,
};
