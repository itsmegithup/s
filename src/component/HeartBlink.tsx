import { IoHeart } from "react-icons/io5";


export default function HeartBlink() {
  return (
    <div className="heart-container">
      <IoHeart className="heart" />
      <IoHeart className="heart " />
    </div>
  );
}