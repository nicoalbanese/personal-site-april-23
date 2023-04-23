const Loom = ({ url, caption }: { url: string; caption?: string }) => {
  return (
    <div className="my-4 max-w-[750px] mx-auto">
      <div className="bg-slate-200 dark:bg-slate-800">
        <iframe
          width="760"
          height="400"
          loading="lazy"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      {caption ? <p className="caption">{caption}</p> : null}
    </div>
  );
};

export default Loom;
