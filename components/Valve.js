import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

const valve = ({ valveId }) => {
    const [status, setStatus] = useState("0");
    const [connection, setConnection] = useState(true);
    const [manualToggle, setManualToggle] = useState(false); // Manuel kontrol durumu
    const [timeToStayOpen, setTimeToStayOpen] = useState(""); // Kullanıcının girdiği süre
    const [timedOperationStatus, setTimedOperationStatus] = useState(false); // Zamanlı açma durumu

    useEffect(() => {
        const valveRef = ref(db, `valves/${valveId}`);
        const unsubscribe = onValue(valveRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setStatus(data.status || "0");
                setConnection(data.connection || false);
                setTimedOperationStatus(data.timedOperationStatus || false);
            }
        });
        return () => unsubscribe();
    }, [valveId]);

    const togglevalve = async () => {
        const newStatus = status === "1" ? "0" : "1";
        try {
            await update(ref(db, `valves/${valveId}`), { status: newStatus });
        } catch (error) {
            console.error("{valveId} durumunu değiştirirken hata oluştu:", error);
        }
    };

    const setTimedOperation = () => {
        const timeInMilliseconds = parseInt(timeToStayOpen) * 60000; // Dakika olarak
        
        if (timeInMilliseconds > 0) {
            update(ref(db, `valves/${valveId}`), {
                status: "1",
                timedOperationStatus: true,
            }).then(() => {
                setManualToggle(false);
                setTimeout(() => {
                    update(ref(db, `valves/${valveId}`), { status: "0", timedOperationStatus: false });
                }, timeInMilliseconds);
            });
        }
    };

    const timeToClose = new Date(Date.now() + parseInt(timeToStayOpen) * 60000).toLocaleTimeString();

    return (
        <View className="w-11/12 p-4 rounded-lg bg-white shadow-md self-center mb-12">
            <View className="flex flex-row items-center justify-between w-full mb-4 text-lg">
                <Text className="font-bold text-lg">{valveId}</Text>
                <Text className="font-semibold text-lg">{status === "1" ? "Açık" : "Kapalı"}</Text>
                <TouchableOpacity
                    onPress={togglevalve}
                    className={`px-4 py-2 rounded ${status === "1" ? "bg-green-500" : "bg-red-500"}`}
                >
                    <Text className="text-gray-100 text-lg">{status === "1" ? "Kapat" : "Aç"}</Text>
                </TouchableOpacity>
            </View>

            <View className="flex flex-row items-center justify-between w-full gap-x-1">
                <Text className="font-semibold text-lg">Bağlantı:</Text>
                <Text className={`font-normal text-lg ${connection ? "text-green-500" : "text-red-500"}`}>
                    {connection ? "Bağlantı Var" : "Bağlantı Yok"}
                </Text>
            </View>

            {timedOperationStatus ? (
                <View className="mt-4">
                    <Text className="font-semibold text-lg">Zamanlı Açma Durumu:</Text>
                    <Text className="font-normal text-lg">{valveId} <Text className="text-blue-500 font-semibold">{timeToClose}</Text> 'da kapanacak ve şu an açık.</Text>
                </View>
            ) : (
                <View className="mt-4">
                    <Text className="font-semibold text-lg">Zamanlı Açma Süresi (Dakika):</Text>
                    <TextInput
                        value={timeToStayOpen}
                        onChangeText={setTimeToStayOpen}
                        placeholder="Dakika cinsinden süre girin."
                        keyboardType="numeric"
                        className="border p-2 rounded"
                    />
                    <TouchableOpacity
                        onPress={setTimedOperation}
                        className="mt-2 px-[86px] py-2 bg-blue-500 rounded text-white flex flex-row self-center"
                    >
                        <Text className="text-white text-lg">Zamanla Aç</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default valve;
