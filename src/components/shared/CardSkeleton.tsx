const CardSkeleton = () => {
    return (
      <div className="bg-base-200 flex flex-col gap-2 p-2 rounded-xl">
        <div className="w-full h-[150px] bg-gray-200 animate-pulse rounded-2xl p-3"></div>
        <h1 className="h-6 bg-gray-200 animate-pulse rounded w-32"></h1>
        <div className="flex  bg-gray-200 justify-between items-center">
          <div className="h-6 bg-gray-200 animate-pulse rounded w-32"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-32"></div>
        </div>
  
        <div className="h-6 bg-gray-200 animate-pulse rounded w-32"></div>
        <div className="h-6 bg-gray-200 animate-pulse rounded w-32"></div>
        <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
      </div>
    );
  };
  
  export default CardSkeleton;