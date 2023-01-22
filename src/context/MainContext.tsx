import { createContext, useState } from "react";
import { ICalcPro, IObj, IProviderProp, IValueProps } from "../interfaces";
import api from "../services";

export const MainContext = createContext<IValueProps>({} as IValueProps);

const MainContextProvider = ({ children }: IProviderProp) => {
  const [cardDays, setCardDays] = useState(true);
  const [daysPattern, setDaysPattern] = useState({} as IObj);
  const [vamoVe, setVamoVe] = useState<string[]>(["1", "15", "30", "90"]);
  const [daysEdited, setDaysEdited] = useState({} as any);

  const switchCardTwo = () => {
    setCardDays(!cardDays);
    setVamoVe(["1", "15", "30", "90"]);
  };

  const sendValues = (data: ICalcPro) => {
    try {
      data.days = vamoVe;

      api.post("", data).then((res) => {
        setDaysPattern(res.data);
        setDaysEdited(res.data);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        cardDays,
        setCardDays,
        switchCardTwo,
        sendValues,
        daysPattern,
        vamoVe,
        setVamoVe,
        daysEdited,
        setDaysEdited,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
