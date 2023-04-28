import { Text, View, Image, TextInput, TouchableOpacity, FlatList  } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { TaskCard } from '../../components/TasksCard';
import {styles} from './styles';

export interface ITaskItem {
    description: string;
    isDone: boolean;
}

export function Home() {

    const [tasks, setTasks ] = useState<ITaskItem[]>([]);
    const [taskDescription, setTaskDescription ] = useState('');

    function handleTaskAdd() {
        const newTask: ITaskItem = {
            description: taskDescription,
            isDone: false,
        }
        setTasks(prevSate => [...prevSate, newTask]);
        setTaskDescription('');
    }

    function handleTaskRemove(task: ITaskItem) {
        setTasks(prevState => prevState.filter(item => item !== task))
    }

    function handleTaskIsDone(task: ITaskItem) {
        const newTasks = tasks.map((item) => {
            if (item === task) {
                return {
                    ...item,
                    isDone: !item.isDone,
                };
            }
            return item;
        });
        setTasks(newTasks);
    }

    const countDoneTasks = tasks.reduce((count, task) => {
        if (task.isDone) {
          return count + 1;
        }
        return count;
      }, 0);
    
      const countUnDoneTasks = tasks.reduce((count, task) => {
        if (!task.isDone) {
          return count + 1;
        }
        return count;
      }, 0);

    return (
      <View style={styles.back}>
        
        <View style={{ height: 20 }} />
        <Image source={require('../../../assets/images/LogoLogo.png')} style={styles.image} />
        <View style={{ height: 20 }} />
        <View style={styles.newTask}>
            <TextInput 
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor="#6B6B6B"
                onChangeText={e => setTaskDescription(e)}
                value={taskDescription}
             />
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                <Icon name="plus-circle" style={styles.circle} size={25} />
            </TouchableOpacity>
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.Tasks}>
            <View style={styles.viewCreate}>
                <Text style={styles.textCreate}>Criadas</Text>
                <View style={styles.numberBoxTask}>
                    <Text style={styles.numberTask}>{countUnDoneTasks}</Text>
                </View>
            </View>
            <View style={styles.viewCreate}>
                <Text style={styles.textDone}>Concluidas</Text>
                <View style={styles.numberBoxTask}>
                    <Text style={styles.numberTask}>{countDoneTasks}</Text>
                </View>
            </View>
        </View>
        <FlatList
            data={tasks}
            renderItem={({item}) => <TaskCard {...item} onRemove={() => handleTaskRemove(item)} onDone={() => handleTaskIsDone(item)}/>}
            keyExtractor={(item, index) => `${item.description}-${index}`}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
              </Text>
            )}
        />
      </View>
    )
  }





