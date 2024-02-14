import React, {memo, useCallback, useEffect, useRef} from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {FlatList, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {Article} from '../../../domain/entities/article';
import {ArticleItem} from '../../components/Home/ArticleItem';
import {UpFaButton} from '../../components/shared/FaButton/UpFaButton';
import {Separator} from '../../components/shared/Separator';
import {RootStackParams} from '../../navigation/stackNavigator';
import {containerStyle} from '../../theme/element-styles/screenStyles';
import {useHomeViewModel} from '../../viewModels/useHomeViewModel';

interface Props extends StackScreenProps<RootStackParams, 'HomeView'> {}

const FooterComponent = memo(() => <View style={styles.footer} />);

export const HomeView = ({navigation}: Props) => {
  const flatListRef = useRef<FlatList<Article>>(null);
  const {isLoading, articles, getArticles, removeArticleById, errorMessage} =
    useHomeViewModel();

  useEffect(() => {
    if (errorMessage) {
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  }, [errorMessage]);

  const onClickNavigate = useCallback(
    (uri: string) => {
      if (!uri) {
        Toast.show({
          type: 'info',
          text1: "Oops! It looks like this article isn't available right now",
        });
      } else {
        navigation.navigate('WebPageView', {uri});
      }
    },
    [navigation],
  );

  const onScrollUpAction = useCallback(() => {
    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  }, []);

  const renderItem = useCallback(
    ({item}: {item: Article}) => (
      <ArticleItem
        article={item}
        remove={removeArticleById}
        navigate={onClickNavigate}
      />
    ),
    [removeArticleById, onClickNavigate],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.objectID}
        ItemSeparatorComponent={Separator}
        refreshing={isLoading}
        onRefresh={getArticles}
        ListFooterComponent={FooterComponent}
      />
      <UpFaButton action={onScrollUpAction} />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...(containerStyle as object)},
  footer: {
    height: 30,
    width: '100%',
  },
});
