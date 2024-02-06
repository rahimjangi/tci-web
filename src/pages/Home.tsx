import CardSection from "../components/Card/CardSection";
import Carousel from "../components/Carousel/Carousel";
import { CardProps } from "../types/types";

const images = [
  "https://thumbs.wbm.im/pw/medium/78578369ad5412f87b2a91340d45e458.avif",
  "https://thumbs.wbm.im/pw/medium/0e24b319d07e33696d7e24610ef74dbb.avif",
];
const handleClick = () => {};
const cards: CardProps[] = [
  {
    imageUrl:
      "https://thumbs.wbm.im/pw/medium/78578369ad5412f87b2a91340d45e458.avif",
    buttonText: "TEXT",
    title: "title",
    onButtonClick: handleClick,
    text: "text",
  },
  {
    imageUrl:
      "https://thumbs.wbm.im/pw/medium/78578369ad5412f87b2a91340d45e458.avif",
    buttonText: "TEXT",
    title: "title",
    onButtonClick: handleClick,
    text: "text",
  },
  {
    imageUrl:
      "https://thumbs.wbm.im/pw/medium/78578369ad5412f87b2a91340d45e458.avif",
    title: "title",
    text: "text",
    buttonText: "TEXT",
    onButtonClick: handleClick,
  },
];
//  imageUrl: string;
//   title: string;
//   text: string;
//   buttonText: string;
//   onButtonClick: () => void;
const Home = () => {
  return (
    <>
      <Carousel imageUrls={images} />
      <CardSection cards={cards} />
    </>
  );
};
export default Home;
