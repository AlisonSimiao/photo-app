import { useContext } from "react";
import { contextLayout, valuesLayout } from "../context/LayoutProvider";

export default function useLayout() : valuesLayout{
    return  useContext(contextLayout);
}