import guideIcon from "@/assets/images/guide-icon.png";
import indexIcon from "@/assets/images/index-icon.png";
import settingIcon from "@/assets/images/setting-icon.png";
import { colors } from "@/styles/styleConstants";
import { Tabs } from "expo-router";
import { Image } from "react-native";

const tabs = [
  { name: "index", icon: indexIcon },
  { name: "guide", icon: guideIcon },
  { name: "setting", icon: settingIcon },
];

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accentPrimary,
        tabBarInactiveTintColor: colors.foregroundPrimary,
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          borderTopWidth: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={tab.icon}
                style={{
                  height: 40,
                  tintColor: focused
                    ? colors.accentPrimary
                    : colors.foregroundPrimary,
                  width: 40,
                }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
