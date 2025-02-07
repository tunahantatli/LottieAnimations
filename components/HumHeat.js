import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const HumHeat = ({ sensorId }) => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const tempRef = ref(db, `sensors/${sensorId}/temperature`);
    const humRef = ref(db, `sensors/${sensorId}/humidity`);

    onValue(tempRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data !== null ? data : 0);
    });

    onValue(humRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data !== null ? data : 0);
    });
  }, [sensorId]);

  return (
    <View className="w-11/12 p-4 rounded-lg bg-white shadow-md self-center mb-4">
      <View className="bg-black/80 p-4 rounded-lg items-center">
        <Text className="text-white font-extrabold text-2xl">{sensorId}</Text>
        <Text className="text-white font-extrabold text-xl mt-2">
          Sıcaklık: <Text className="text-orange-600">{temperature}°C</Text>
        </Text>
        <Text className="text-white font-extrabold text-xl mt-2">
          Nem: <Text className="text-blue-400">{humidity}%</Text>
        </Text>
      </View>
    </View>
  );
};

export default HumHeat;
