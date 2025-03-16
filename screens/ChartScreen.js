import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ChartScreen() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [1200, 1400, 1500, 1300, 1700, 1900],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10 }}>
        تحليل الذهب خلال 6 أشهر
      </Text>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#1E2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1E2923",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}