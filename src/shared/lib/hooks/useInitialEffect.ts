
import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
  console.log(__IS_DEV__)
  useEffect(() => {
    if (__PROJECT__ !=='storybook' && __PROJECT__!=='jest') {
          callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
