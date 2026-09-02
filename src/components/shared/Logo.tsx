import Image from "next/image";

interface LogoProps {
  scrolled?: boolean;
  variant?: "default" | "white" | "admin";
  size?: "sm" | "md" | "lg" | "xs";
  orientation?: "horizontal" | "vertical";
  align?: "left" | "center";
  className?: string;
  showText?: boolean;
}

export function Logo({ 
  scrolled = false, 
  variant = "default", 
  size = "md",
  orientation = "horizontal",
  align = "left",
  className = "",
  showText = true
}: LogoProps) {
  
  // Decide actual size based on prop and scrolled state
  const effectiveSize = scrolled ? "sm" : size;
  const isVertical = orientation === "vertical";
  const isCentered = align === "center";

  const sizeStyles = {
    sm: {
      image: "h-7 md:h-10 xl:h-12",
      hindiText: "text-[7px] md:text-[9px] lg:text-[11px]",
      englishText: "text-[8px] md:text-[11px] lg:text-sm",
      subText: "text-[6px] md:text-[8px] lg:text-[9px]",
      gap: "gap-0",
      marginY: "my-0"
    },
    md: {
      image: "h-9 md:h-14 xl:h-16",
      hindiText: "text-[8px] md:text-xs",
      englishText: "text-[10px] md:text-sm",
      subText: "text-[7px] md:text-[10px]",
      gap: "gap-0.5",
      marginY: "my-0.5"
    },
    lg: {
      image: "h-12 md:h-18 xl:h-24",
      hindiText: "text-[10px] md:text-sm lg:text-base",
      englishText: "text-[12px] md:text-lg lg:text-xl",
      subText: "text-[9px] md:text-xs lg:text-sm",
      gap: "gap-1",
      marginY: "my-1"
    },
    xs: {
      image: "h-6 md:h-8 xl:h-10",
      hindiText: "text-[6px] md:text-[8px] lg:text-[13px]",
      englishText: "text-[7px] md:text-[10px] lg:text-[10px] text-wrap",
      subText: "text-[5px] md:text-[7px] lg:text-[8px]",
      gap: "gap-0",
      marginY: "my-0"
    }
  };

  const style = sizeStyles[effectiveSize];

  const verticalImageStyles = {
    xs: "h-10 md:h-12",
    sm: "h-14 md:h-16 xl:h-20",
    md: "h-16 md:h-20 xl:h-24",
    lg: "h-20 md:h-24 xl:h-28",
  };

  const imageClasses = `
    w-auto object-contain group-hover:scale-[1.02] transition-all duration-300 shrink-0
    ${isVertical ? verticalImageStyles[effectiveSize] : style.image}
    ${variant === "white" ? "brightness-0 invert opacity-90" : ""}
    ${variant === "admin" ? "h-8 md:h-9" : ""}
  `.trim();

  return (
    <div className={`flex ${isVertical ? (isCentered ? "flex-col items-center text-center gap-2" : "flex-col items-start text-left gap-2") : "items-center"} group transition-all duration-300 ${className}`}>
      <div className={`relative shrink-0 flex ${isVertical && isCentered ? "justify-center" : "justify-start"}`}>
        <Image
          src="/NLRILOGO.png"
          alt="CVRUK-NIRM Logo"
          width={320}
          height={isVertical ? 160 : 60}
          className={imageClasses}
          priority
        />
      </div>
      
      {showText && (
        <div className={`
          flex flex-col transition-all duration-300 
          ${isVertical ? (isCentered ? "mt-1.5 items-center text-center" : "mt-1.5 items-start text-left") : "ml-2 md:ml-3"}
          ${variant === "admin" ? "hidden lg:flex" : "flex"}
          ${style.gap}
        `}>
          <h1 className={`
            font-bold text-primary leading-tight transition-all duration-300 whitespace-nowrap
            ${style.hindiText}
            ${variant === "white" ? "text-white/70" : ""}
          `}>
            राष्ट्रीय ग्रामीण प्रबंधन संस्थान
          </h1>
          <div className={`
            border-b transition-all duration-300 w-full
            ${variant === "white" ? "border-white/20" : "border-primary/10"}
            ${style.marginY}
          `}></div>
          <h1 className={`
            font-bold leading-tight transition-all duration-300 whitespace-nowrap
            ${style.englishText}
            ${variant === "white" ? "text-white/90" : "text-[#0302fc]"}
          `}>
            National Institute of Rural Management
          </h1>
        </div>
      )}
    </div>
  );
}
