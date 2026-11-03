import { auth0 } from "@/shared/lib/auth0";
import { redirect } from "next/navigation";


async function CheckInPage() {
	const session = await auth0.getSession();
	if (!session) redirect("/auth/login");

	return <div>Check in page - Form to come...</div>;
}

export default CheckInPage;
