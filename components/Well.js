import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const Well = ({ wellId }) => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const wellRef = ref(db, `wells/${wellId}/level`);

    onValue(wellRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setLevel(data);
      } else {
        setLevel(0);
      }
    });
  }, [wellId]);

  return (
    <View className="w-11/12 p-4 rounded-lg bg-white shadow-md self-center mb-4">
      <View className="bg-blue-600/70 p-4 rounded-lg items-center">
        <Text className="text-white font-extrabold text-2xl">{wellId}</Text>
        <Text className="text-white font-extrabold text-xl mt-1">
          Seviye: <Text className="text-white">{level}%</Text>
        </Text>
      </View>
    </View>
  );
};

export default Well;
