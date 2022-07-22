import { Navigate } from "react-router-dom";

function getAuth(){
	const data = localStorage.getItem("userid")
	if(data){
		// const username = JSON.parse(data)
		return <children />;
	}
	return null

}
export function RequireAuth ({ children, redirectTo}){
	let isAuthenticated = getAuth();
	return isAuthenticated ? children : 
	<Navigate to={redirectTo} />
}
