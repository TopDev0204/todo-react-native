import React, {memo, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import {Navigation} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo} from '../store/todo/actions';
import DatePicker from 'react-native-date-picker';

type Props = {
  navigation: Navigation;
};

const CreateTodo = ({navigation}: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {user} = useSelector((state: any) => state.authReducer);
  const dispatch = useDispatch();

  const _onCreate = () => {
    dispatch(
      createTodo(
        {
          userId: user.id,
          Title: title,
          Description: description,
          Completed: false,
          dueDate: dueDate.toLocaleDateString(),
        },
        navigation,
      ),
    );
  };

  return (
    <Background>
      <Header>Create a new Task</Header>

      <TextInput
        label="Title"
        returnKeyType="next"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        label="Description"
        returnKeyType="next"
        value={description}
        onChangeText={text => setDescription(text)}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button onPress={() => setDatePickerVisibility(true)}>Set Date</Button>
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={dueDate}
        onConfirm={(date: any) => {
          setDatePickerVisibility(false);
          setDueDate(date);
        }}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
      />

      <Button mode="contained" onPress={_onCreate} style={styles.button}>
        Create
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(CreateTodo);
