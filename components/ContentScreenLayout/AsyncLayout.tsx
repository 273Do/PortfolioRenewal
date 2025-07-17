const AsyncLayout = async ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex h-[calc(100svh-5rem)] items-end ${className}`}>
      <div className="flex size-full flex-col items-end justify-between pt-0">
        {children}
      </div>
    </div>
  );
};

export default AsyncLayout;
