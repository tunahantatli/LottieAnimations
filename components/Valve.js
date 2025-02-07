import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import { Text, View, TouchableOpacity } from "react-native";

const Valve = ({ valveId }) => {
    const [status, setStatus] = useState("0");
    const [connection, setConnection] = useState(true);

    useEffect(() => {
        const valveRef = ref(db, `valves/${valveId}`);
        const unsubscribe = onValue(valveRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setStatus(data.status || "0");
                setConnection(data.connection || false);
            }
        });
        return () => unsubscribe();
    }, [valveId]);

    const togglevalve = async () => {
        const newStatus = status === "1" ? "0" : "1";
        try {
            await update(ref(db, `valves/${valveId}`), { status: newStatus });
        } catch (error) {
            console.error("Pompa durumunu değiştirirken hata oluştu:", error);
        }
    };

    return (
        <View className="w-11/12 p-4 rounded-lg bg-white shadow-md self-center mb-6">
            <View className="flex flex-row items-center justify-between w-full mb-4">
                <Text className="font-bold text-lg">{valveId}</Text>
                <Text className="font-bold text-lg">{status === "1" ? "Açık" : "Kapalı"}</Text>
                <TouchableOpacity
                    onPress={togglevalve}
                    className={`px-4 py-2 rounded ${status === "1" ? "bg-green-500" : "bg-red-500"}`}
                >
                    <Text className="text-white text-lg">{status === "1" ? "Kapat" : "Aç"}</Text>
                </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-center w-full gap-x-1">
                <Text className="font-semibold text-lg">Bağlantı:</Text>
                <Text className={`font-normal text-lg ${connection ? "text-green-500" : "text-red-500"}`}>
                    {connection ? "Bağlantı Var" : "Bağlantı Yok"}
                </Text>
            </View>
        </View>
    );
};

export default Valve;
