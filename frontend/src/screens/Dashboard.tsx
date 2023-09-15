import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import TodoList from '../components/TodoList';
import {Navigation} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos, deleteTodo, updateTodo} from '../store/todo/actions';

export interface TodoType {
  id: number;
  userId: number;
  Title: string;
  Description: string;
  Completed: boolean;
  dueDate: Date;
}

type Props = {
  navigation: Navigation;
};

const Dashboard = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {todos} = useSelector((state: any) => state.todoReducer);
  const {user} = useSelector((state: any) => state.authReducer);

  useEffect(() => {
    dispatch(getTodos(user.id));
  }, []);

  const handleComplete = (todo: TodoType) => {
    todo.Completed = true;
    dispatch(updateTodo(todo));
  };

  const handleRemove = (todo: TodoType) => {
    dispatch(deleteTodo(todo.id, navigation));
  };

  return (
    <View style={{backgroundColor: 'rgb(84, 90, 99)', flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#198',
            padding: 15,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('CreateTodo')}>
          <Text style={{fontFamily: 'FiraCode-Regular', color: 'white'}}>
            Create Task
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList
        data={todos}
        onPressRemove={handleRemove}
        onPressComplete={handleComplete}
      />
    </View>
  );
};

export default Dashboard;
