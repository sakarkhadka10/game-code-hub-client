import Lottie from "react-lottie";
import cartAnimation from "../../assets/EmptyCartAnim.json";

export default function EmptyCart() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={300} />
    </div>
  );
}
