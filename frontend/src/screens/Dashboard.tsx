import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {find, propEq, keys, has, assoc} from 'ramda';
import TodoList from '../components/TodoList';
import NewTodo from '../components/NewTodo';
import Footer from '../components/Footer';
import {Navigation} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../store/todo/actions';

interface TodoType {
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
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodoValue, setNewTodoValue] = useState('');
  const dispatch = useDispatch();
  const {user} = useSelector((state: any) => state.authReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleComplete = (todo: TodoType) => {
    const todoToUpdate = find(propEq('id', todo.id))(todos);
    const hasStatusProp = has('status')(todoToUpdate);

    if (keys(todoToUpdate).length > 0 && hasStatusProp) {
      const updatedTodo = assoc('status', 'c')(todoToUpdate);
      const updatedTodoList = todos.map((t: TodoType) => {
        if (t.id === todo.id) return updatedTodo;
        return t;
      });
      setTodos(updatedTodoList);
    } else {
      throw new Error('Todo not found');
    }
  };

  const handleRemove = (todo: TodoType) => {
    const updatedTodos = todos.filter((t: TodoType) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  const handleOnAddNewTodo = () => {
    if (newTodoValue.length < 5) {
      Alert.alert('Empty Todo', 'Enter at least 4 or more characters!');
      return;
    }
    const newTodo: TodoType = {
      id: todos.length + 1,
      userId: 1,
      Title: newTodoValue,
      Description: '',
      Completed: false,
      dueDate: new Date(),
    };

    setTodos([...todos, newTodo]);
    setNewTodoValue('');
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
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('CreateTodo')}>
          <Text style={{fontFamily: 'FiraCode-Regular'}}>
            Create a new todo!
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin: 20}}>
        <NewTodo
          onChangeNewTodoText={(newVal: string) => setNewTodoValue(newVal)}
          newTodoValue={newTodoValue}
          onAddNewTodo={handleOnAddNewTodo}
        />
      </View>
      <TodoList
        data={todos}
        onPressRemove={handleRemove}
        onPressComplete={handleComplete}
      />
      <Footer />
    </View>
  );
};

export default Dashboard;
