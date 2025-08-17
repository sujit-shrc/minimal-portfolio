interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-base sm:text-md">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-px bg-white mx-auto mt-8"></div>
    </div>
  );
}