const Bouncer = (props) => {
    let reply;
    if(props.age < 18) {
        reply = "Sorry kid, you can't come in"    
    } else if(props.age < 21){
        reply = "You can come in, but NO drinking!"
    } else {
        reply = <p>"Come in, you CAN drink!"
            <img src="https://media0.giphy.com/media/2ud0W3E7QEV20/giphy.gif?cid=6c09b952bieceed34mh7u5r3zei4dss5h9dcpyk5y9i7ink3&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
        </p>
    }
    return (
        <div>   
            <p>
                <b>Bouncer:</b> How old are you?
            </p>   
            <p>
                <b>You:</b> I am {props.age} year old
            </p>
            <p>
                <b>Bouncer:</b> {reply} 
            </p>
        </div>
    )
}