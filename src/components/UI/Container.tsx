import { ReactNode } from "react";
import Image from "next/image";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full h-[952px] relative">
      <Image
        src="/images/header-background.png"
        alt="background"
        fill
        className="object-cover -z-10"
        quality={100}
      />
      {children}
    </div>
  );
};

export default Container;
