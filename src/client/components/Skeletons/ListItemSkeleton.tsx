import React from "react";

/** 
	@description Flexible skeleton for lists	
	@param height optional heigth in rem
*/ 
function ListItemSkeleton({ height = 1 }: { height?: number }) {
	return (
		<div
			className="skeleton" // Global Skeleton class
			style={{ display: "flex", height: `${height}rem`, marginBottom: "0.25rem" }}
		></div>
	);
}

export default ListItemSkeleton;
