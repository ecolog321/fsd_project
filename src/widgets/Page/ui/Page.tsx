import { ReactNode, UIEvent, useRef } from "react";
import cls from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInfinityScroll } from "@/shared/lib/hooks/useInfinityScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getScrollByPath } from "../model/selectors/scrollSaveSeletors";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle";
import { scrollSaveActions } from "../model/slices/scrollSaveSlice";
import { TestProps } from "@/shared/types/tests";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;

}

const Page = (props: PageProps) => {
  const {className, children, onScrollEnd} =props;
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const triggerRef = useRef<HTMLDivElement>(null!);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

useInitialEffect(()=>{
  wrapperRef.current.scrollTop = scrollPosition
})

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPositions({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, {}, [className])}
      onScroll={onScroll}
      data-testid={props["data-testid"] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
};

export default Page;
