import { MutableRefObject, ReactNode, useRef } from "react";
import cls from "./Page.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfinityScroll } from "shared/lib/hooks/useInfinityScroll";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?:()=>void;
}

const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.pageWrapper, {}, [className])}>
      {children}
      <div ref={triggerRef}/>
    </section>
  );
};

export default Page;
