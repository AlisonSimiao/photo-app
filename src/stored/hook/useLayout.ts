import { useContext } from "react";
import { valuesLayout } from "../../components/Layout";
import { contextLayout} from "../context/LayoutProvider";

export default function useLayout() : valuesLayout{
    return  useContext(contextLayout);
}