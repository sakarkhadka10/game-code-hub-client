import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function EmptyCart() {
  return (
    <div className="flex justify-center items-center">
      <DotLottieReact
        src="/EmptyCart.lottie"
        loop
        autoplay
        style={{ height: "350px", width: "250px" }} // Your perfect size
      />
    </div>
  );
}
