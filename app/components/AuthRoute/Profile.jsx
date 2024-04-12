const Profile = () => {
    const user = JSON.parse(localStorage.getItem('userId'));
    return ( 
        <div>
            <h1>Profile</h1>
            <h2>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <img src={user.photoURL} alt="Girl in a jacket" width="250" height="300"></img>
        </div>
     );
}
 
export default Profile;