import Carousel from "../components/Carousel/Carousel";

const images = [
  "https://thumbs.wbm.im/pw/medium/78578369ad5412f87b2a91340d45e458.avif",
  "https://thumbs.wbm.im/pw/medium/0e24b319d07e33696d7e24610ef74dbb.avif",
];
const Home = () => {
  return (
    <>
      <Carousel imageUrls={images} />
    </>
  );
};
export default Home;
