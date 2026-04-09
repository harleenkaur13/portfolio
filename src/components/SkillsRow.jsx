const SkillsRow = ({ children }) => {
  return (
    <div className="w-full overflow-hidden py-5">
      <div className="flex gap-8 skill-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsRow;
