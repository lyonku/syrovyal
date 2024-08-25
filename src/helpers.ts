const rootElement = document.getElementById("root");

export const removeInert = () => {
  if (rootElement) {
    rootElement.removeAttribute("inert");
  }
};

export const setInert = () => {
  if (rootElement) {
    rootElement.setAttribute("inert", "");
  }
};
