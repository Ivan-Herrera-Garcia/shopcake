"use client";

import { Provider } from "react-redux";
import { store } from "../store/index";
import { setupCartSync } from "@/store/cartSlice";
import { useEffect } from "react";

export default function Providers({ children }) {
  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}