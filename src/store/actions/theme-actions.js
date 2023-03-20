const ACTIONS = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

const toggleTheme = (currentTheme) => ({
  type: ACTIONS.TOGGLE_THEME,
  payload: currentTheme,
});

export {ACTIONS, toggleTheme};
