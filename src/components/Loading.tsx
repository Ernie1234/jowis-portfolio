function Loading() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 min-h-[55vh]">
      <div className="spinner"></div>
      <h5 className="text-3xl text-black dark:text-red-400">
        Loading the content for you.
      </h5>
    </div>
  );
}

export default Loading;
