"use client";
import { Button } from "@repo/ui/button";

import { MyButton } from "@repo/ui";
import classNames from "classnames/bind";
import { useState } from "react";
import Style from "./style/page.module.scss";

const style = classNames.bind(Style);

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      this is home
      <Button appName="next" className={style("button")}>
        Click Me!
      </Button>
      <MyButton
        appName="next"
        className={style("button", clicked && "clicked")}
        onClick={() => setClicked(!clicked)}
      >
        Click MyButton!
      </MyButton>
    </div>
  );
}
