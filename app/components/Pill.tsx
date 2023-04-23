const Pill = ({ text }: { text: string }) => {
  return <span className="inline-block border border-slate-700 px-2 py-1 text-slate-800 dark:text-slate-100 rounded-lg mb-1 mr-2">{text}</span>;
};


export default Pill;