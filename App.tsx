import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/i18n';
import { useTranslation } from 'react-i18next';
import { Colors, Typography } from './src/theme';

const App = () => {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initial setup (e.g. font loading, data parsing)
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  const currentFont = i18n.language === 'ar' ? Typography.fonts.arabic : Typography.fonts.latin;
  const currentFontBold = i18n.language === 'ar' ? Typography.fonts.arabicBold : Typography.fonts.latinBold;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={[styles.title, { fontFamily: currentFontBold }]}>
            {t('app_name')}
          </Text>
          <Text style={[styles.subtitle, { fontFamily: currentFont }]}>
            {t('tagline')}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={{ color: Colors.text, textAlign: 'center' }}>
            3D Radiant Map & Drone Transition Coming Soon...
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.attribution, { fontFamily: currentFont }]}>
            {t('attribution')}
          </Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    color: Colors.primary,
    fontSize: Typography.sizes.h1,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: Colors.text,
    fontSize: Typography.sizes.body,
    marginTop: 10,
    opacity: 0.8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    borderTopColor: Colors.glassBorder,
    borderTopWidth: 1,
  },
  attribution: {
    color: Colors.textSecondary,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default App;
