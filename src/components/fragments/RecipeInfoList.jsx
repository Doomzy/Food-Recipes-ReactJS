function RecipeInfoList({ children, title, containerClasses }) {
  return (
    <div className={containerClasses}>
      <p className=" text-header font-semibold text-secondary">{title}</p>
      <ol className=" text-smaller grid grid-cols-1 gap-x-6 gap-y-2 mb-8 px-5">
        {children}
      </ol>
    </div>
  );
}

export default RecipeInfoList;
