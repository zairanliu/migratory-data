import useMousemoveEvent from "./useMousemoveEvent";
import useChannel from "./useChannel";
import throttle from "lodash-es/throttle";

const useSyncInteractives = () => {
  const messageChannel = useChannel();

  useMousemoveEvent(
    throttle(({ x, y }) => {
      messageChannel.send({ type: "mousemove", value: { x, y } });
    }, 10)
  );
};

export default useSyncInteractives;
