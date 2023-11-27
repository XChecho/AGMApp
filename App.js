
import { Text, View, TouchableWithoutFeedback, TouchableNativeFeedback, Alert } from "react-native";

export default function App() {
  
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <TouchableNativeFeedback onPress={() => Alert.alert("Hemos tocado el texto!")}>
        <Text>AGM APP To Carolina And Felipe</Text>
      </TouchableNativeFeedback>
    </View>
  );
}
