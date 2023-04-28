import { View, Text, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ITaskItem } from "../../screens/Home";

import {styles} from './styles';

interface ITaskCardProps extends ITaskItem {
    onRemove: () => void;
    onDone: () => void;
  }

export function TaskCard({ description, isDone, onRemove, onDone }: ITaskCardProps) {
    if (isDone == false) {
        return (
            <View style={styles.card}>
            <TouchableOpacity onPress={onDone}>
                <Icon name="circle" style={styles.circle} size={25} />
            </TouchableOpacity>
            <Text style={styles.textCard}>{description}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Icon name="trash-2" size={25} color={'#6B6B6B'} />
            </TouchableOpacity>
        </View>
        )
    } else {
        return (
            <View style={styles.card}>
            <TouchableOpacity onPress={onDone}>
                <Icon name="check-circle" style={styles.circle} size={25} />
            </TouchableOpacity>
            <Text style={styles.textCard}>{description}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Icon name="trash-2" size={25} color={'#6B6B6B'} />
            </TouchableOpacity>
        </View>
        )
    }
}