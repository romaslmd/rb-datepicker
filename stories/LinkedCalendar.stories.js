import React from "react";
import {storiesOf} from "@storybook/react";

import "@storybook/addon-console";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import {LinkedCalendar} from "../src";

const onDatesChangeLog = (range) => {
  console.log("onDatesChange", range);
};

// Stories;
storiesOf("Linked Calendar", module)
  .add("Default", () => <LinkedCalendar onDatesChange={onDatesChangeLog} />)
  .add("Shift view to left", () => <LinkedCalendar onDatesChange={onDatesChangeLog} toLeft />)
  .add("Hide footer row", () => <LinkedCalendar onDatesChange={onDatesChangeLog} noFooter />)
  .add("Hide selected details", () => <LinkedCalendar onDatesChange={onDatesChangeLog} noInfo />)  
  .add("Hide Cancel button", () => <LinkedCalendar onDatesChange={onDatesChangeLog} noCancel />);
