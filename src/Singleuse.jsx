export default function Singleuse({friends}){
    console.log(friends)
    const {name, email} =friends;
    return(
        <div>
            <h4>Name : {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}