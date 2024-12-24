import { useContext } from "react";
import { GlobalContext } from "../../../context/Context";

function ContextButtonComponent() {
  const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);

  return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>;
}

export default ContextButtonComponent;