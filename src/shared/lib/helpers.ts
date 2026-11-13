import React from "react";

/** 
 @description Returns a delayed promise with random number
 @param returnValue 
 */
export function getRandomlyDelayedPromise<T>(returnValue: T): Promise<T> {	
	const randomDelay = Math.round(Math.random() * 2) * 1000;
	return new Promise((res) =>
		setTimeout(() => res(returnValue), randomDelay),
	);
}
