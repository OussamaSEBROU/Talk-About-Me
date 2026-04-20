import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, GLASS_STYLE } from '../theme';
import { useTranslation } from 'react-i18next';

interface SoulCardProps {
  name: string;
  age: string;
  id: string;
  birthDate: string;
}

const SoulCard = ({ name, age, id, birthDate }: SoulCardProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <View style={[styles.card, GLASS_STYLE]}>
      <Text style={[styles.quote, { fontFamily: Typography.fonts.latinItalic }]}>
        "{t('soul_card_header')}"
      </Text>
      <View style={styles.divider} />
      <Text style={[styles.name, { fontFamily: isArabic ? Typography.fonts.arabicBold : Typography.fonts.latinBold }]}>
        {name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.detailText}>{t('Age')}: {age}</Text>
        <Text style={styles.detailText}>ID: {id}</Text>
        <Text style={styles.detailText}>{t('Birth Date')}: {birthDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 25,
    margin: 20,
    width: '90%',
    alignSelf: 'center',
  },
  quote: {
    color: Colors.primary,
    fontSize: Typography.sizes.quote,
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.glassBorder,
    marginBottom: 15,
  },
  name: {
    color: Colors.text,
    fontSize: Typography.sizes.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    color: Colors.textSecondary,
    fontSize: Typography.sizes.metadata,
    marginBottom: 5,
    textAlign: 'center',
  }
});

export default SoulCard;
