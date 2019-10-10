import React from "react";
import {storiesOf} from "@storybook/react";

import "@storybook/addon-console";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import {UnlinkedCalendar} from "../src";

const onDatesChangeLog = (range) => {
  console.log("onDatesChange", range);
};

// Stories;
storiesOf("Unlinked Calendar", module)
  .add("default", () => <UnlinkedCalendar onDatesChange={onDatesChangeLog} />);
