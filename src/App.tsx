import { useMediaQuery } from "@uidotdev/usehooks";
import { Menu } from "@/widgets/Menu";
import { Main } from "@/widgets/Main";
import { Contacts } from "@/widgets/Contacts";
import { Benefits } from "@/widgets/Benefits";
import { Steps } from "@/widgets/Steps";
import { Cases } from "@/widgets/Cases";
import { AccentBox } from "./components/Shared/AccentBox";
import { Background } from "./components/Shared/Background";

export function App() {
  const less680px = useMediaQuery("(max-width: 680px)");
  const top = less680px ? "80px" : "250px";
  const left = less680px ? "50px" : "250px";
  const angel = less680px ? 0 : 90;
  const right = less680px ? "5%" : "30%";

  return (
    <>
      <Menu />
      <Main />
      <Benefits />
      <Steps />
      <Cases />
      <Contacts />
      {/*<AccentBox count={90} width={10} top={top} rotate={45} left={left} />
      <AccentBox
        count={100}
        width={4}
        top={"30px"}
        rotate={angel}
        right={right}
      />
      <AccentBox
        count={25}
        width={5}
        bottom={"50px"}
        rotate={0}
        right={"40%"}
      />*/}
      <Background />
    </>
  );
}
