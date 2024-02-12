import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Article} from '../../../domain/entities/article';
import {ArticleItem} from '../../components/Home/ArticleItem';
import {RootStackParams} from '../../navigation/stackNavigator';
import {useHomeViewModel} from '../../viewModels/useHomeViewModel';

interface Props extends StackScreenProps<RootStackParams, 'HomeView'> {}

export const HomeView = ({navigation}: Props) => {
  const {isLoading, articles, getArticles, removeArticleById} =
    useHomeViewModel();

  const navigate = useCallback(
    (uri: string) => navigation.navigate('WebPageView', {uri}),
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Article}) => (
      <ArticleItem
        article={item}
        remove={removeArticleById}
        navigate={navigate}
      />
    ),
    [removeArticleById, navigate],
  );

  const separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.objectID}
        ItemSeparatorComponent={separator}
        refreshing={isLoading}
        onRefresh={getArticles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {marginVertical: 12},
});
