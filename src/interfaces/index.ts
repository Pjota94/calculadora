import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IValueProps {
  cardDays: boolean;
  setCardDays: Dispatch<SetStateAction<boolean>>;
  switchCardTwo: () => void;
  sendValues: (data: ICalcPro) => void;
  daysPattern: IObj;
  vamoVe: string[];
  setVamoVe: Dispatch<SetStateAction<string[]>>;
  daysEdited: any;
  setDaysEdited: Dispatch<SetStateAction<any>>;
}

export interface IProviderProp {
  children: ReactNode;
}

export interface ICalcPro {
  amount: number;
  installments: number;
  mdr: number;
  days?: string[];
}

export interface IObj {
  1: number;
  15: number;
  30: number;
  90: number;
}
