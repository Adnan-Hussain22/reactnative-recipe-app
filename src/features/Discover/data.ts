import {
  americanCusine,
  chineseCusine,
  desiCusine,
  italianCusine,
  japanesCusine,
} from "src/assets/images";
import { IDiscoverList } from "src/typings/discover";

export const DISCOVER_DATA: IDiscoverList[] = [
  {
    index: 0,
    title: "Top Picks",
    horizontal: true,
    type: 0,
    data: [
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
    ],
  },
  {
    index: 1,
    title: "Recently Created",
    horizontal: true,
    type: 0,
    data: [
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
      {
        title: "Hampden-Sydney",
        image:
          "https://www.foodies.pk/wp-content/uploads/2020/04/italian-cuisine-italian-food-scaled.jpeg",
        subTitle: "Lorem Ipsum",
      },
    ],
  },
  {
    index: 2,
    title: "By Cuisine",
    horizontal: true,
    type: 1,
    data: [
      {
        title: "Desi",
        image: desiCusine,
      },
      {
        title: "Japanese",
        image: japanesCusine,
      },
      {
        title: "American",
        image: americanCusine,
      },
      {
        title: "Italian",
        image: italianCusine,
      },
      {
        title: "Chinese",
        image: chineseCusine,
      },
    ],
  },
];
