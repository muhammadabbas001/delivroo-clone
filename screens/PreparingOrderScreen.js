import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  });

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      {/* <Animatable.Image
        source={require("../assets/orderLoading4.png")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      /> */}

      <LottieView
        source={require("../assets/orderLoading3.json")}
        autoPlay
        loop
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-xl text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      {/* <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
        className="bg-[#00CCBB]"
      /> */}

      <LottieView
        source={require("../assets/loading.json")}
        autoPlay
        loop
        className="h-20 w-20 mt-10"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
