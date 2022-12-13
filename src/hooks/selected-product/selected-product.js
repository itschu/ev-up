import { createContext, useContext, useState } from "react";

const Provider = createContext();

const SelectedProduct = ({ children }) => {
	const [selected, setSelected] = useState({
		type: "classic",
		billed: "monthly",
	});
	return (
		<Provider.Provider value={{ selected, setSelected }}>
			{children}
		</Provider.Provider>
	);
};

const useSelectedProduct = () => useContext(Provider);

export { SelectedProduct, useSelectedProduct };
