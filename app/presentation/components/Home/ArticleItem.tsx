import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Article} from '../../../domain/entities/article';
import epochToShortDate from '../../../utils/epochToShortDate';
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
          <Text style={styles.text}>{author}</Text>
          <Text>{title || story_title}</Text>
          <Text>{epochToShortDate(created_at_i)}</Text>
        </View>
      </TouchableOpacity>
    </SwipeableRemovalContainer>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  text: {color: 'black'},
});
