import React, { useEffect } from "react";

import CreateFormPage from "../forms/CreateFormPage";

import {
  Heading,
  VStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Spinner,
  useToast,
} from "@chakra-ui/react";

const HomeTabsPanel = () => {
  return (
    <VStack gap={10}>
      <Heading size="4xl">FORM-BUILDER</Heading>
      <Tabs variant="enclosed" style={{ width: "100%" }}>
        <TabList>
          <Tab>Create</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CreateFormPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default HomeTabsPanel;
