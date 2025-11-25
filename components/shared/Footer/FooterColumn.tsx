interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold font-inter text-neutral-100 pb-4">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
