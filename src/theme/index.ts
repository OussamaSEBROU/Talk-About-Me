export const Colors = {
  background: '#000000', // Absolute Midnight Black
  primary: '#FF0000',    // Neon Radiant Red (Souls)
  secondary: '#0A1128',  // Glowing Deep Blue (Map Contours)
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
  glassBackground: 'rgba(255, 255, 255, 0.05)',
};

export const Typography = {
  fonts: {
    latin: 'Montserrat-Regular',
    latinBold: 'Montserrat-Bold',
    latinItalic: 'Montserrat-MediumItalic',
    arabic: 'MontserratArabic-Regular',
    arabicBold: 'MontserratArabic-Bold',
  },
  sizes: {
    h1: 32,
    h2: 24,
    body: 16,
    metadata: 12,
    quote: 18,
  }
};

export const G GLASS_STYLE = {
  backgroundColor: Colors.glassBackground,
  borderColor: Colors.glassBorder,
  borderWidth: 1,
  borderRadius: 15,
  // High-blur effect should be handled via package like @react-native-community/blur or Skia
};
