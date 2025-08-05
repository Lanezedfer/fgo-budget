import { Tabs } from "expo-router";

const tabs = [{ name: "index" }, { name: "guide" }, { name: "setting" }];

const TabLayout = () => {
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} />
      ))}
    </Tabs>
  );
};

export default TabLayout;
