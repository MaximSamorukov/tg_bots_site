//import { useMediaQuery } from "@uidotdev/usehooks";
import { Menu } from "@/widgets/Menu";
import { Main } from "@/widgets/Main";
import { Contacts } from "@/widgets/Contacts";
import { Benefits } from "@/widgets/Benefits";
import { Steps } from "@/widgets/Steps";
import { Cases } from "@/widgets/Cases";
import { Background } from "./components/Shared/Background";

export function App() {
  //const less680px = useMediaQuery("(max-width: 680px)");

  return (
    <>
      <Menu />
      <Main />
      <Benefits />
      <Steps />
      <Cases />
      <Contacts />
      <Background />
    </>
  );
}
