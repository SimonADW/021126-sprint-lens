"use client";
import Button from "@/client/components/Button/Button";

function Error({ error, retry }) {
	return (
		<div style={{ textAlign: "center", marginTop: "40%"}}>
			<h1>So sorry! Something went wrong.</h1>
			 Please{" "} 
			<Button onClick={retry}>Retry</Button>
			<p><strong>Error:</strong> {error.message}</p>
		</div>
	);
}

export default Error;
