import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Article} from '../../../domain/entities/article';
import epochToShortDate from '../../../utils/epochToShortDate';
import {primary} from '../../theme/colors';
import {
  cardHeadingFontStyle,
  cardParagraphFontStyle,
} from '../../theme/element-styles/textStyles';
import {SwipeableRemovalContainer} from '../shared/SwipeableRemovalContainer';

type Props = {
  article: Article;
  remove: (id: string) => void;
  navigate: (uri: string) => void;
};

export const ArticleItem = ({article, remove, navigate}: Props) => {
  const {author, created_at_i, story_title, title, story_url, objectID} =
    article;

  return (
    <SwipeableRemovalContainer action={() => remove(objectID)}>
      <TouchableOpacity onPress={() => navigate(story_url || '')}>
        <View style={styles.container}>
          <Text style={styles.title}>{title || story_title}</Text>
          <Text style={styles.info}>
            {author} - {epochToShortDate(created_at_i)}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeableRemovalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary(true),
    paddingLeft: 18,
    paddingRight: 35,
    paddingVertical: 18,
    rowGap: 3,
  },
  title: {...cardHeadingFontStyle},
  infoContainer: {
    flexDirection: 'row',
  },
  info: {...cardParagraphFontStyle},
});
