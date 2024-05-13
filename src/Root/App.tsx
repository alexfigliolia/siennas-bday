import React, { memo } from "react";
import { PageFlip } from "Components/PageFlip";
import { useMount } from "Hooks/useMount";
import { useUnmount } from "Hooks/useUnmount";
import { useLoader } from "State/Loader";
import { Screen } from "State/Screen";
import { TaskQueue } from "Tools/TaskQueue";
import type { Propless } from "Tools/Types";
import { Slider } from "./Slider";

export const App = memo(
  function App(_: Propless) {
    const slider = useLoader(state => state.slides);
    useMount(() => {
      Screen.initialize();
    });

    useUnmount(() => {
      Screen.destroy();
      TaskQueue.clearPendingTasks();
    });

    return <PageFlip>{slider && <Slider />}</PageFlip>;
  },
  () => true,
);
