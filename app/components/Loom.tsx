const Loom = ({ url, caption }: { url: string; caption?: string }) => {
  return (
    <div className="my-4 max-w-[750px] mx-auto">
      <div
      className="bg-slate-200 dark:bg-slate-800"
        style={{
          position: "relative",
          paddingBottom: "55.27123848515865%",
          height: 0,
        }}
      >
        <iframe
          src={url}
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      {caption ? <p className="caption">{caption}</p> : null}
    </div>
  );
};

export default Loom;
