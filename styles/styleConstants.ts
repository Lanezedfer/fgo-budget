// Constants
export const colors = {
  backgroundPrimary: "#0f172a",
  backgroundSecondary: "#020617",
  foregroundPrimary: "#f1f5f9",
  foregroundSecondary: "#94a3b8",
  accentPrimary: "#38bdf8",
  accentPrimaryHighlight: "#0ea5e9",
  accentSecondary: "#f87171",
  accentTertiary: "#4ade80",
};

export const fontSizes = {
  regular: 20,
  medium: 25,
};

// Reusable Containers
export const container = {
  backgroundColor: colors.backgroundPrimary,
  flex: 1,
};

export const mainContainer = {
  alignItems: "center" as const,
  flex: 1,
  gap: 10,
  justifyContent: "center" as const,
};

// Reusable Elements
export const btn = {
  backgroundColor: colors.accentPrimary,
  borderRadius: 3,
  color: colors.backgroundPrimary,
  paddingVertical: 10,
};

export const btn__pressed = {
  backgroundColor: colors.accentPrimaryHighlight,
};

export const btnText = {
  fontSize: fontSizes.medium,
  fontWeight: "bold" as const,
};
